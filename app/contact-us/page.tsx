import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import AgencyInfo from '@/components/contact/AgencyInfo';
import OnboardingProcess from '@/components/contact/OnboardingProcess';
import EnterpriseNda from '@/components/contact/EnterpriseNda';
import FixedBackground from '@/components/layout/FixedBackground';
import MistPageSections from '@/components/layout/MistPageSections';

export const metadata = {
  title: 'Contact Us | TRIVEX',
  description: 'Initiate contact with TRIVEX founding partners for enterprise software development, digital marketing, and professional video editing.',
};

export default function ContactUsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />
      <MistPageSections>
        <ContactHero />

        <section className="relative w-full bg-transparent max-w-7xl mx-auto px-margin-mobile md:px-margin pb-16 md:pb-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <AgencyInfo />
          </div>
        </section>

        <OnboardingProcess />
        <EnterpriseNda />
      </MistPageSections>
    </div>
  );
}
