import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/PageHero'
import { services } from '../data/services'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // honeypot: bots fill hidden field
    if (data.website) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'

  return (
    <>
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          {status === 'success' ? (
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <p className="font-medium text-navy-900">{t('contact.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.name')} *</span>
                <input name="name" required className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.company')}</span>
                <input name="company" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.email')} *</span>
                <input type="email" name="email" required className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.phone')}</span>
                <input name="phone" className={inputClass} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.service')}</span>
                <select name="service" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {t('contact.servicePlaceholder')}
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={t(`services.${s.slug}.title`)}>
                      {t(`services.${s.slug}.title`)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium">{t('contact.message')} *</span>
                <textarea name="message" required rows={5} className={inputClass} />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="brand-gradient rounded-full px-8 py-3.5 font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                </button>
                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-600">{t('contact.error')}</p>
                )}
              </div>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-card">
            <h3 className="text-lg font-bold">{t('contact.directTitle')}</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t('contact.phone')}
                </dt>
                <dd className="mt-0.5">
                  <a href="tel:+380487000000" className="hover:text-teal-500">
                    +38 048 700 00 00
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t('contact.email')}
                </dt>
                <dd className="mt-0.5">
                  <a href="mailto:info@inspectsea.com" className="hover:text-teal-500">
                    info@inspectsea.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t('locations.addressLabel')}
                </dt>
                <dd className="mt-0.5 text-navy-900/80">65014, Odesa, 6 Prymorska St.</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-card">
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
      </section>
    </>
  )
}
