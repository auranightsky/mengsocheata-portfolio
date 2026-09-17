import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Orbit,
  Sparkles,
  Target,
} from "lucide-react";
import neuralStudy from "@/assets/neural-study.jpg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { portfolioData, type IconName } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const navItems = [
  { label: "Currently", href: "#currently" },
  { label: "Research", href: "#research" },
  ...(portfolioData.projects.length ? [{ label: "Projects", href: "#projects" }] : []),
  ...(portfolioData.experience.length ? [{ label: "Experience", href: "#experience" }] : []),
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const currentIcons = {
  graduation: GraduationCap,
  flask: FlaskConical,
  brain: BrainCircuit,
  target: Target,
} satisfies Record<IconName, typeof GraduationCap>;

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="page-shell flex h-18 items-center justify-between" aria-label="Main navigation">
          <a className="group flex items-center gap-3" href="#top" aria-label="Meng Socheata, home">
            <span className="logo-mark">MS</span>
            <span className="hidden text-sm font-semibold text-foreground sm:block">Meng Socheata</span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[86vw] border-border bg-background sm:max-w-sm">
                <SheetHeader className="border-b border-border pb-5 text-left">
                  <SheetTitle className="font-display">Meng Socheata</SheetTitle>
                  <SheetDescription>Deep Learning Researcher</SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a className="mobile-nav-link" href={item.href}>
                        {item.label}
                        <ArrowDownRight className="size-4" />
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="page-shell relative grid min-h-[min(820px,92vh)] items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:pb-24 lg:pt-28">
      <div className="relative z-10 max-w-3xl">
        <div className="hero-enter hero-delay-1 flex items-center gap-3 text-sm font-semibold text-muted-foreground">
          <span className="status-dot" aria-hidden="true" />
          <span>Student · Pusan National University</span>
        </div>
        <h1 className="hero-enter hero-delay-2 mt-7 font-display text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
          Meng Socheata
          <span className="mt-2 block gradient-text">Deep Learning Researcher</span>
        </h1>
        <p className="hero-enter hero-delay-3 mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {portfolioData.personal.intro}
        </p>
        <div className="hero-enter hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="gradient" size="xl" asChild>
            <a href="#research">
              View My Research <ArrowDownRight />
            </a>
          </Button>
          <Button variant="soft" size="xl" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
      <div className="hero-enter hero-delay-5 relative mx-auto w-full max-w-lg lg:justify-self-end" aria-hidden="true">
        <div className="hero-visual-frame">
          <img
            src={neuralStudy}
            alt=""
            className="aspect-[6/5] w-full object-cover"
            width="1200"
            height="1008"
            fetchPriority="high"
          />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-lg border border-border/70 bg-surface-frosted px-4 py-3 backdrop-blur-md">
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground">Current focus</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Learning how systems learn</p>
            </div>
            <Orbit className="size-5 text-primary" />
          </div>
        </div>
        <span className="ambient-ring" />
      </div>
      <a href="#currently" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase text-muted-foreground md:flex">
        Scroll to explore <ArrowDownRight className="size-4" />
      </a>
    </section>
  );
}

function Currently() {
  return (
    <section id="currently" className="section-space border-y border-border bg-surface-subtle">
      <div className="page-shell">
        <SectionHeading eyebrow="Now" title="What I'm doing currently" description="A concise snapshot of what I am studying, researching, and working toward." />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {portfolioData.current.items.map((item, index) => {
            const Icon = currentIcons[item.icon];
            return (
              <Reveal key={item.label} delay={index * 70} className="currently-item">
                <div className="icon-shell"><Icon /></div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-foreground">{item.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="status-dot status-dot-small" aria-hidden="true" /> Last updated {portfolioData.current.lastUpdated}
        </Reveal>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section-space page-shell">
      <SectionHeading eyebrow="Research interests" title="Questions I want to understand deeply" description="Three connected areas currently shaping how I learn about modern artificial intelligence." />
      <div className="grid gap-5 lg:grid-cols-3">
        {portfolioData.researchInterests.map((interest, index) => (
          <Reveal key={interest.area} delay={index * 80} className="research-card group">
            <div className="flex items-start justify-between">
              <span className="research-index">{interest.index}</span>
              <ArrowDownRight className="size-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </div>
            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">{interest.area}</h3>
            <p className="mt-4 min-h-24 text-sm leading-7 text-muted-foreground">{interest.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {interest.topics.map((topic) => <span className="topic-chip" key={topic}>{topic}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-16 grid items-start gap-8 border-l-2 border-primary/40 pl-6 md:grid-cols-[.45fr_1fr] md:pl-10">
        <div>
          <p className="section-eyebrow">Research direction</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">What I'm Exploring</h3>
        </div>
        <p className="text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">{portfolioData.researchDirection}</p>
      </Reveal>
    </section>
  );
}

function AcademicProfile() {
  return (
    <section id="about" className="section-space bg-ink text-ink-foreground">
      <div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <Reveal>
          <p className="section-eyebrow section-eyebrow-dark">Academic profile</p>
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">Learning at the intersection of theory and application.</h2>
        </Reveal>
        <Reveal delay={100} className="border-t border-ink-border pt-7 lg:mt-2">
          <div className="flex items-start gap-5">
            <div className="icon-shell icon-shell-dark"><GraduationCap /></div>
            <div>
              <h3 className="font-display text-2xl font-semibold">{portfolioData.academicProfile.institution}</h3>
              <p className="mt-3 max-w-xl leading-7 text-ink-muted">{portfolioData.academicProfile.description}</p>
            </div>
          </div>
          <p className="mt-10 border-t border-ink-border pt-5 text-sm text-ink-muted">Additional degree, major, coursework, and graduation details can be added when available.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-space page-shell">
      <SectionHeading eyebrow="Technical profile" title="Skills, ready to grow" description="This structure is ready for verified skills as they are added—without proficiency scores or inflated claims." />
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {portfolioData.skills.map((group, index) => (
          <Reveal className="skill-group" delay={index * 70} key={group.category}>
            <p className="text-sm font-semibold text-foreground">{group.category}</p>
            {group.items.length ? (
              <div className="mt-5 flex flex-wrap gap-2">{group.items.map((skill) => <span className="topic-chip" key={skill}>{skill}</span>)}</div>
            ) : (
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><span className="size-1.5 rounded-full bg-primary/50" /> Add skills later</p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section className="page-shell pb-24 md:pb-32">
      <Reveal className="opportunity-band">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Open to learning</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">What I'm looking for</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{portfolioData.opportunities}</p>
        </div>
        <Sparkles className="hidden size-10 shrink-0 text-primary md:block" aria-hidden="true" />
      </Reveal>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email", icon: Mail, value: portfolioData.socialLinks.email },
    { label: "GitHub", icon: Github, value: portfolioData.socialLinks.github },
    { label: "LinkedIn", icon: Linkedin, value: portfolioData.socialLinks.linkedin },
    { label: "CV", icon: Download, value: portfolioData.socialLinks.cv },
  ];
  return (
    <section id="contact" className="contact-section section-space">
      <div className="page-shell">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">Let's connect.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Interested in exchanging ideas about deep learning, academic research, or future opportunities?</p>
        </Reveal>
        <Reveal delay={100} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, icon: Icon, value }) => value ? (
            <a className="contact-link" href={value} key={label} target="_blank" rel="noreferrer">
              <span className="flex items-center gap-3"><Icon className="size-4" />{label}</span><ExternalLink className="size-4" />
            </a>
          ) : (
            <div className="contact-link contact-link-disabled" key={label} aria-label={`${label} details not added yet`}>
              <span className="flex items-center gap-3"><Icon className="size-4" />{label}</span><span className="text-xs">Not added yet</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="page-shell flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p><span className="font-semibold text-foreground">Meng Socheata</span> · Deep Learning Researcher</p>
        <p>© 2026 Meng Socheata</p>
      </div>
    </footer>
  );
}

export function PortfolioPage() {
  return (
    <div className="overflow-x-clip bg-background">
      <Navbar />
      <main>
        <Hero />
        <Currently />
        <Research />
        <AcademicProfile />
        {portfolioData.projects.length > 0 ? <section id="projects" /> : null}
        {portfolioData.experience.length > 0 ? <section id="experience" /> : null}
        {portfolioData.publications.length > 0 ? <section id="publications" /> : null}
        {portfolioData.achievements.length > 0 ? <section id="achievements" /> : null}
        <Skills />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
