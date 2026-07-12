import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/PageHero'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../data/site'
import { services } from '../data/services'
import { submitContact } from '../lib/submitContact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [service, setService] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setErrorMessage('')
    setStatus('sending')

    try {
      await submitContact({
        name: String(data.name ?? ''),
        email: String(data.email ?? ''),
        phone: String(data.phone ?? ''),
        company: String(data.company ?? ''),
        service: String(data.service ?? ''),
        message: String(data.message ?? ''),
        website: String(data.website ?? ''),
      })
      setStatus('success')
      setService('')
      form.reset()
    } catch (error) {
      const code = error instanceof Error ? error.message : ''
      if (code === 'TIMEOUT') {
        setErrorMessage(t('contact.timeout', { email: CONTACT_EMAIL }))
      } else {
        setErrorMessage(t('contact.error', { email: CONTACT_EMAIL }))
      }
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="section-light py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="card-surface p-6 sm:p-8">
            {status === 'success' ? (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6">
                <p className="font-medium text-navy-900">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <input type="hidden" name="service" value={service} />

                <div className="space-y-0">
                  <Label htmlFor="contact-name">{t('contact.name')} *</Label>
                  <Input id="contact-name" name="name" required autoComplete="name" />
                </div>

                <div className="space-y-0">
                  <Label htmlFor="contact-company">{t('contact.company')}</Label>
                  <Input id="contact-company" name="company" autoComplete="organization" />
                </div>

                <div className="space-y-0">
                  <Label htmlFor="contact-email">{t('contact.email')} *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-0">
                  <Label htmlFor="contact-phone">{t('contact.phone')}</Label>
                  <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
                </div>

                <div className="space-y-0 sm:col-span-2">
                  <Label htmlFor="contact-service">{t('contact.service')}</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="contact-service" className="w-full">
                      <SelectValue placeholder={t('contact.servicePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => {
                        const title = t(`services.${s.slug}.title`)
                        return (
                          <SelectItem key={s.slug} value={title}>
                            {title}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-0 sm:col-span-2">
                  <Label htmlFor="contact-message">{t('contact.message')} *</Label>
                  <Textarea id="contact-message" name="message" required rows={5} />
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" disabled={status === 'sending'} size="lg">
                    {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                  </Button>
                  {status === 'error' && (
                    <p className="mt-3 text-sm text-destructive">{errorMessage}</p>
                  )}
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="card-surface p-7">
              <h3 className="text-lg font-bold">{t('contact.directTitle')}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('contact.phone')}
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${CONTACT_PHONE}`} className="hover:text-teal-500">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('contact.email')}
                  </dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-teal-500">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('locations.coverage.badge')}
                  </dt>
                  <dd className="mt-0.5 text-navy-900/80">{t('locations.coverage.title')}</dd>
                </div>
              </dl>
            </div>

            <div className="card-surface p-7">
              <h3 className="text-lg font-bold">{t('contact.complaintTitle')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t('contact.complaintText')}</p>
              <a
                href="/docs/complaint-objection-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-teal-500 hover:text-navy-900"
              >
                {t('contact.complaintButton')} →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
