import { Resend } from 'resend'

interface ContactBody {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  website?: string // honeypot
}

export const config = { runtime: 'nodejs' }

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  let body: ContactBody
  try {
    body = (await req.json()) as ContactBody
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  // Honeypot — silently accept to not tip off bots.
  if (body.website) return json({ ok: true })

  const { name, email, message } = body
  if (!name || !email || !message) {
    return json({ error: 'Missing required fields' }, 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO ?? 'info@inspectsea.com'
  const from = process.env.CONTACT_FROM ?? 'InspectSea <onboarding@resend.dev>'

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return json({ error: 'Email service not configured' }, 500)
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New request — ${name}${body.service ? ` (${body.service})` : ''}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      body.phone ? `Phone: ${body.phone}` : null,
      body.company ? `Company: ${body.company}` : null,
      body.service ? `Service: ${body.service}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    console.error('Resend error', error)
    return json({ error: 'Failed to send email' }, 502)
  }

  return json({ ok: true })
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
