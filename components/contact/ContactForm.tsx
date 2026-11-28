'use client';

import { useState } from 'react';

const serviceOptions = [
  { title: 'Software Development', desc: 'Cloud, Microservices, API' },
  { title: 'Digital Marketing', desc: 'Scale Growth, Performance' },
  { title: 'Video Editing', desc: '4K Post-Production, Reels, VFX' },
  { title: 'Full Integrated Solution', desc: 'End-to-End Execution' },
];

const budgetTiers = ['$10k – $25k', '$25k – $50k', '$50k+', 'Undecided'];

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Software Development']);
  const [budget, setBudget] = useState('$25k - $50k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1200);
  };

  return (
    <div className="glass-panel-pro rounded-3xl p-6 sm:p-8 md:p-10 glass-rim" id="contact-form-container">
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/40 gap-4">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
            Project Inquiry Terminal
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-medium mt-0.5">
            Complete the parameters below to trigger our direct partner dispatch queue.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 glass-subcard px-3 py-1.5 rounded-full text-primary font-label-sm text-label-sm shrink-0">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="font-bold uppercase tracking-wider">Encrypted</span>
        </div>
      </div>

      <form className="flex flex-col gap-5" id="contact-form" onSubmit={handleSubmit}>
        {/* Full Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-lg text-label-lg text-on-surface font-semibold" htmlFor="full-name">
              Full Name <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-lg pointer-events-none">
                person
              </span>
              <input
                className="w-full glass-subcard text-on-surface font-body-md text-body-md pl-10 pr-4 py-3 rounded-xl outline-none transition-all placeholder:text-on-surface-variant/60 focus:bg-white/40 focus:ring-2 focus:ring-primary/30"
                id="full-name"
                placeholder="Elena Rostova"
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-lg text-label-lg text-on-surface font-semibold" htmlFor="business-email">
              Business Email <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-lg pointer-events-none">
                alternate_email
              </span>
              <input
                className="w-full glass-subcard text-on-surface font-body-md text-body-md pl-10 pr-4 py-3 rounded-xl outline-none transition-all placeholder:text-on-surface-variant/60 focus:bg-white/40 focus:ring-2 focus:ring-primary/30"
                id="business-email"
                placeholder="elena@enterprise.io"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Company / Organization */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-lg text-label-lg text-on-surface font-semibold" htmlFor="company">
            Company / Organization
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-lg pointer-events-none">
              domain
            </span>
            <input
              className="w-full glass-subcard text-on-surface font-body-md text-body-md pl-10 pr-4 py-3 rounded-xl outline-none transition-all placeholder:text-on-surface-variant/60 focus:bg-white/40 focus:ring-2 focus:ring-primary/30"
              id="company"
              placeholder="Vanguard Dynamics Ltd."
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>

        {/* Service Selection Multi-Pills */}
        <div className="flex flex-col gap-2 pt-1">
          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
            Service Selection <span className="text-on-surface-variant font-normal">(Select all that apply)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="service-pills">
            {serviceOptions.map((srv) => {
              const isChecked = selectedServices.includes(srv.title);
              return (
                <label
                  key={srv.title}
                  onClick={() => toggleService(srv.title)}
                  className={`relative flex items-center p-3.5 rounded-2xl glass-subcard cursor-pointer select-none transition-all hover:bg-white/35 ${
                    isChecked ? 'ring-2 ring-primary/50 bg-white/30' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-on-primary mr-3 transition-colors border ${
                      isChecked
                        ? 'bg-primary border-primary'
                        : 'bg-white/30 border-white/60'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-xs transition-transform ${isChecked ? 'scale-100' : 'scale-0'}`}>
                      check
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">{srv.title}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">{srv.desc}</span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Project Budget Selector */}
        <div className="flex flex-col gap-2 pt-1">
          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
            Approximate Project Budget
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {budgetTiers.map((tier) => {
              const isSelected = budget === tier;
              return (
                <label
                  key={tier}
                  onClick={() => setBudget(tier)}
                  className={`relative flex items-center justify-center p-3 rounded-xl glass-subcard cursor-pointer select-none text-center transition-all hover:bg-white/35 ${
                    isSelected ? 'ring-2 ring-primary/50 bg-white/30' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={tier}
                    checked={isSelected}
                    onChange={() => {}}
                    className="sr-only"
                  />
                  <span className={`font-label-lg text-label-lg transition-colors ${isSelected ? 'text-primary font-bold' : 'text-on-surface font-semibold'}`}>
                    {tier}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Project Details / Objectives */}
        <div className="flex flex-col gap-1.5 pt-1">
          <label className="font-label-lg text-label-lg text-on-surface font-semibold" htmlFor="project-details">
            Project Details / Objectives <span className="text-primary">*</span>
          </label>
          <textarea
            className="w-full glass-subcard text-on-surface font-body-md text-body-md p-4 rounded-xl outline-none transition-all placeholder:text-on-surface-variant/60 focus:bg-white/40 focus:ring-2 focus:ring-primary/30 resize-y"
            id="project-details"
            placeholder="Briefly describe your targets, timelines, technical hurdles, or creative aspirations..."
            required
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button & Feedback State */}
        <div className="pt-2 flex flex-col gap-3">
          <button
            className="tactile-button w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-xl shadow-lg group disabled:opacity-80"
            id="submit-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className="material-symbols-outlined text-lg animate-spin" id="submit-spinner">
                progress_activity
              </span>
            )}
            <span className="tracking-wide font-bold" id="submit-text">
              {isSubmitting ? 'Dispatching Inquiry...' : 'Send Project Inquiry'}
            </span>
            {!isSubmitting && (
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" id="submit-icon">
                arrow_forward
              </span>
            )}
          </button>

          {/* Feedback Banner */}
          {submitted && (
            <div className="p-4 glass-subcard rounded-2xl flex items-center gap-3 animate-fade-in border-l-4 border-l-primary" id="form-feedback">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                Inquiry registered successfully. Founder review routing activated.
              </p>
            </div>
          )}

          {/* Reassurance Note */}
          <div className="flex items-center gap-2 text-on-surface-variant pt-1 font-medium">
            <span className="material-symbols-outlined text-primary text-base">verified_user</span>
            <p className="font-body-sm text-body-sm">
              Strict confidentiality guaranteed. No unsolicited sales spam.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
