import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { Code2, Cpu, Terminal, Braces } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import rudn from "../assests/rudn.jpg";
import hse from "../assests/hse.jpg";
import rector from "../assests/rector.jpg";
import jdc from "../assests/jdc.jpg";
import shoe from "../assests/shoe.jpg";
import vision from "../assests/vision.jpg";
import Todo from "../assests/todo.png";
import AI from "../assests/ai.jpg";
import cloud from "../assests/cloud.jpg";


import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import portrait from "../assests/profile.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mudasir Sohail — Full-Stack Developer" },
      { name: "description", content: "Full-stack developer building AI-powered products, dashboards, and agentic systems. Based in Karachi, working worldwide." },
      { property: "og:title", content: "Mudasir Sohail — Full-Stack Developer" },
      { property: "og:description", content: "Building AI-powered products and agentic systems. React, Next.js, Python, Docker, Kubernetes." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Glimpse />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Glimpse", "#glimpse"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-lg">
          mudasir<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-ink transition-colors"
        >
          Let's talk <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="md:col-span-8"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Always Building · 2026
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold tracking-[-0.04em] text-[12vw] md:text-[7.5rem] leading-[0.95]"
          >
            Mudasir
            <br />
            <span className="italic font-normal text-accent">Sohail.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-xl md:text-2xl max-w-2xl text-foreground/80 leading-relaxed">
            Building AI-powered and full-stack applications with a spec-driven approach using modern technologies and AI enhanced workflows.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              View work <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-medium hover:border-foreground transition-colors"
            >
              <Download className="size-4" /> Download CV
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://www.linkedin.com/in/mudasirsohail/" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a href="https://github.com/mudasirsohail" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="size-5" />
            </a>
            <a href="mailto:mudasirsohailsoomro@gmail.com" aria-label="Email" className="hover:text-foreground transition-colors">
              <Mail className="size-5" />
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> Karachi, PK
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-paper-tint shadow-[var(--shadow-bento)]">
            <img
              src={portrait}
              alt="Mudasir Sohail"
              width={896}
              height={1152}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-background/85 backdrop-blur rounded-xl px-3 py-2 text-xs">
              <span className="font-medium">Currently</span>
              <span className="text-muted-foreground">Exploring Agentic AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// /* ---------------- Projects (Bento) ---------------- */

// type Project = {
//   title: string;
//   blurb: string;
//   tag: string;
//   tone?: "ink" | "accent" | "paper";
//   className?: string;
// };


// const projects: Project[] = [
//   {
//     title: "Shoe E-Commerce Platform",
//     blurb: "Developed a full-stack shoe marketplace featuring user authentication, dynamic product management, shopping cart, secure checkout, and a responsive user interface optimized for performance and scalability.",
//     tag: "Next.js · TypeScript · Sanity CMS · Stripe",
//     tone: "ink",
//     className: "md:col-span-7 md:row-span-2",
//   },
//   {
//     title: "Vision Healthcare Foundation Website",
//     blurb: "Built a healthcare appointment booking platform with online scheduling, patient management, and responsive design.",
//     tag: "Next.js · TypeScript · Sanity CMS",
//     tone: "accent",
//     className: "md:col-span-5",
//   },
//   {
//     title: "Todo AI",
//     blurb: "An LLM-powered task companion that breaks goals into atomic steps and schedules them.",
//     tag: "React · OpenAI · Supabase",
//     tone: "paper",
//     className: "md:col-span-5",
//   },
//   {
//     title: "Physical AI Book with chatbot",
//     blurb: "A printed companion to learning agentic AI — illustrations, code samples and field notes from real builds.",
//     tag: "Writing · Illustration · AI",
//     tone: "ink",
//     className: "md:col-span-7",
//   },
//   {
//     title: "Cloud-Native Hackathon Lab",
//     blurb: "Production-grade microservices stack built during a Kubernetes hackathon — containerized services, K8s manifests and observability.",
//     tag: "Docker · Kubernetes · Microservices",
//     tone: "paper",
//     className: "md:col-span-4",
//   },
// ];



// function Projects() {
//   return (
//     <section id="work" className="border-t border-border/60 bg-background">
//       <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
//         <SectionHeader eyebrow="Selected work" title="Things I've built" />
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={stagger}
//           className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 mt-12"
//         >
//           {projects.map((p) => (
//             <ProjectCard key={p.title} {...p} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// function ProjectCard({ title, blurb, tag, tone = "paper", className }: Project) {
//   const tones = {
//     ink: "bg-foreground text-background border-foreground hover:bg-ink",
//     accent: "bg-accent text-accent-foreground border-accent",
//     paper: "bg-card text-foreground border-border hover:border-foreground/40",
//   };
//   return (
//     <motion.a
//       href="#"
//       variants={fadeUp}
//       whileHover={{ y: -3 }}
//       transition={{ type: "spring", stiffness: 280, damping: 24 }}
//       className={`group relative flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-colors ${tones[tone]} ${className ?? ""}`}
//     >
//       <div className="flex items-start justify-between gap-4">
//         <span className="text-xs uppercase tracking-widest opacity-70">{tag}</span>
//         <ArrowUpRight className="size-5 opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
//       </div>
//       <div className="mt-10">
//         <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight">{title}</h3>
//         <p className="mt-3 text-sm md:text-base opacity-80 max-w-md leading-relaxed">{blurb}</p>
//       </div>
//     </motion.a>
//   );
// }






/* ---------------- Projects (Bento) ---------------- */

type Project = {
  title: string;
  subtitle: string;
  tag: string;
  tone: "dark" | "cream" | "orange" | "mid";
  colSpan: string;
  displayStyle: "big" | "logo" | "dollar" | "stacked";
  github?: string;
};

const projects: Project[] = [
  {
    title: "Shoe Store",
    subtitle: "E-Commerce Platform",
    tag: "Next.js · TypeScript · Stripe",
    tone: "dark",
    colSpan: "md:col-span-5",
    displayStyle: "big",
    github: "https://github.com/mudasirsohail/Nike-Shoes-Fully-Functional",
  },
  {
    title: "Gold Alert Trading Bot",
    subtitle: "Real-time XAUUSD signals",
    tag: "Python · Flask · Twelve Data",
    tone: "cream",
    colSpan: "md:col-span-7",
    displayStyle: "dollar",
    github: "https://github.com/mudasirsohail/Gold-Alert-Trading-Bot",
  },
  {
    title: "Todo AI",
    subtitle: "LLM Task Companion",
    tag: "React · OpenAI · Supabase",
    tone: "orange",
    colSpan: "md:col-span-3",
    displayStyle: "big",
    github: "https://github.com/mudasirsohail/Hackathon-II",
  },
  {
    title: "Physical AI Book",
    subtitle: "Humanoid Robotics Guide",
    tag: "Docusaurus · Writing · AI",
    tone: "cream",
    colSpan: "md:col-span-4",
    displayStyle: "logo",
    github: "https://github.com/mudasirsohail/Hackathons",
  },
  {
  title: "Personal AI Employee",
  subtitle: "Agentic Automation · Hackathon 0",
  tag: "Qwen CLI · Python · Obsidian",
  tone: "mid",
  colSpan: "md:col-span-5",
  displayStyle: "stacked",
  github: "https://github.com/mudasirsohail/Hackathon-0/tree/main/Silver-Tier",
},
  {
    title: "Vision Healthcare",
    subtitle: "Appointment Booking System",
    tag: "Next.js · TypeScript · Sanity",
    tone: "cream",
    colSpan: "md:col-span-6",
    displayStyle: "stacked",
    github: "https://github.com/mudasirsohail/Vision-Health-Care-Foundation",
  },
  {
    title: "Crypto Dashboard",
    subtitle: "Live Market Analytics",
    tag: "Next.js · TypeScript · Web3",
    tone: "dark",
    colSpan: "md:col-span-6",
    displayStyle: "big",
    github: "https://github.com/mudasirsohail/Crypto-Coin-Market-Dashboard",
  },
];

const toneStyles = {
  dark: "bg-[#1A2820] text-[#F2EDE4]",
  cream: "bg-[#EAE4D8] text-[#1A1814] border border-[#DDD7CC]",
  orange: "bg-[#D4700A] text-[#F2EDE4]",
  mid: "bg-[#2A3828] text-[#F2EDE4]",
};

const tagOpacity = {
  dark: "opacity-50",
  cream: "opacity-45",
  orange: "opacity-70",
  mid: "opacity-50",
};

const subtitleColor = {
  dark: "text-[#F2EDE4]/60",
  cream: "text-[#6B6560]",
  orange: "text-[#F2EDE4]/70",
  mid: "text-[#F2EDE4]/60",
};

function ProjectCard({ title, subtitle, tag, tone, colSpan, displayStyle, github }: Project) {
  return (
    <motion.a
      href={github ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group relative flex flex-col justify-between rounded-[20px] p-7 min-h-[200px] transition-opacity hover:opacity-90 ${toneStyles[tone]} ${colSpan}`}
    >
      <span className={`text-[10px] font-semibold tracking-[.08em] uppercase ${tagOpacity[tone]}`}>
        {tag}
      </span>

      {displayStyle === "big" && (
        <div className="my-auto pt-4">
          <div className="text-[2.6rem] font-extrabold tracking-[-0.04em] leading-[.95]">
            {title.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </div>
        </div>
      )}

      {displayStyle === "dollar" && (
        <div className="flex items-center gap-3 my-auto pt-4">
          <div className="text-[2.8rem] font-extrabold text-[#D4700A] leading-none">$</div>
          <div>
            {title.split(" ").slice(0, 2).map((word, i) => (
              <div key={i} className="text-[1.5rem] font-bold tracking-[-0.03em] leading-tight text-[#1A1814]">
                {word}
              </div>
            ))}
            <div className="text-[1.5rem] font-bold tracking-[-0.03em] leading-tight text-[#1A1814]">
              {title.split(" ").slice(2).join(" ")}
            </div>
          </div>
        </div>
      )}

      {displayStyle === "logo" && (
        <div className="flex items-center gap-3 my-auto pt-4">
          <div className="w-[52px] h-[52px] bg-[#1A1814] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F2EDE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="text-[1.9rem] font-extrabold tracking-[-0.04em] leading-[1] text-[#1A1814]">
            {title.split(" ").slice(0, 2).map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </div>
        </div>
      )}

      {displayStyle === "stacked" && (
        <div className="my-auto pt-4">
          <div className="text-[1.6rem] font-bold tracking-[-0.03em] leading-tight">
            {title}
          </div>
        </div>
      )}

      <div className="flex justify-between items-end mt-4">
        <span className={`text-[13px] font-medium ${subtitleColor[tone]}`}>
          {subtitle}
        </span>
        <span className="text-lg opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
      </div>
    </motion.a>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border/60 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeader eyebrow="Selected work" title="Things I've built" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-12 gap-3.5 mt-12"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionHeader eyebrow="About" title="" small />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 space-y-6 text-xl md:text-2xl leading-relaxed tracking-tight text-foreground/85"
        >
          <p>
            I'm a full-stack developer obsessed with the seam between
            <span className="text-accent"> software and intelligence</span> —
            building tools that don't just respond, they think alongside you.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Started with curiosity, kept going because every project taught me one new uncomfortable
            thing. Today I'm building agentic systems, writing about the physics of AI products, and
            shipping freelance work. The long arc: a small studio that makes opinionated
            AI tools for people who hate bloat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */



const stackItems: string[] = [
  "HTML/CSS/JavaScript",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "Prompt Engineering",
  "PostgreSQL",
  "OpenAI Agents SDK",
  "MongoDB/NeonDB",
  "Sanity/Stripe",
  "RAG",
  "Auth.js/BetterAuth",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Vercel/HuggingFace",
];

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;

      const d = track.scrollWidth - window.innerWidth;
      setDistance(Math.max(d, 0));
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <>
      {/* Desktop */}
      <section
        id="stack"
        ref={sectionRef}
        className="relative hidden lg:block border-t border-border/60 bg-paper-tint/40"
        style={{
          height: `${Math.max(distance, 0) + 800}px`,
        }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-24">
          <div className="mx-auto w-full max-w-6xl px-8">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Stack
            </div>

            
            <h2 className="font-display text-4xl md:text-6xl font-semibold">
              What I Build With{" "}
              <Code2 className="inline-block h-8 w-8 text-accent" />
              </h2>

            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Frontend, backend, and deployment tools I use to design,
              build, and ship production systems.
            </p>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-20 whitespace-nowrap pl-8 will-change-transform"
          >
            {stackItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-20"
              >
                <span className="font-display text-4xl font-semibold tracking-[-0.02em] text-foreground/90 transition-colors duration-300 hover:text-accent">
                  {item}
                </span>

                {index < stackItems.length - 1 && (
                  <span className="select-none text-base text-accent/60">
                    •
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile + Tablet */}
      <section
        id="stack-mobile"
        className="border-t border-border/60 bg-paper-tint/40 py-16 lg:hidden"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mb-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Stack
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            What I Build With{" "}
            <Code2 className="inline-block h-8 w-8 text-accent" />
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Frontend, backend, and deployment tools I use to design,
            build, and ship production systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {stackItems.map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-border/70
                  bg-background/70
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


/* ---------------- Certifications ---------------- */

/* ---------------- Glimpse ---------------- */

const glimpses = [
  {
    stat: "66+",
    title: "Code Repositories",
    detail: "66+ code repositories",
  },
  {
    stat: "3-5",
    title: "Clients",
    detail: "Clients delivered through direct referrals and network",
  },
  {
    stat: "3",
    title: "Scholarships",
    detail: "International scholarships won (RUDN, HSE, Rector)",
  },
  {
    stat: "1st",
    title: "Hackathons",
    detail: "1st place — JDC X Indrive Course",
  },
  {
    stat: "10+",
    title: "Projects",
    detail: "Shipped projects, from trading bots to full-stack platforms",
  },
  {
    stat: "6",
    title: "Certifications",
    detail: "Certifications across AI, Data Science, Cybersecurity, and Mobile Dev",
  },
  {
    stat: "Many",
    title: "Mentorship",
    detail: "Regularly helping peers debug and learn throughout the Governor Sindh AI program",
  },
  {
    stat: "3",
    title: "Languages",
    detail: "English, Urdu, Sindhi",
  },
];

function Glimpse() {
  return (
    <section id="glimpse" className="border-t border-border/60 bg-paper-tint/40">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeader eyebrow="At a glance" title="A glimpse" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {glimpses.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-6 hover:border-foreground/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">{g.stat}</div>
              <h4 className="mt-3 font-display font-semibold text-foreground">{g.title}</h4>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground">{g.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */

const achievements = [
  {
    title: "RUDN Scholarship",
    detail: "Awarded an international scholarship by RUDN University, Russia, in recognition of academic excellence and technical achievement.",
    image: rudn,
  },
  {
    title: "HSE Olympiad",
    detail: "Won the HSE International Olympiad — one of Russia's most competitive academic scholarships for international students.",
    image: hse,
  },
  {
    title: "Rector Scholarship — UIN Surakarta",
    detail: "Awarded the Rector Scholarship at UIN Surakarta, Indonesia, for the Data Science program.",
    image: rector,
  },
  {
    title: "1st Place — JDC X Indrive Course",
    detail: "Placed first out of all participants at the JDC X Indrive Course. Prize: Samsung Tablet.",
    image: jdc,
  },
];

function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="achievements" ref={sectionRef} className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">ACHIEVEMENTS</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-foreground">
              A few wins
            </h2>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-muted-foreground">
              Milestones and recognition earned through academic excellence, competitions, and dedication.
            </p>
          </div>

          <div className="relative min-h-[450vh] md:min-h-[500vh]">
            {/* <div className="sticky top-24 flex h-[calc(100vh-6rem)] items-center"> */}
            <div className="sticky top-16 md:top-24 flex h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] items-center">
              {/* <div className="relative h-[78vh] w-full overflow-hidden"> */}
              <div className="relative h-[60vh] md:h-[78vh] w-full overflow-hidden">
                {achievements.map((item, index) => {
                  const segment = 1 / achievements.length;

const enterStart = index * segment;
const enterEnd = enterStart + segment * 0.2;

const holdStart = enterEnd;
const holdEnd = holdStart + segment * 0.20;;

const exitStart = holdEnd;
const exitEnd = enterStart + segment;

const rawOpacity = useTransform(
  scrollYProgress,
  [
    enterStart,
    enterEnd,
    holdStart,
    holdEnd,
    exitStart,
    exitEnd,
  ],
  index === 0 ? [1, 1, 1, 1, 1, 1] : [0, 2, 2, 2, 2, 0]
);

const rawY = useTransform(
  scrollYProgress,
  [
    enterStart,
    enterEnd,
    holdStart,
    holdEnd,
    exitStart,
    exitEnd,
  ],
  index === 0 ? [0, 0, 0, 0, -20, -40] : [40, 0, 0, 0, -40, -70]
);

const rawScale = useTransform(
  scrollYProgress,
  [
    enterStart,
    enterEnd,
    holdStart,
    holdEnd,
    exitStart,
    exitEnd,
  ],
  index === 0 ? [1, 1, 1, 1, 0.98, 0.96] : [0.97, 1, 1, 1, 0.98, 0.96]
);

const opacity = useSpring(rawOpacity, {
  stiffness: 60,
  damping: 20,
});

const y = useSpring(rawY, {
  stiffness: 70,
  damping: 25,
});

const scale = useSpring(rawScale, {
  stiffness: 80,
  damping: 30,
});
                  return (
//   <motion.article
//     key={item.title}
//     style={{ opacity, y, scale }}
//     className="absolute inset-x-0 top-0 flex h-[72vh] min-h-[28rem] flex-col rounded-[2rem] border border-border/70 bg-card/95 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur overflow-hidden"
//   >
//     {/* Image — top portion of card */}
//     <div className="w-full h-48 md:h-56 flex-shrink-0 overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-full object-cover"
//       />
//     </div>

//     {/* Text — bottom portion of card */}
//     <div className="flex flex-1 items-end p-7">
//       <div className="w-full">
//         <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
//           <Trophy className="size-3.5 text-accent" />
//           Recognition
//         </div>
//         <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground">
//           {item.title}
//         </h3>
//         <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed text-muted-foreground">
//           {item.detail}
//         </p>
//       </div>
//     </div>
//   </motion.article>
// );


  <motion.article
    key={item.title}
    style={{ opacity, y, scale }}
    className="absolute inset-x-0 top-0 flex flex-col rounded-[2rem] border border-border/70 bg-card/95 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur overflow-hidden h-[60vh] min-h-[22rem] md:h-[72vh] md:min-h-[28rem]"
  >
    {/* Image — scales with card */}
    <div className="w-full flex-[0_0_40%] md:flex-[0_0_45%] overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text — fills remaining space */}
    <div className="flex flex-1 items-end p-5 md:p-7">
      <div className="w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-[0.65rem] md:text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
          <Trophy className="size-3 md:size-3.5 text-accent" />
          Recognition
        </div>
        <h3 className="mt-4 md:mt-6 font-display text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.02em] text-foreground">
          {item.title}
        </h3>
        <p className="mt-2 md:mt-4 max-w-lg text-xs md:text-sm lg:text-base leading-relaxed text-muted-foreground line-clamp-3 md:line-clamp-none">
          {item.detail}
        </p>
      </div>
    </div>
  </motion.article>
);


                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const links = [
    {
      label: "Email",
      value: "mudasirsohailsoomro@gmail.com",
      href: "mailto:mudasirsohailsoomro@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mudasirsohail",
      href: "https://www.linkedin.com/in/mudasirsohail/",
    },
    {
      label: "GitHub",
      value: "github.com/mudasirsohail",
      href: "https://github.com/mudasirsohail",
    },
    {
      label: "Phone",
      value: "+92 3103147544",
      href: "tel:+923103147544",
    },
  ];

  return (
    <section id="contact" className="border-t border-border/60 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-4xl md:text-6xl leading-[0.95]">
            Let’s build
            <br />
            <span className="italic font-normal text-accent">something meaningful.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            Open to collaboration, freelance projects, and opportunities in modern web development and AI applications. Reach me fastest via email.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-foreground/40"
              >
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">{link.label}</div>
                <div className="mt-2 text-sm md:text-base text-foreground">{link.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background text-muted-foreground">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div>© {new Date().getFullYear()} Mudasir Sohail</div>
        <div>Built with React · Tailwind · Framer Motion</div>
      </div>
    </footer>
  );
}

/* ---------------- Section Header ---------------- */

function SectionHeader({ eyebrow, title, small }: { eyebrow: string; title: string; small?: boolean }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</div>
      {title && (
        <h2
          className={`mt-3 font-display font-semibold tracking-[-0.03em] ${
            small ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"
          }`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
