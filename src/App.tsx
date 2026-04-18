import React, { useState, useEffect } from 'react';
import {
  Home,
  Smile,
  Users,
  Calendar,
  BookOpen,
  MessageCircleHeart,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Presentation,
  Paperclip
} from 'lucide-react';
import { useRef } from "react";
import FluidEffect from './components/FluidEffect';
import RippleEffect from './components/RippleEffect';
import AccessibilityToggle from './components/AccessibilityToggle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <React.Fragment>
      {/* <RippleEffect /> */}

      <div className="min-h-screen bg-gradient-to-b from-[#2B2B2B] via-[#34302F] to-[#2A2625] text-[#F5EFE6]">
        {/* Navigation Bar */}
        <nav className="bg-[#2B2B2B]/90 backdrop-blur-md border-b border-[#8C4F4F]/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center text-[#B86A5D] font-semibold text-xl">
                <img
                  src="/aim4dk_logo.png"
                  alt="Logo"
                  className="h-14 w-auto"
                />
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <NavItem icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
                <NavItem icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
                <NavItem icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                <NavItem icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
                <NavItem icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                <NavItem icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
                <NavItem icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
              </div>

              <div className="flex items-center space-x-4">
                <a href="https://2026.ijcai.org/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img
                    src="/ijcai26_logo.png"
                    className="w-21 h-8 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                    alt="IJCAI 2026 Logo"
                  />
                </a>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block md:hidden p-2 text-[#C98A7A] hover:text-[#F5EFE6] transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-[#F5EFE6] border-t border-[#D9C8BB] shadow-lg">
                <div className="px-4 py-2 space-y-1">
                  <MobileNavItem icon={<Home size={16} />} text="Home" onClick={() => scrollToSection('home')} />
                  <MobileNavItem icon={<Smile size={16} />} text="CFP" onClick={() => scrollToSection('cfp')} />
                  <MobileNavItem icon={<Calendar size={16} />} text="Schedule" onClick={() => scrollToSection('schedule')} />
                  <MobileNavItem icon={<Presentation size={16} />} text="Speakers" onClick={() => scrollToSection('speaker')} />
                  <MobileNavItem icon={<Users size={16} />} text="Organizer" onClick={() => scrollToSection('organizer')} />
                  <MobileNavItem icon={<Paperclip size={16} />} text="Review" onClick={() => scrollToSection('review')} />
                  <MobileNavItem icon={<BookOpen size={16} />} text="Contact" onClick={() => scrollToSection('contact')} />
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-gradient-to-b from-[#2B2B2B] via-[#363231] to-transparent"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#C98A7A] mb-4">
              AI Modeling for Disappearing Knowledge (AIM4DK)
            </h1>

            <p className="text-lg text-[#E7DED2] mb-8">
              Reliable AI in a Challenging World
              <br />
              <strong className="font-bold text-[#F5EFE6]">📅 Full-Day August 15/16/17, 2026 (TBA)</strong> 📍Bremen, Germany
            </p>

            <div className="mt-10 w-full relative overflow-hidden rounded-2xl">
              <div className="w-full h-full md:h-[400px] overflow-hidden">
                <img
                  src="/ijcai_banner.png"
                  alt="AIM4DK banner"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            
              <div className="absolute bottom-3 right-4 text-[11px] text-white/70 bg-black/25 px-2 py-1 rounded">
                Image source:{" "}
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
        
        {/* About Section */}
        <section id="about" className="bg-[#F3EAE2] py-14 sm:py-16 lg:py-20 text-[#3A3533]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#A85C53] text-center mb-10 sm:mb-12">
                About the Workshop
              </h2>
        
              <div className="space-y-6 sm:space-y-8 text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 text-[#5A524F]">
                {/* Warning Stats Card */}
                <div className="bg-[#FCF1EF] border border-[#E4C7C2] rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-[#A85C53] mb-4">
                    Why this matters
                  </h3>
        
                  <div className="space-y-4">
                    {/* item 1 */}
                    <div className="flex items-start gap-3">
                      <a
                        href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-1"
                      >
                        <img
                          src="/warning.png"
                          alt="ref"
                          className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 hover:opacity-100 transition"
                        />
                      </a>
                      <p className="text-[#4B4441] leading-7">
                        <span className="font-semibold text-[#A85C53]">38%</span> of webpages from 2013 are no longer accessible
                      </p>
                    </div>
        
                    {/* item 2 */}
                    <div className="flex items-start gap-3">
                      <a
                        href="https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-1"
                      >
                        <img
                          src="/warning.png"
                          alt="ref"
                          className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 hover:opacity-100 transition"
                        />
                      </a>
                      <p className="text-[#4B4441] leading-7">
                        <span className="font-semibold text-[#A85C53]">54%</span> of Wikipedia pages contain at least one broken reference
                      </p>
                    </div>
        
                    {/* item 3 */}
                    <div className="flex items-start gap-3">
                      <a
                        href="https://www.nature.com/articles/s41598-022-15245-z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-1"
                      >
                        <img
                          src="/warning.png"
                          alt="ref"
                          className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 hover:opacity-100 transition"
                        />
                      </a>
                      <p className="text-[#4B4441] leading-7">
                        <span className="font-semibold text-[#A85C53]">91%</span> of real-world deployed AI models suffer performance degradation over time
                      </p>
                    </div>
                  </div>
                </div>
        
                {/* Intro Text */}
                <p>
                  The web forgets, links disappear, datasets age, and the knowledge that once supported AI systems slowly fades away. At the same time, deployed models continue to drift as the world changes, often relying on assumptions that are no longer valid, verifiable, or reproducible.
                </p>
        
                <p>
                  This shows a growing challenge for reliable AI: systems may generate outdated answers, hallucinate unreliable facts, or produce outputs whose original foundations can no longer be traced. Disappearing knowledge is not just a data problem. It is also a question of trust, evaluation, and scientific accountability.
                </p>
        
                {/* AIM4DK asks */}
                <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-4 sm:p-5 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#A85C53] mb-4">
                    AIM4DK ("Aim" for "DK") asks:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
                    <li>How should AI systems adapt when sources disappear?</li>
                    <li>How can benchmarks remain reproducible over time?</li>
                    <li>How can models reason responsibly with missing or outdated knowledge?</li>
                    <li>What technical and societal risks emerge when the web forgets?</li>
                  </ul>
                </div>
        
                {/* <p>
                  As an <strong className="text-[#3A3533] font-semibold">IJCAI-ECAI</strong> cross-disciplinary workshop,
                  AIM4DK creates a space for researchers from normally separate communities to meet around a shared systems-level challenge.
                  As a fully in-person workshop in Bremen, it is designed to foster deep discussion, new collaborations, and practical progress
                  on temporally robust AI.
                </p> */}
        
                {/* Topics */}
                <div className="pt-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#A85C53] mb-4">
                    Topics of Interest
                  </h3>
                  <p className="text-[#5A524F] mb-6">
                    Workshop topics include, but are not limited to:
                  </p>
        
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    {/* Topic Group 1 */}
                    <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-5 sm:p-6 shadow-sm">
                      <h4 className="font-semibold text-[#3A3533] text-base sm:text-lg mb-3">
                        Data fragility and preservation
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
                        <li>Dataset decay, disappearing web sources, and link rot in public resources</li>
                        <li>Data versioning, web archiving, and long-term dataset preservation</li>
                        <li>Symbolic and neuro-symbolic approaches to tracking knowledge provenance</li>
                      </ul>
                    </div>
        
                    {/* Topic Group 2 */}
                    <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-5 sm:p-6 shadow-sm">
                      <h4 className="font-semibold text-[#3A3533] text-base sm:text-lg mb-3">
                        Model robustness under temporal drift
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
                        <li>Temporal drift and concept shift in machine learning models</li>
                        <li>Time-aware evaluation methods and protocols for AI reliability</li>
                        <li>Reasoning under uncertainty caused by missing or outdated context</li>
                        <li>Robustness in dynamic or decayed information environments</li>
                      </ul>
                    </div>
        
                    {/* Topic Group 3 */}
                    <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-5 sm:p-6 shadow-sm">
                      <h4 className="font-semibold text-[#3A3533] text-base sm:text-lg mb-3">
                        Foundations, logic, and societal impact
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
                        <li>Theoretical frameworks for learning under time-sensitive or disappearing data</li>
                        <li>Non-monotonic reasoning and belief revision in the presence of deleted sources</li>
                        <li>Societal risks of &quot;ghost knowledge&quot; in law, science, and public policy</li>
                        <li>Cross-disciplinary case studies of temporal degradation in real-world applications</li>
                      </ul>
                    </div>

                   {/* Topic Group 4 */}
                    <div className="bg-[#F9F4EE] border border-[#DDCEC3] rounded-2xl p-5 sm:p-6 shadow-sm">
                      <h4 className="font-semibold text-[#3A3533] text-base sm:text-lg mb-3">
                        LLMs and Knowledge Dynamics
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-[#5A524F]">
                        <li>Knowledge representation and updating in large language models</li>
                        <li>Hallucination and reliability under outdated or unverifiable information</li>
                        <li>Evaluation of LLMs under temporal drift and knowledge decay</li>
                        <li>Retrieval-augmented generation with missing, changing, or conflicting sources</li>
                        <li>Long-term adaptation and maintenance of deployed language models</li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>
        </section>


        {/* CFP Section */}
        <section id="cfp" className="py-16 bg-[#332F2E] text-[#F5EFE6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#D2A092] mb-3 text-center">Call for Papers</h2>

            <div className="text-center">
              <a
                href="/IJCAI CFP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-xs font-medium rounded-full bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE] transition"
              >
                Download CFP (TBA)
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
              <div className="bg-[#F5EFE6] text-[#3A3533] rounded-lg shadow-lg p-6 border border-[#D8C7BA]">
                <h3 className="text-xl font-semibold text-[#A85C53] mb-4">Important Dates</h3>
                <ul className="text-[#5A524F] mb-4 list-disc list-inside space-y-2">
                  <li>Call for Papers released: <span className="font-bold">April 11, 2026</span></li>
                  <li>
                    Submission Deadline:{" "}
                    <span className="font-bold">
                      May 8, 2026
                      (
                      <a
                        href="https://time.is/Anywhere_on_Earth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#A85C53]"
                      >
                        {" "}Anywhere on Earth, AoE{" "}
                      </a>
                      )
                    </span>
                  </li>
                  <li>
                    Acceptance Notification:{" "}
                    <span className="font-bold">
                      June 5, 2026
                      (
                      <a
                        href="https://time.is/Anywhere_on_Earth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#A85C53]"
                      >
                        {" "}Anywhere on Earth, AoE{" "}
                      </a>
                      )
                    </span>
                  </li>
                  <li>
                    Early Registration:{" "}
                    <span className="font-bold">
                      June 15, 2026
                      (
                      <a
                        href="https://time.is/Anywhere_on_Earth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#A85C53]"
                      >
                        {" "}Anywhere on Earth, AoE{" "}
                      </a>
                      )
                    </span>
                  </li>
                  <li>
                    Camera Ready Submission:{" "}
                    <span className="font-bold">
                      July 1, 2026
                      (
                      <a
                        href="https://time.is/Anywhere_on_Earth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#A85C53]"
                      >
                        {" "}Anywhere on Earth, AoE{" "}
                      </a>
                      )
                    </span>
                  </li>
                  <li>Workshop Date (TBA): <span className="font-bold">August 15-17, 2026</span></li>
                </ul>
              </div>

              <div className="text-[#E7DED2]">
                {/* <h3 className="text-xl font-semibold text-[#D2A092] mb-2">Paper Format</h3>
                <p className="text-[#E7DED2] leading-8">
                  We welcome two submission types: <strong>Long Papers</strong> (up to 7 pages) and <strong>Short Papers</strong> (2-4 pages).
                </p>

                <div className="flex flex-wrap gap-3 mt-4 mb-4">
                  <a
                    href="https://www.ijcai.org/authors_kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE] transition"
                  >
                    IJCAI Author Kit
                  </a>
                </div> */}

                {/* <ul className="text-[#E7DED2] mb-4 list-disc list-inside space-y-2">
                  <li><strong>Long Paper Track</strong> welcomes novel contributions. Accepted papers will be presented as main talks or posters.</li>
                  <li><strong>Short Paper Track</strong> encourages ongoing, early-stage research or perspective views. Accepted short papers will be presented as posters.</li>
                </ul>  */}

                <h3 className="text-xl font-semibold text-[#D2A092] mb-2">Submission Instructions</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-5">
                  <a
                    href="https://openreview.net/group?id=ijcai.org/IJCAI-ECAI/2026/Workshop/AIM4DK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-[#A85C53] text-[#FDF9F4] shadow-md hover:bg-[#935047] hover:shadow-lg transition-all duration-200"
                  >
                    Submit a Paper
                  </a>
                
                  <a
                    href="https://www.ijcai.org/authors_kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-[#EADFD4] text-[#8A4E46] shadow-sm hover:bg-[#DDCDBE] hover:shadow-md transition-all duration-200"
                  >
                    IJCAI 2026 Author Kit
                  </a>
                </div>
                
              <p className="text-[#E7DED2] leading-8">
                AIM4DK2026 welcomes Full papers, short papers, work-in-progress papers, vision and position papers, and extended abstracts of published or accepted work. <strong>(Including papers accepted at IJCAI-ECAI 2026 or other venues.)</strong>
              </p>
              
                <ul className="text-[#E7DED2] mb-4 list-disc list-inside space-y-2">
                  <li>We welcome two submission types: <strong>Long Papers</strong> (up to 7 pages) and <strong>Short Papers</strong> (2-4 pages). </li>
                  <li>This workshop is <strong>non-archival</strong>. Accepted papers will be made publicly available on OpenReview and hosted on the workshop website. </li>
                  <li>Submissions must be prepared using the standard <strong>IJCAI-ECAI 2026 Author Kit</strong> and submitted as a single PDF file. </li>
                  <li>Reviewing will be <strong>double-blind</strong>, and submissions must be anonymized accordingly. </li>
                </ul> 

                {/* <h3 className="text-xl font-semibold text-[#D2A092] mb-2">EmpAI 2026 Large Language Models (LLMs) Usage Policy</h3>
                <ul className="text-[#E7DED2] mb-4 list-disc list-inside space-y-2">
                  <li>EmpAI 2026 is a fully human-authored, human-reviewed workshop that does <strong>NOT allow any AI systems to serve as primary authors or reviewers</strong> of any submission. AI-generated papers will NOT be permitted in the long and short paper tracks.</li>
                  <li>LLM-assisted writing is allowed for grammar and style refinement only. All conceptual and experimental contributions must come from human authors.</li>
                  <li>Workshop organizers and reviewers will not use LLMs for reviewing, decision-making, or content generation related to submissions.</li>
                </ul> */}

                <h3 className="text-xl font-semibold text-[#D2A092] mb-2">Call for PC members</h3>
                <p className="text-[#E7DED2] leading-8">
                  We are looking for passionate and responsible PC members to review submissions for the AIM4DK 2026 workshop. If you are interested in data versioning, temporal degradation, reliable AI, or related topics, you are very welcome to apply.{" "}
                  <a
                    href="https://shorturl.at/uv4sv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full bg-[#EADFD4] text-[#8A4E46] hover:bg-[#DDCDBE] transition align-middle"
                  >
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="bg-[#F3EAE2] py-16 text-[#3A3533]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#A85C53] mb-8 text-center">Schedule (TBA)</h2>
          </div>
        </section>

        {/* Speaker Section */}
        <section id="speaker" className="py-16 bg-[#332F2E] text-[#F5EFE6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#D2A092] mb-8 text-center">Invited Speakers (TBA)</h2>
          </div>
        </section>

        {/* Organizer Section */}
        <section id="organizer" className="bg-[#F3EAE2] py-16 text-[#3A3533]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#A85C53] mb-8 text-center">Organizers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
              <OrganizerCard
                name="Yutong Zhou"
                role="Leibniz Centre for Agricultural Landscape Research, Germany"
                image="/yutong.png"
                website="https://elizazhou96.github.io/"
                bio="Yutong Zhou is a Postdoc Researcher working on reliable and human-centered AI, with interests in temporal robustness, knowledge modeling, and multimodal intelligence. Her work connects machine learning systems with questions of accessibility, trust, and long-term deployment."
              />
              
              <OrganizerCard
                name="Yukyung Lee"
                role="Boston University, USA"
                image="/yukyung.jpeg"
                website="https://yukyunglee.com/"
                bio="Yukyung Lee is a Postdoctoral Associate at Boston University, working with Prof. Najoung Kim and Prof. Sebastian Schuster. She received her Ph.D. from Korea University, advised by Prof. Pilsung Kang. Her research focuses on LLM evaluation, aiming to discover, define, and measure the capabilities of language models, with a long-term vision of establishing a science of evaluation. She is also interested in LLM agents that autonomously solve complex problems and how to reliably evaluate them. More recently, her work extends to evaluating LLM capabilities in massive streaming data environments, focusing on temporal reasoning and information organization under evolving contexts. She has published in EMNLP, NAACL, NeurIPS, ACL, and top SCI journals."
              />
              <OrganizerCard
                name="Humaira Kousar"
                role="KAIST, South Korea"
                image="/humaira.jpg"
                website="https://humaira-kousar.github.io/"
                bio="Humaira Kousar is a Ph.D. Student at KAIST University, advised by Prof. Jaekyun Moon. Her research centers on Active Learning, Distributed Machine Learning (Federated and Split Learning), and Large Language Models (LLMs). Specifically, she focuses on data-centric AI and the personalization of Foundation Models in distributed environments. Her work addresses data fragility and knowledge provenance by developing computation-efficient frameworks for the storage-efficient serving of pruned LLM experts and optimizing data acquisition in high-stakes, resource-constrained environments. She holds a registered patent and has published her research in top-tier venues such as TMLR and NeurIPS, etc.  Beyond her research, she serves as a reviewer for top-tier venues like NeurIPS, ICLR, ICML, and AAAI, etc."
              />
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section id="review" className="py-16 bg-[#332F2E] text-[#F5EFE6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#D2A092] mb-8 text-center">Review</h2>
            <h3 className="text-xl font-semibold text-[#D2A092] mb-4">Program Committee (TBA)</h3>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#F3EAE2] py-16 text-[#3A3533]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#A85C53] mb-8 text-center">Contact Us</h2>

            <form
              action="https://formspree.io/f/mvzzgbww"
              method="POST"
              className="bg-[#F9F4EE] w-full shadow-lg rounded-2xl p-6 sm:p-8 space-y-6 border border-[#DDCEC3]"
            >
              <div>
                <label className="block text-[#4B4441] font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#D7C7BB] bg-white p-3 text-[#3A3533] focus:outline-none focus:ring-2 focus:ring-[#B06A60]"
                />
              </div>

              <div>
                <label className="block text-[#4B4441] font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[#D7C7BB] bg-white p-3 text-[#3A3533] focus:outline-none focus:ring-2 focus:ring-[#B06A60]"
                />
              </div>

              <div>
                <label className="block text-[#4B4441] font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-[#D7C7BB] bg-white p-3 text-[#3A3533] focus:outline-none focus:ring-2 focus:ring-[#B06A60]"
                ></textarea>
                <p className="text-right text-sm text-[#8A817B]">Words: {message.length}</p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full bg-[#A85C53] text-[#FDF9F4] shadow-md hover:bg-[#935047] hover:shadow-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-[#2B2B2B] border-t border-[#8C4F4F]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-[#D7CEC5]">
              <p>© 2026 Yutong Zhou. All rights reserved.</p>
              <p className="mt-1 text-xs text-[#B9AEA4]"> Third-party names, logos, and images remain the property of their respective owners. </p>

              {/* <div className="flex gap-5 mt-4 mb-3">
                <a
                  href="https://x.com/EmpAI342560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B9AEA4] hover:text-[#D2A092] transition"
                  aria-label="X (formerly Twitter)"
                >
                  <svg
                    role="img"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                  </svg>
                </a>
              </div> */}

              <img
                src="/aim4dk_logo.png"
                alt="Logo"
                className="w-auto h-14 animate-pulse center my-1"
              />
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
  onClick
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 text-[#E7DED2] hover:text-[#D2A092] transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function MobileNavItem({
  icon,
  text,
  onClick
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 w-full px-3 py-2 text-[#4B4441] hover:text-[#A85C53] hover:bg-[#EFE4DA] rounded-md transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-[#F9F4EE] rounded-lg shadow-lg overflow-hidden border border-[#DDCEC3]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#A85C53] mb-2">{title}</h3>
        <p className="text-[#5A524F]">{description}</p>
      </div>
    </div>
  );
}

function OrganizerCard({
  name,
  role,
  image,
  website,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="max-w-xs w-full h-[360px] mx-auto [perspective:1200px]">
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-2xl border border-[#D8C7BA] bg-[#F9F4EE] shadow-xl flex flex-col">
          <button
            type="button"
            onClick={() => setFlipped(true)}
            className="absolute top-4 right-4 z-10 inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-[#F3EAE2] text-[#A85C53] border border-[#E2CFC2] hover:bg-[#EADFD4] transition"
          >
            ✨ Bio
          </button>
        
          <div className="h-[68%] w-full overflow-hidden bg-[#EFE4DA]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-[center_15%]"
            />
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
        
            <p className="mt-2 text-sm text-[#5A524F] leading-6">
              {role}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-2xl border border-[#D8C7BA] bg-[#F9F4EE] px-6 py-6 shadow-xl flex flex-col">
          <div className="flex justify-end mb-3">
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#F3EAE2] text-[#A85C53] border border-[#E2CFC2] hover:bg-[#EADFD4] transition"
            >
              🏠 Back
            </button>
          </div>
        
          <div className="flex-1 overflow-y-auto pr-2">
            <p className="text-sm text-[#4B4441] leading-7 text-left whitespace-pre-line">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganizerCardOld({
  name,
  role,
  image,
  website,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#D8C7BA] bg-[#F9F4EE] px-6 py-7 text-center shadow-xl max-w-xs w-full h-full mx-auto">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-[#D9C8BB] shadow-md"
      />
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xl font-semibold text-[#A85C53] mb-4 hover:underline"
      >
        {name}
      </a>
      <p className="text-[#5A524F]">{role}</p>
    </div>
  );
}

function SpeakerCard({
  name,
  role,
  image,
  website,
  bio,
  title,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = bio ? bio.split("\n") : [];
  const firstParagraph = paragraphs[0] || "";
  const restParagraphs = paragraphs.slice(1);

  const wordCount = bio ? bio.split(/\s+/).length : 0;
  const shouldCollapse = wordCount > 200;

  return (
    <div className="hidden md:block relative overflow-hidden rounded-2xl border border-[#8C4F4F]/20 bg-[#F9F4EE] px-6 py-7 shadow-xl w-full h-full mx-auto">
      <div className="flex flex-row items-start gap-6">
        <div className="flex-shrink-0 w-48 text-center">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-lg object-cover border border-[#D9C8BB] shadow-md mb-4 mx-auto animate-fadeIn"
          />

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-[#A85C53] mb-2 hover:underline animate-fadeIn"
          >
            {name}
          </a>

          <p className="text-[#6A625D] text-sm animate-fadeIn">{role}</p>
        </div>

        <div className="flex-1 text-left text-[#4B4441] text-sm">
          <p className="text-lg font-semibold text-[#A85C53] mb-3 animate-fadeIn">
            {title}
          </p>

          {!shouldCollapse && (
            paragraphs.map((p, i) => (
              <p key={i} className="mb-3">{p}</p>
            ))
          )}

          {shouldCollapse && (
            <>
              <p className="mb-3 animate-fadeIn">{firstParagraph}</p>

              <div
                className="transition-all duration-500 overflow-hidden"
                style={{ maxHeight: expanded ? "2000px" : "0px" }}
              >
                {restParagraphs.map((p, i) => (
                  <p key={i} className="mb-3 animate-fadeIn">{p}</p>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 block text-[#A85C53] font-semibold inline-flex items-center gap-1 hover:opacity-80 transition"
              >
                {expanded ? "Show Less" : "Read More"}
                <span
                  className={`transform transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SpeakerCardMobile({
  name,
  role,
  image,
  website,
  bio,
  title,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = bio ? bio.split("\n") : [];
  const wordCount = bio ? bio.split(/\s+/).length : 0;
  const shouldCollapse = wordCount > 200;

  return (
    <div className="block md:hidden relative overflow-hidden rounded-2xl border border-[#D8C7BA] bg-[#F9F4EE] px-6 py-7 shadow-xl w-full mx-auto">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>

      <div className="text-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-lg object-cover border border-[#D9C8BB] shadow-md mb-4 mx-auto animate-fadeIn"
        />

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xl font-semibold text-[#A85C53] mb-2 hover:underline animate-fadeIn"
        >
          {name}
        </a>

        <p className="text-[#6A625D] text-sm mb-4 animate-fadeIn">{role}</p>

        <p className="text-base font-semibold text-[#A85C53] mb-3 text-left animate-fadeIn">
          {title}
        </p>

        <div className="text-[#4B4441] text-sm text-left">
          {!shouldCollapse && (
            paragraphs.map((p, i) => (
              <p key={i} className="mb-3 animate-fadeIn">{p}</p>
            ))
          )}

          {shouldCollapse && (
            <>
              <div
                className="transition-all duration-500 overflow-hidden"
                style={{ maxHeight: expanded ? "2000px" : "0px" }}
              >
                {paragraphs.map((p, i) => (
                  <p key={i} className="mb-3 animate-fadeIn">{p}</p>
                ))}
              </div>

              {!expanded && (
                <div className="pointer-events-none absolute bottom-16 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F9F4EE]/90"></div>
              )}

              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-[#A85C53] font-semibold inline-flex items-center gap-1 hover:opacity-80 transition"
              >
                {expanded ? "Show Less" : "Read More"}
                <span
                  className={`transform transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SpeakerCardv1({
  name,
  role,
  image,
  website,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  website: string;
  bio: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = bio.split("\n");
  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1).join("\n");

  return (
    <div className="hidden md:block relative overflow-hidden rounded-2xl border border-[#D8C7BA] bg-[#F9F4EE] px-6 py-7 shadow-xl w-full h-full mx-auto">
      <div className="flex flex-row items-start gap-6">
        <div className="flex-shrink-0 w-48 text-center">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-lg object-cover border border-[#D9C8BB] shadow-md mb-4 mx-auto"
          />

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-[#A85C53] mb-2 hover:underline"
          >
            {name}
          </a>

          <p className="text-[#6A625D] text-sm">{role}</p>
        </div>

        <div className="hidden md:block text-[#4B4441] text-sm whitespace-pre-line">
          {expanded ? bio : firstParagraph}

          {restParagraphs.trim() !== "" && (
            <button
              type="button"
              className="mt-2 text-[#A85C53] font-semibold underline block"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ScheduleItem({
  time,
  title,
  speaker,
  description,
}: {
  time: string;
  title: React.ReactNode;
  speaker: string;
  description: React.ReactNode;
}) {
  return (
    <div className="bg-[#F9F4EE] rounded-xl p-6 transition transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-[#F2E7DD] hover:border-[#A85C53] border border-[#DDCEC3]">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold text-[#A85C53]">{time}</div>
        <div>
          <h3 className="text-lg font-semibold text-[#3A3533]">{title}</h3>
          <p className="text-[#6A625D]">{speaker}</p>
          <div className="mt-2 text-[#4B4441]">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ReadingListSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const cardWidth = scrollRef.current?.firstElementChild?.clientWidth || 300;
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#F9F4EE] rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronLeft className="w-5 h-5 text-[#A85C53]" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#F9F4EE] rounded-full shadow-md hover:scale-110 transition"
      >
        <ChevronRight className="w-5 h-5 text-[#A85C53]" />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar flex gap-6"
      >
        {papers.map((paper) => (
          <div
            key={paper.link}
            className="min-w-[600px] max-w-[600px] flex-shrink-0"
          >
            <ReadingCard {...paper} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReadingCard({
  title,
  authors,
  year,
  link,
}: {
  title: string;
  authors: string;
  year: string;
  link: string;
}) {
  return (
    <div className="bg-[#F9F4EE] rounded-lg shadow-lg p-6 border border-[#DDCEC3]">
      <h3 className="text-lg font-semibold text-[#A85C53] mb-2">{title}</h3>
      <p className="text-[#5A524F] mb-2">{authors}</p>
      <p className="text-[#8A817B] text-sm mb-4">{year}</p>
      <a
        href={link}
        className="text-[#A85C53] hover:text-[#C98A7A] transition-colors duration-200"
      >
        Read Paper →
      </a>
    </div>
  );
}

export default App;
