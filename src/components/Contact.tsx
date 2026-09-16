import { useState, type AnimationEvent, type FormEvent } from 'react'
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react'
import { personalInfo } from '../config/personal'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialForm: FormData = { name: '', email: '', subject: '', message: '' }

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

type ContactProps = {
  asPage?: boolean
}

export default function Contact({ asPage = false }: ContactProps) {
  const Heading = asPage ? 'h1' : 'h2'
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleAutofill =
    (field: keyof FormData) => (event: AnimationEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.animationName === 'contact-autofill-start') {
        handleChange(field, event.currentTarget.value)
      }
    }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    if (!web3formsKey) {
      setStatus('error')
      setStatusMessage(
        'Contact form is not yet configured. Please email me directly or add your Web3Forms access key to .env as VITE_WEB3FORMS_ACCESS_KEY.',
      )
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          from_name: personalInfo.fullName,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully.')
        setForm(initialForm)
        setErrors({})
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong. Please try again or email me directly.')
    }
  }

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.emailHref,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: personalInfo.phoneHref,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: undefined,
    },
    {
      icon: Globe,
      label: personalInfo.business,
      value: 'mbhetech.co.za',
      href: personalInfo.businessUrl,
    },
    {
      icon: Mail,
      label: `${personalInfo.business} Email`,
      value: personalInfo.businessEmail,
      href: personalInfo.businessEmailHref,
    },
  ]

  return (
    <section id="contact" className="section-divider bg-slate-50 py-20 lg:py-28" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <Heading id="contact-heading" className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </Heading>
          <p className="section-subheading">
            Interested in working together? Send me a message or reach out through any of the
            channels below.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="surface-card flex items-start gap-4 p-4"
              >
                <div className="icon-well flex-shrink-0 p-2.5">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 text-sm text-slate-700 transition-colors hover:text-slate-900 break-all"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-700">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="on"
            name="contact"
            className="surface-card lg:col-span-3 space-y-5 p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name <span className="text-slate-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onAnimationStart={handleAutofill('name')}
                  className="contact-autofill w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email <span className="text-slate-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onAnimationStart={handleAutofill('email')}
                  className="contact-autofill w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                Subject <span className="text-slate-500">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                autoComplete="off"
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                onAnimationStart={handleAutofill('subject')}
                className="contact-autofill w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message <span className="text-slate-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                autoComplete="off"
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onAnimationStart={handleAutofill('message')}
                className="contact-autofill min-h-[120px] w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-300"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {statusMessage && (
              <p
                className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}
                role="status"
              >
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" />
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
