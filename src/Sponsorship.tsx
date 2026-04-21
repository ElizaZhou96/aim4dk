import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Handshake, BadgeEuro, Users } from 'lucide-react';

function Sponsorship() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2B2B] via-[#34302F] to-[#2A2625] text-[#F5EFE6]">
      <nav className="bg-[#2B2B2B]/90 backdrop-blur-md border-b border-[#8C4F4F]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/aim4dk_logo.png" alt="AIM4DK Logo" className="h-12 w-auto" />
            <span className="text-[#C98A7A] font-semibold text-lg">AIM4DK 2026</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE] transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D2A092] mb-6">
            Sponsorship Opportunities
          </h1>
          <p className="text-lg text-[#E7DED2] max-w-3xl mx-auto leading-8">
            Support a focused IJCAI-ECAI 2026 workshop on reliable AI under temporal drift,
            disappearing knowledge, and long-term reproducibility.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<Handshake className="w-6 h-6 text-[#A85C53]" />}
            title="Why Sponsor AIM4DK"
            text="AIM4DK brings together researchers working on temporal robustness, knowledge reliability, reproducibility, and data lifecycle challenges in AI."
          />
          <InfoCard
            icon={<Users className="w-6 h-6 text-[#A85C53]" />}
            title="Who You Reach"
            text="An international audience of researchers in machine learning, NLP, knowledge representation, evaluation, trustworthy AI, and research infrastructures."
          />
          <InfoCard
            icon={<BadgeEuro className="w-6 h-6 text-[#A85C53]" />}
            title="Flexible Support"
            text="We welcome financial sponsorship, community partnerships, student support, invited speaker support, and other tailored forms of contribution."
          />
        </div>
      </section>

      <section className="bg-[#F3EAE2] text-[#3A3533] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#A85C53] mb-8 text-center">
            Sponsorship Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SponsorTier
              title="Supporter"
              subtitle="Entry-level visibility"
              items={[
                'Logo on the workshop website',
                'Acknowledgement on the sponsorship page',
                'Mention in workshop opening slides',
              ]}
            />

            <SponsorTier
              title="Partner"
              subtitle="Enhanced visibility"
              items={[
                'All Supporter benefits',
                'Highlighted logo placement',
                'Mention in workshop announcements',
                'Optional short sponsor profile on the website',
              ]}
              featured
            />

            <SponsorTier
              title="Community / Special Session Partner"
              subtitle="For aligned research initiatives"
              items={[
                'Co-branded special session or focused panel',
                'Logo placement and acknowledgement',
                'Coordination of invited participation where appropriate',
                'Suitable for academic consortia and research infrastructures',
              ]}
            />
          </div>

          <p className="text-center text-[#5A524F] mt-8 leading-7 max-w-3xl mx-auto">
            We are also open to tailored forms of support, including travel support for invited speakers,
            student support, community partnerships, and in-kind contributions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#D2A092] mb-6">Get in Touch</h2>
          <p className="text-[#E7DED2] text-lg leading-8 mb-8">
            If your organization is interested in supporting AIM4DK 2026, we would be very happy to discuss
            sponsorship or community partnership opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:aim4dk.ai@gmail.com?subject=AIM4DK%202026%20Sponsorship%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-[#A85C53] text-[#FDF9F4] shadow-md hover:bg-[#935047] hover:shadow-lg transition-all duration-200"
            >
              Contact the Organizers
            </a>

            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-[#EADFD4] text-[#8A4E46] shadow-sm hover:bg-[#DDCDBE] hover:shadow-md transition-all duration-200"
            >
              Return to Workshop Website
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-6 shadow-sm text-[#3A3533]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-[#A85C53] mb-3">{title}</h3>
      <p className="text-[#5A524F] leading-7">{text}</p>
    </div>
  );
}

function SponsorTier({
  title,
  subtitle,
  items,
  featured = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg border ${
        featured
          ? 'bg-[#FCF1EF] border-[#E4C7C2]'
          : 'bg-[#F9F4EE] border-[#DDCEC3]'
      }`}
    >
      <h3 className="text-xl font-semibold text-[#A85C53] mb-2">{title}</h3>
      <p className="text-[#6A625D] mb-4">{subtitle}</p>
      <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sponsorship;
