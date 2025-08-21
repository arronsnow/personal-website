// src/App.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  MonitorSmartphone,
  Server,
  Boxes,
  Sparkles,
} from "lucide-react";
import "./index.css"; // must contain only the three Tailwind directives
import arron from "./assets/arron.jpg";


// Animation helper
const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Layout section
function Section({
  id,
  className = "",
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

// Header / Nav
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0f14]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/10">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>ArronSnow.com</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0f14] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-center text-sm text-white hover:bg-white/20"
            >
              <Mail className="mr-2 inline h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// Hero
function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0b0f14] via-[#0b0f14] to-[#0f1720]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,93,68,0.35),rgba(255,93,68,0)_60%)]" />
      </div>

      <Section id="home" className="py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-white/70">Hello, I’m</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Arron Snow
              <span className="block text-white/60">Software Engineering</span>
            </h1>
            <p className="max-w-xl text-white/60">
              I'm a Software Engineer with a passion for learning, building, and
              creating impactful solutions. I specialize in crafting accessible,
              performant web and mobile applications using modern technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b0f14] hover:bg-white/90"
              >
                See Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/ArronSnow-resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                My Resume
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2 text-white/60">
              <a
                href="https://github.com/arronsnow"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arron-snow-a21987168/"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-72 md:w-[22rem]"
          >
          {/* warm glow behind the circle */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,93,68,0.25),transparent_70%)] blur-2xl" />

          {/* soft outer border ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-white/10" />
          
            {/* photo */}
            <picture className="relative z-10 block h-full w-full overflow-hidden rounded-full">
              <source srcSet={new URL("./assets/arron.webp", import.meta.url).href} type="image/webp" />
              <img
                src={arron}
                alt="Arron Snow"
                className="h-full w-full object-cover"
                sizes="(min-width: 768px) 22rem, 18rem"
                loading="eager"
                decoding="async"
              />
            </picture>

            {/* soft shadow under the circle */}
            <div className="pointer-events-none absolute inset-0 -z-10 translate-y-4 blur-2xl opacity-40 rounded-full bg-black" />
          </motion.div>
        </div>

        {/* Tech strip */}
        <div className="mt-14 grid grid-cols-2 gap-3 text-sm text-white/50 sm:grid-cols-3 md:grid-cols-6">
          {["C#", "Python", "Unity", "React", "TypeScript", "Git"].map((t) => (
            <div
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Feature card
type FeatureProps = { icon: React.ReactNode; title: string; desc: string };
function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
    </div>
  );
}

// About
function About() {
  const stats = [
    { label: "Completed Projects", value: "120+" },
    { label: "Client satisfaction", value: "95%" },
    { label: "Years of experience", value: "10+" },
  ];
  return (
    <Section id="about" className="py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            About me
          </h2>
          <p className="text-white/70">
            Well met! My journey as a started professionally as a software engineer began over a decade ago, and I’ve had the privilege of working with a diverse range of technologies and clients.
            However, my passion for coding started much earlier, when I was just a kid tinkering with HTML and CSS on my family’s old computer. I currently have a Bachelor's in Software Engineering
            and will have my Master's in Software Engineering and AI Engineering by November 2025!
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80"
              >
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Feature
            icon={<Code2 className="h-5 w-5" />}
            title="Website Development"
            desc="Responsive, accessible frontends with modern stacks."
          />
          <Feature
            icon={<MonitorSmartphone className="h-5 w-5" />}
            title="App Development"
            desc="Cross‑platform React Native and PWA experiences."
          />
          <Feature
            icon={<Server className="h-5 w-5" />}
            title="API & Cloud"
            desc="Type‑safe backends, serverless, CI/CD that don’t break."
          />
          <Feature
            icon={<Boxes className="h-5 w-5" />}
            title="Automation"
            desc="From build pipelines to data jobs, I ship reliable tooling."
          />
        </motion.div>
      </div>
    </Section>
  );
}

// Projects
// Projects (hover-expand strip)
function Projects() {
  type Project = { title: string; desc: string; image: string; href: string };
  const projects: Project[] = [
    { title: "Project 1", desc: "Design system & UI kit.", image: new URL("./assets/p1.jpg", import.meta.url).href, href: "#" },
    { title: "Project 2", desc: "Telemetry pipeline with autoscaling.", image: new URL("./assets/p2.jpg", import.meta.url).href, href: "#" },
    { title: "Project 3", desc: "City transit mobile app.", image: new URL("./assets/p3.jpg", import.meta.url).href, href: "#" },
    { title: "Project 4", desc: "Realtime dashboard & alerts.", image: new URL("./assets/p4.jpg", import.meta.url).href, href: "#" },
  ];

  const [active, setActive] = React.useState<number | null>(0); // default first item active

  return (
    <Section id="projects" className="pt-0 pb-0">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-white md:text-3xl">Projects</h2>

      {/* Desktop / Tablet: expanding strip */}
      <div
        className="hidden h-[440px] gap-4 md:flex"
        onMouseLeave={() => setActive(0)}
      >
        {projects.map((p, i) => {
          // Flex growth: hovered = big, others = small
          const grow = active === null ? 1 : active === i ? 3 : 0.8;
          const isActive = active === i;

          return (
            <motion.article
              key={p.title}
              onMouseEnter={() => setActive(i)}
              className="basis-0 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              style={{ flexGrow: grow, transition: "flex-grow 400ms ease" }}
              initial={false}
              animate={{ scale: isActive ? 1 : 0.98 }}
              whileHover={{ scale: 1 }}
            >
              {/* image */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* darken + subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* collapsed label (vertical) */}
              <motion.div
                className="pointer-events-none absolute left-4 bottom-4 -rotate-90 origin-left text-xl font-semibold text-white/70"
                animate={{ opacity: isActive ? 0 : 0.9, y: isActive ? 12 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {p.title}
              </motion.div>

              {/* active details */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6"
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 max-w-md text-sm text-white/80">{p.desc}</p>
                <a
                  href={p.href}
                  className="mt-3 inline-flex w-max items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
                >
                  View details
                </a>
              </motion.div>

              {/* subtle inner ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.article>
          );
        })}
      </div>

      {/* Mobile: simple cards */}
      <div className="md:hidden grid gap-4">
        {projects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <a href={p.href} className="mt-3 inline-block rounded-md border border-white/20 px-3 py-1.5 text-sm text-white hover:bg-white/10">
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Contact
function Contact() {
  return (
    <Section id="contact" className="py-20">
      <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Let’s build something
          </h2>
          <p className="mt-3 max-w-prose text-white/70">
            Tell me about your project or collaboration ideas. I typically reply
            within 1–2 business days.
          </p>
        </div>
        <form className="space-y-3">
          <input
            aria-label="Name"
            placeholder="Your name"
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            aria-label="Email"
            placeholder="Email"
            type="email"
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
          />
          <textarea
            aria-label="Message"
            placeholder="Message"
            rows={4}
            className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
          />
          <button
            type="button"
            className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b0f14] hover:bg-white/90"
          >
            <Mail className="mr-2 inline h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1720] py-10">
      <Section>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Arron Snow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/arronsnow" className="hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/arronsnow"
              className="hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:you@arronsnow.com" className="hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0b0f14] text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
