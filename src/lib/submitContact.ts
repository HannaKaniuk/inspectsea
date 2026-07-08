export type ContactPayload = {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
  website?: string
}

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const EMAIL_TIMEOUT_MS = 15_000

export async function submitContact(payload: ContactPayload): Promise<void> {
  // Honeypot: bots fill the hidden field
  if (payload.website?.trim()) return

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) throw new Error('WEB3FORMS_ACCESS_KEY_MISSING')

  const name = payload.name.trim()
  const email = payload.email.trim().toLowerCase()
  const message = payload.message.trim()
  const phone = payload.phone?.trim()
  const company = payload.company?.trim()
  const service = payload.service?.trim()

  if (!name || !email || !message) throw new Error('MISSING_FIELDS')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('INVALID_EMAIL')

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS)

  try {
    const subject = `Нова заявка — ${name}${service ? ` (${service})` : ''}`
    const res = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: 'InspectSea Website',
        name,
        email,
        ...(phone ? { phone } : {}),
        ...(company ? { company } : {}),
        ...(service ? { service } : {}),
        message,
        botcheck: false,
      }),
    })

    const data = (await res.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null

    if (!res.ok || !data?.success) {
      throw new Error(data?.message || 'SUBMIT_FAILED')
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('TIMEOUT', { cause: error })
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}
