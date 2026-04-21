import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Smile,
  Users,
  Calendar,
  BookOpen,
  Menu,
  X,
  Presentation,
  Paperclip,
  Sun,
  Moon,
  PiggyBank,
} from 'lucide-react';

type Theme = 'light' | 'dark';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  

  const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');

  //   if (savedTheme === 'light' || savedTheme === 'dark') {
  //     setTheme(savedTheme);
  //   } else {
  //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setTheme(prefersDark ? 'dark' : 'light');
  //   }

  //   setThemeLoaded(true);
  // }, []);

  // useEffect(() => {
  //   if (!themeLoaded) return;

  //   document.documentElement.classList.remove('light', 'dark');
  //   document.documentElement.classList.add(theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme, themeLoaded]);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  const styles = useMemo(
    () => ({
      page: isDark
        ? 'bg-gradient-to-b from-[#2B2B2B] via-[#34302F] to-[#2A2625] text-[#F5EFE6]'
        : 'bg-gradient-to-b from-[#FAF7F2] via-[#F4EEE8] to-[#EEE7DF] text-[#2F2A28]',

      nav: isDark
        ? 'bg-[#2B2B2B]/90 border-[#8C4F4F]/30'
        : 'bg-[#FFFDF9]/90 border-[#D8C7BA]',

      hero: isDark
        ? 'bg-gradient-to-b from-[#2B2B2B] via-[#363231] to-transparent'
        : 'bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE5] to-transparent',

      darkSection: isDark
        ? 'bg-[#332F2E] text-[#F5EFE6]'
        : 'bg-[#F7F1EB] text-[#3A3533]',

      lightSection: isDark
        ? 'bg-[#F3EAE2] text-[#3A3533]'
        : 'bg-[#FFFDF9] text-[#3A3533]',

      headingOnDark: isDark ? 'text-[#D2A092]' : 'text-[#A85C53]',
      headingOnLight: 'text-[#A85C53]',

      bodyMutedOnDark: 'text-[#E7DED2]',
      bodyMutedOnLight: 'text-[#5A524F]',

      navText: isDark
        ? 'text-[#E7DED2] hover:text-[#D2A092]'
        : 'text-[#4B4441] hover:text-[#A85C53]',

      mobileMenu: isDark
        ? 'bg-[#2F2B2A] border-[#4A3D3C]'
        : 'bg-[#F5EFE6] border-[#D9C8BB]',

      mobileNavText: isDark
        ? 'text-[#F3EAE2] hover:text-[#F5EFE6] hover:bg-[#413A39]'
        : 'text-[#4B4441] hover:text-[#A85C53] hover:bg-[#EFE4DA]',

      themeButton: isDark
        ? 'border-[#8C4F4F]/30 text-[#C98A7A] hover:text-[#F5EFE6] hover:bg-[#3A3533]'
        : 'border-[#D8C7BA] text-[#A85C53] hover:text-[#7E433C] hover:bg-[#F3EAE2]',

      mobileMenuButton: isDark
        ? 'text-[#C98A7A] hover:text-[#F5EFE6]'
        : 'text-[#A85C53] hover:text-[#7E433C]',

      primaryCard: isDark
        ? 'bg-[#3A3533] border-[#5A4745] text-[#F5EFE6]'
        : 'bg-[#F9F4EE] border-[#DDCEC3] text-[#3A3533]',

      secondaryCard: isDark
        ? 'bg-[#433D3B] border-[#5C4A48] text-[#F5EFE6]'
        : 'bg-[#FCF1EF] border-[#E4C7C2] text-[#3A3533]',

      accentText: isDark ? 'text-[#D2A092]' : 'text-[#A85C53]',
      subtleText: isDark ? 'text-[#D7CEC5]' : 'text-[#6A625D]',
      strongText: isDark ? 'text-[#F5EFE6]' : 'text-[#3A3533]',

      pillPrimary: isDark
        ? 'bg-[#A85C53] text-[#FDF9F4] hover:bg-[#935047]'
        : 'bg-[#A85C53] text-[#FDF9F4] hover:bg-[#935047]',

      pillSecondary: isDark
        ? 'bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE]'
        : 'bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE]',

      formBg: isDark
        ? 'bg-[#3A3533] border-[#5A4745]'
        : 'bg-[#F9F4EE] border-[#DDCEC3]',

      inputBg: isDark
        ? 'bg-[#2E2A29] border-[#5A4745] text-[#F5EFE6] placeholder:text-[#B9AEA4]'
        : 'bg-white border-[#D7C7BB] text-[#3A3533] placeholder:text-[#8A817B]',

      footer: isDark
        ? 'bg-[#2B2B2B] border-[#8C4F4F]/20 text-[#D7CEC5]'
        : 'bg-[#F3EAE2] border-[#D8C7BA] text-[#5A524F]',
    }),
    [isDark]
  );

  return (
    <React.Fragment>
      <div className={`min-h-screen transition-colors duration-300 ${styles.page}`}>
        <nav
          className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${styles.nav}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center text-[#B86A5D] font-semibold text-xl">
                <img src="/aim4dk_logo.png" alt="Logo" className="h-14 w-auto" />
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <NavItem theme={theme} icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
                <NavItem theme={theme} icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
                <NavItem theme={theme} icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                <NavItem theme={theme} icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
                <NavItem theme={theme} icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                <NavItem theme={theme} icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
                <NavItem theme={theme} icon={<PiggyBank size={16} />} text="Sponsors" to="/sponsorship" />
                <NavItem theme={theme} icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full border transition-colors duration-200 ${styles.themeButton}`}
                  aria-label="Toggle theme"
                  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <a href="https://2026.ijcai.org/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img
                    src="/ijcai26_logo.png"
                    className="w-21 h-8 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                    alt="IJCAI 2026 Logo"
                  />
                </a>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`block md:hidden p-2 transition-colors duration-200 ${styles.mobileMenuButton}`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div
                className={`md:hidden absolute top-16 left-0 right-0 border-t shadow-lg transition-colors duration-300 ${styles.mobileMenu}`}
              >
                <div className="px-4 py-2 space-y-1">
                  <MobileNavItem theme={theme} icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
                  <MobileNavItem theme={theme} icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
                  <MobileNavItem theme={theme} icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                  <MobileNavItem theme={theme} icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
                  <MobileNavItem theme={theme} icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                  <MobileNavItem theme={theme} icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
                  <MobileNavItem theme={theme} icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
                </div>
              </div>
            )}
          </div>
        </nav>

        <section
          id="home"
          className={`w-full px-4 sm:px-6 lg:px-8 py-20 md:py-24 transition-colors duration-300 ${styles.hero}`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#C98A7A]' : 'text-[#A85C53]'}`}>
              AI Modeling for Disappearing Knowledge (AIM4DK)
            </h1>

            <p className={`text-lg mb-8 ${isDark ? 'text-[#E7DED2]' : 'text-[#5A524F]'}`}>
              Reliable AI in a Challenging World
              <br />
              <strong className={`font-bold ${isDark ? 'text-[#F5EFE6]' : 'text-[#3A3533]'}`}>
                📅 Full-Day August 15/16/17, 2026 (TBA)
              </strong>{' '}
              📍Bremen, Germany
            </p>

            <div className="mt-10 w-full relative overflow-hidden rounded-2xl shadow-lg">
              <div className="w-full h-full md:h-[400px] overflow-hidden">
                <img
                  src="/ijcai_banner.png"
                  alt="AIM4DK banner"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>

              <div className="absolute bottom-3 right-4 text-[11px] text-white/80 bg-black/30 px-2 py-1 rounded">
                Image source:{' '}
                <a
                  href="https://2026.ijcai.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#D2A092]"
                >
                  IJCAI-26 Official Website
                </a>
                . © IJCAI.
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`py-14 sm:py-16 lg:py-20 transition-colors duration-300 ${styles.lightSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10 sm:mb-12 ${styles.headingOnLight}`}>
              About the Workshop
            </h2>

            <div className={`space-y-6 sm:space-y-8 text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 ${styles.bodyMutedOnLight}`}>
              <div className={`border rounded-2xl p-5 sm:p-6 shadow-sm transition-colors duration-300 ${styles.secondaryCard}`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-4 ${styles.headingOnLight}`}>Why this matters</h3>

                <div className="space-y-4">
                  <StatItem
                    href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
                    value="38%"
                    text="of webpages from 2013 are no longer accessible"
                    theme={theme}
                  />
                  <StatItem
                    href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
                    value="54%"
                    text="of Wikipedia pages contain at least one broken reference"
                    theme={theme}
                  />
                  <StatItem
                    href="https://www.nature.com/articles/s41598-022-15245-z"
                    value="91%"
                    text="of real-world deployed AI models suffer performance degradation over time"
                    theme={theme}
                  />
                </div>
              </div>

              <p>
                The web forgets, links disappear, datasets age, and the knowledge that once supported AI systems slowly
                fades away. At the same time, deployed models continue to drift as the world changes, often relying on
                assumptions that are no longer valid, verifiable, or reproducible.
              </p>

              <p>
                This shows a growing challenge for reliable AI: systems may generate outdated answers, hallucinate unreliable
                facts, or produce outputs whose original foundations can no longer be traced. Disappearing knowledge is not
                just a data problem. It is also a question of trust, evaluation, and scientific accountability.
              </p>

              <div className={`border rounded-2xl p-4 sm:p-5 shadow-sm transition-colors duration-300 ${styles.primaryCard}`}>
                <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${styles.headingOnLight}`}>AIM4DK (&quot;Aim&quot; for &quot;DK&quot;) asks:</h3>
                <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-[#F3EAE2]' : 'text-[#5A524F]'}`}>
                  <li>How should AI systems adapt when sources disappear?</li>
                  <li>How can benchmarks remain reproducible over time?</li>
                  <li>How can models reason responsibly with missing or outdated knowledge?</li>
                  <li>What technical and societal risks emerge when the web forgets?</li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-4 ${styles.headingOnLight}`}>Topics of Interest</h3>
                <p className={`${styles.bodyMutedOnLight} mb-6`}>Workshop topics include, but are not limited to:</p>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                  <TopicCard
                    theme={theme}
                    title="Data fragility and preservation"
                    items={[
                      'Dataset decay, disappearing web sources, and link rot in public resources',
                      'Data versioning, web archiving, and long-term dataset preservation',
                      'Knowledge provenance tracking (symbolic and neuro-symbolic approaches)',
                    ]}
                  />

                  <TopicCard
                    theme={theme}
                    title="Model robustness under temporal drift"
                    items={[
                      'Temporal drift and concept shift in machine learning models',
                      'Time-aware evaluation methods and protocols for AI reliability',
                      'Reasoning under missing, outdated, or unreliable information',
                      'Robustness in dynamic or decayed information environments',
                    ]}
                  />

                  <TopicCard
                    theme={theme}
                    title="Foundations, logic, and societal impact"
                    items={[
                      'Learning and reasoning under time-sensitive or disappearing data',
                      'Non-monotonic reasoning and belief revision with deleted knowledge',
                      'Societal risks of "ghost knowledge" in law, science, and public policy',
                      'Cross-disciplinary case studies of temporal degradation in real-world applications',
                    ]}
                  />

                  <TopicCard
                    theme={theme}
                    title="LLMs and Dynamic Knowledge"
                    items={[
                      'Knowledge representation, updating, and retrieval in LLMs',
                      'Hallucination and reliability under outdated or unverifiable information',
                      'Temporal fine-tuning, continual learning, and model adaptation',
                      'Catastrophic forgetting and stability-plasticity trade-offs',
                      'Long-term deployment, maintenance, and lifecycle management of LLMs',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cfp" className={`py-16 transition-colors duration-300 ${styles.darkSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-3 text-center ${styles.headingOnDark}`}>Call for Papers</h2>

            <div className="text-center">
              <a
                href="/AIM4DK2026_CFP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-3 py-2 text-xs font-medium rounded-full transition ${styles.pillSecondary}`}
              >
                Download CFP
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
              <div className="rounded-lg shadow-lg p-6 border border-[#D8C7BA] bg-[#F5EFE6] text-[#3A3533]">
                <h3 className="text-xl font-semibold mb-4 text-[#A85C53]">
                  Important Dates{' '}
                  <span className="font-bold">
                    (
                    <a
                      href="https://time.is/Anywhere_on_Earth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#A85C53]"
                    >
                      {' '}
                      Anywhere on Earth, AoE{' '}
                    </a>
                    )
                  </span>
                </h3>
                <ul className="text-[#5A524F] mb-4 list-disc list-inside space-y-2">
                  <li>
                    Submission Deadline: <span className="font-bold">May 8, 2026 (23:59 AoE)</span>
                  </li>
                  <li>
                    Acceptance Notification: <span className="font-bold">June 5, 2026 (23:59 AoE)</span>
                  </li>
                  <li>
                    Early Registration: <span className="font-bold">June 15, 2026 (23:59 AoE)</span>
                  </li>
                  <li>
                    Camera Ready Submission: <span className="font-bold">July 1, 2026 (23:59 AoE)</span>
                  </li>
                  <li>
                    Workshop Date (TBA): <span className="font-bold">August 15-17, 2026</span>
                  </li>
                </ul>
              </div>

              <div className={isDark ? 'text-[#E7DED2]' : 'text-[#5A524F]'}>
                <h3 className={`text-xl font-semibold mb-2 ${styles.headingOnDark}`}>Submission Instructions</h3>

                <div className="flex flex-wrap justify-center gap-4 mb-5">
                  <a
                    href="https://openreview.net/group?id=ijcai.org/IJCAI-ECAI/2026/Workshop/AIM4DK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 ${styles.pillPrimary}`}
                  >
                    Submit a Paper
                  </a>

                  <a
                    href="https://www.ijcai.org/authors_kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 ${styles.pillSecondary}`}
                  >
                    IJCAI 2026 Author Kit
                  </a>
                </div>

                <p className="leading-8">
                  AIM4DK2026 welcomes full papers, short papers, work-in-progress papers, vision and position papers, and
                  extended abstracts of published or accepted work.{' '}
                  <strong>(Including papers accepted at IJCAI-ECAI 2026 or other venues.)</strong>
                </p>

                <ul className="mb-4 list-disc list-inside space-y-2 mt-4">
                  <li>
                    We welcome two submission types: <strong>Long Papers</strong> (up to 7 pages) and{' '}
                    <strong>Short Papers</strong> (2-4 pages).
                  </li>
                  <li>
                    This workshop is <strong>non-archival</strong>. Accepted papers will be made publicly available on
                    OpenReview and hosted on the workshop website.
                  </li>
                  <li>
                    Submissions must be prepared using the standard <strong>IJCAI-ECAI 2026 Author Kit</strong> and submitted
                    as a single PDF file.
                  </li>
                  <li>
                    Reviewing will be <strong>double-blind</strong>, and submissions must be anonymized accordingly.
                  </li>
                </ul>

                <h3 className={`text-xl font-semibold mb-2 ${styles.headingOnDark}`}>Call for PC members</h3>
                <p className="leading-8">
                  We are looking for passionate and responsible PC members to review submissions for the AIM4DK 2026
                  workshop. If you are interested in data versioning, temporal degradation, reliable AI, or related topics,
                  you are very welcome to apply.{` `}
                  <a
                    href="https://shorturl.at/uv4sv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-full transition align-middle ${styles.pillSecondary}`}
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className={`py-16 transition-colors duration-300 ${styles.lightSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center ${styles.headingOnLight}`}>Schedule (TBA)</h2>
          </div>
        </section>

        <section id="speaker" className={`py-16 transition-colors duration-300 ${styles.darkSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center ${styles.headingOnDark}`}>Invited Speakers (TBA)</h2>
          </div>
        </section>

        <section id="organizer" className={`py-16 transition-colors duration-300 ${styles.lightSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center ${styles.headingOnLight}`}>Organizers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
              <OrganizerCard
                theme={theme}
                name="Yutong Zhou"
                role="Leibniz Centre for Agricultural Landscape Research, Germany"
                image="/yutong.png"
                website="https://elizazhou96.github.io/"
                bio="Yutong Zhou is a Postdoc Researcher working on reliable and human-centered AI, with interests in temporal robustness, knowledge modeling, and multimodal intelligence. Her work connects machine learning systems with questions of accessibility, trust, and long-term deployment."
              />

              <OrganizerCard
                theme={theme}
                name="Yukyung Lee"
                role="Boston University, USA"
                image="/yukyung.jpeg"
                website="https://yukyunglee.com/"
                bio="Yukyung Lee is a Postdoctoral Associate at Boston University, working with Prof. Najoung Kim and Prof. Sebastian Schuster. She received her Ph.D. from Korea University, advised by Prof. Pilsung Kang. Her research focuses on LLM evaluation, aiming to discover, define, and measure the capabilities of language models, with a long-term vision of establishing a science of evaluation. She is also interested in LLM agents that autonomously solve complex problems and how to reliably evaluate them. More recently, her work extends to evaluating LLM capabilities in massive streaming data environments, focusing on temporal reasoning and information organization under evolving contexts. She has published in EMNLP, NAACL, NeurIPS, ACL, and top SCI journals."
              />

              <OrganizerCard
                theme={theme}
                name="Humaira Kousar"
                role="KAIST, South Korea"
                image="/humaira.jpg"
                website="https://humaira-kousar.github.io/"
                bio="Humaira Kousar is a Ph.D. Student at KAIST University, advised by Prof. Jaekyun Moon. Her research centers on Active Learning, Distributed Machine Learning (Federated and Split Learning), and Large Language Models (LLMs). Specifically, she focuses on data-centric AI and the personalization of Foundation Models in distributed environments. Her work addresses data fragility and knowledge provenance by developing computation-efficient frameworks for the storage-efficient serving of pruned LLM experts and optimizing data acquisition in high-stakes, resource-constrained environments. She holds a registered patent and has published her research in top-tier venues such as TMLR and NeurIPS, etc. Beyond her research, she serves as a reviewer for top-tier venues like NeurIPS, ICLR, ICML, and AAAI, etc."
              />
            </div>
          </div>
        </section>

        <section id="review" className={`py-16 transition-colors duration-300 ${styles.darkSection}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center ${styles.headingOnDark}`}>Review</h2>
            <h3 className={`text-xl font-semibold mb-4 ${styles.headingOnDark}`}>Program Committee (TBA)</h3>
          </div>
        </section>

        <section id="contact" className={`py-16 transition-colors duration-300 ${styles.lightSection}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center ${styles.headingOnLight}`}>Contact Us</h2>

            <form
              action="https://formspree.io/f/mvzzgbww"
              method="POST"
              className={`w-full shadow-lg rounded-2xl p-6 sm:p-8 space-y-6 border transition-colors duration-300 ${styles.formBg}`}
            >
              <div>
                <label className={`block font-medium mb-2 ${isDark ? 'text-[#F3EAE2]' : 'text-[#4B4441]'}`}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#B06A60] transition-colors duration-300 ${styles.inputBg}`}
                />
              </div>

              <div>
                <label className={`block font-medium mb-2 ${isDark ? 'text-[#F3EAE2]' : 'text-[#4B4441]'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#B06A60] transition-colors duration-300 ${styles.inputBg}`}
                />
              </div>

              <div>
                <label className={`block font-medium mb-2 ${isDark ? 'text-[#F3EAE2]' : 'text-[#4B4441]'}`}>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#B06A60] transition-colors duration-300 ${styles.inputBg}`}
                />
                <p className={`text-right text-sm mt-2 ${isDark ? 'text-[#B9AEA4]' : 'text-[#8A817B]'}`}>
                  Words: {message.length}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`inline-flex items-center px-6 py-3 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition ${styles.pillPrimary}`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className={`py-8 border-t transition-colors duration-300 ${styles.footer}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <p>© 2026 Yutong Zhou. All rights reserved.</p>
              <p className={`mt-1 text-xs ${isDark ? 'text-[#B9AEA4]' : 'text-[#8A817B]'}`}>
                Third-party names, logos, and images remain the property of their respective owners.
              </p>

              <img src="/aim4dk_logo.png" alt="Logo" className="w-auto h-14 animate-pulse center my-1" />
              <p className="mt-2">IJCAI-ECAI 2026 Workshop</p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

function NavItem({
  icon,
  text,
  onClick,
  theme,
  to,
}: {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  theme: Theme;
  to?: string;
}) {
  const className = `flex items-center space-x-1 transition-colors duration-200 ${
    theme === 'dark'
      ? 'text-[#E7DED2] hover:text-[#D2A092]'
      : 'text-[#4B4441] hover:text-[#A85C53]'
  }`;

  // Link
  if (to) {
    return (
      <Link to={to} className={className}>
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  // Button 
  return (
    <button onClick={onClick} className={className}>
      {icon}
      <span>{text}</span>
    </button>
  );
}

function MobileNavItem({
  icon,
  text,
  onClick,
  theme,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  theme: Theme;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors duration-200 ${
        theme === 'dark'
          ? 'text-[#F3EAE2] hover:text-[#F5EFE6] hover:bg-[#413A39]'
          : 'text-[#4B4441] hover:text-[#A85C53] hover:bg-[#EFE4DA]'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function StatItem({
  href,
  value,
  text,
  theme,
}: {
  href: string;
  value: string;
  text: string;
  theme: Theme;
}) {
  return (
    <div className="flex items-start gap-3">
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-1">
        <img
          src="/warning.png"
          alt="ref"
          className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 hover:opacity-100 transition"
        />
      </a>
      <p className={theme === 'dark' ? 'text-[#F3EAE2] leading-7' : 'text-[#4B4441] leading-7'}>
        <span className="font-semibold text-[#A85C53]">{value}</span> {text}
      </p>
    </div>
  );
}

function TopicCard({
  title,
  items,
  theme,
}: {
  title: string;
  items: string[];
  theme: Theme;
}) {
  return (
    <div
      className={`border rounded-2xl p-5 sm:p-6 shadow-sm transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#3A3533] border-[#5A4745]'
          : 'bg-[#F9F4EE] border-[#DDCEC3]'
      }`}
    >
      <h4 className={`font-semibold text-base sm:text-lg mb-3 ${theme === 'dark' ? 'text-[#F5EFE6]' : 'text-[#3A3533]'}`}>
        {title}
      </h4>
      <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-[#E7DED2]' : 'text-[#5A524F]'}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function OrganizerCard({
  name,
  role,
  image,
  website,
  bio,
  theme,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
  theme: Theme;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="max-w-xs w-full h-[360px] mx-auto [perspective:1200px]">
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div
          className={`absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-2xl border shadow-xl flex flex-col transition-colors duration-300 ${
            theme === 'dark'
              ? 'border-[#5A4745] bg-[#3A3533]'
              : 'border-[#D8C7BA] bg-[#F9F4EE]'
          }`}
        >
          <button
            type="button"
            onClick={() => setFlipped(true)}
            className={`absolute top-4 right-4 z-10 inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border transition ${
              theme === 'dark'
                ? 'bg-[#4A4341] text-[#F3EAE2] border-[#6A5653] hover:bg-[#564D4B]'
                : 'bg-[#F3EAE2] text-[#A85C53] border-[#E2CFC2] hover:bg-[#EADFD4]'
            }`}
          >
            ✨ Bio
          </button>

          <div className={`h-[68%] w-full overflow-hidden ${theme === 'dark' ? 'bg-[#4A4341]' : 'bg-[#EFE4DA]'}`}>
            <img src={image} alt={name} className="w-full h-full object-cover object-[center_15%]" />
          </div>

          <div className="flex-1 px-5 py-4 text-center flex flex-col justify-center">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-semibold text-[#A85C53] hover:underline"
            >
              {name}
            </a>

            <p className={`mt-2 text-sm leading-6 ${theme === 'dark' ? 'text-[#E7DED2]' : 'text-[#5A524F]'}`}>
              {role}
            </p>
          </div>
        </div>

        <div
          className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-2xl border px-6 py-6 shadow-xl flex flex-col transition-colors duration-300 ${
            theme === 'dark'
              ? 'border-[#5A4745] bg-[#3A3533]'
              : 'border-[#D8C7BA] bg-[#F9F4EE]'
          }`}
        >
          <div className="flex justify-end mb-3">
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border transition ${
                theme === 'dark'
                  ? 'bg-[#4A4341] text-[#F3EAE2] border-[#6A5653] hover:bg-[#564D4B]'
                  : 'bg-[#F3EAE2] text-[#A85C53] border-[#E2CFC2] hover:bg-[#EADFD4]'
              }`}
            >
              🏠 Back
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            <p className={`text-sm leading-7 text-left whitespace-pre-line ${theme === 'dark' ? 'text-[#F3EAE2]' : 'text-[#4B4441]'}`}>
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
