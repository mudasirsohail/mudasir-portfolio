import { a as __toESM } from "../_runtime.mjs";
import { n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Github, c as CodeXml, i as Linkedin, n as MapPin, o as Download, r as Mail, s as ArrowUpRight, t as Trophy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DCG3VIi7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rudn_default = "/assets/rudn-UYLSbPEz.jpg";
var hse_default = "/assets/hse-Bmjhount.jpg";
var rector_default = "/assets/rector-C3GZ-a1i.jpg";
var jdc_default = "/assets/jdc-vjg7yg2y.jpg";
var profile_default = "/assets/profile-DmDReEu2.jpeg";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = {
	hidden: {},
	show: { transition: { staggerChildren: .08 } }
};
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glimpse, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-semibold tracking-tight text-lg",
					children: ["mudasir", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
					children: [
						["Work", "#work"],
						["About", "#about"],
						["Stack", "#stack"],
						["Glimpse", "#glimpse"],
						["Achievements", "#achievements"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "hover:text-foreground transition-colors",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-ink transition-colors",
					children: ["Let's talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				animate: "show",
				variants: stagger,
				className: "md:col-span-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent animate-pulse" }), "Always Building · 2026"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						variants: fadeUp,
						className: "font-display font-semibold tracking-[-0.04em] text-[12vw] md:text-[7.5rem] leading-[0.95]",
						children: [
							"Mudasir",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-accent",
								children: "Sohail."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "mt-8 text-xl md:text-2xl max-w-2xl text-foreground/80 leading-relaxed",
						children: "Building AI-powered and full-stack applications with a spec-driven approach using modern technologies and AI enhanced workflows."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.02] transition-transform",
							children: ["View work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/cv.pdf",
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-medium hover:border-foreground transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download CV"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "mt-10 flex items-center gap-5 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/mudasirsohail/",
								"aria-label": "LinkedIn",
								className: "hover:text-foreground transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/mudasirsohail",
								"aria-label": "GitHub",
								className: "hover:text-foreground transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:mudasirsohailsoomro@gmail.com",
								"aria-label": "Email",
								className: "hover:text-foreground transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), " Karachi, PK"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "md:col-span-4 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] rounded-2xl overflow-hidden bg-paper-tint shadow-[var(--shadow-bento)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: profile_default,
						alt: "Mudasir Sohail",
						width: 896,
						height: 1152,
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-3 left-3 right-3 flex items-center justify-between bg-background/85 backdrop-blur rounded-xl px-3 py-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Currently"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Exploring Agentic AI"
						})]
					})]
				})
			})]
		})
	});
}
var projects = [
	{
		title: "Shoe Store",
		subtitle: "E-Commerce Platform",
		tag: "Next.js · TypeScript · Stripe",
		tone: "dark",
		colSpan: "md:col-span-5",
		displayStyle: "big",
		github: "https://github.com/mudasirsohail/Nike-Shoes-Fully-Functional"
	},
	{
		title: "Gold Alert Trading Bot",
		subtitle: "Real-time XAUUSD signals",
		tag: "Python · Flask · Twelve Data",
		tone: "cream",
		colSpan: "md:col-span-7",
		displayStyle: "dollar",
		github: "https://github.com/mudasirsohail/Gold-Alert-Trading-Bot"
	},
	{
		title: "Todo AI",
		subtitle: "LLM Task Companion",
		tag: "React · OpenAI · Supabase",
		tone: "orange",
		colSpan: "md:col-span-3",
		displayStyle: "big",
		github: "https://github.com/mudasirsohail/Hackathon-II"
	},
	{
		title: "Physical AI Book",
		subtitle: "Humanoid Robotics Guide",
		tag: "Docusaurus · Writing · AI",
		tone: "cream",
		colSpan: "md:col-span-4",
		displayStyle: "logo",
		github: "https://github.com/mudasirsohail/Hackathons"
	},
	{
		title: "Personal AI Employee",
		subtitle: "Agentic Automation · Hackathon 0",
		tag: "Qwen CLI · Python · Obsidian",
		tone: "mid",
		colSpan: "md:col-span-5",
		displayStyle: "stacked",
		github: "https://github.com/mudasirsohail/Hackathon-0/tree/main/Silver-Tier"
	},
	{
		title: "Vision Healthcare",
		subtitle: "Appointment Booking System",
		tag: "Next.js · TypeScript · Sanity",
		tone: "cream",
		colSpan: "md:col-span-6",
		displayStyle: "stacked",
		github: "https://github.com/mudasirsohail/Vision-Health-Care-Foundation"
	},
	{
		title: "Crypto Dashboard",
		subtitle: "Live Market Analytics",
		tag: "Next.js · TypeScript · Web3",
		tone: "dark",
		colSpan: "md:col-span-6",
		displayStyle: "big",
		github: "https://github.com/mudasirsohail/Crypto-Coin-Market-Dashboard"
	}
];
var toneStyles = {
	dark: "bg-[#1A2820] text-[#F2EDE4]",
	cream: "bg-[#EAE4D8] text-[#1A1814] border border-[#DDD7CC]",
	orange: "bg-[#D4700A] text-[#F2EDE4]",
	mid: "bg-[#2A3828] text-[#F2EDE4]"
};
var tagOpacity = {
	dark: "opacity-50",
	cream: "opacity-45",
	orange: "opacity-70",
	mid: "opacity-50"
};
var subtitleColor = {
	dark: "text-[#F2EDE4]/60",
	cream: "text-[#6B6560]",
	orange: "text-[#F2EDE4]/70",
	mid: "text-[#F2EDE4]/60"
};
function ProjectCard({ title, subtitle, tag, tone, colSpan, displayStyle, github }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: github ?? "#",
		target: "_blank",
		rel: "noopener noreferrer",
		variants: fadeUp,
		whileHover: { y: -3 },
		transition: {
			type: "spring",
			stiffness: 280,
			damping: 24
		},
		className: `group relative flex flex-col justify-between rounded-[20px] p-7 min-h-[200px] transition-opacity hover:opacity-90 ${toneStyles[tone]} ${colSpan}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[10px] font-semibold tracking-[.08em] uppercase ${tagOpacity[tone]}`,
				children: tag
			}),
			displayStyle === "big" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-auto pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[2.6rem] font-extrabold tracking-[-0.04em] leading-[.95]",
					children: title.split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: word
					}, i))
				})
			}),
			displayStyle === "dollar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 my-auto pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[2.8rem] font-extrabold text-[#D4700A] leading-none",
					children: "$"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [title.split(" ").slice(0, 2).map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[1.5rem] font-bold tracking-[-0.03em] leading-tight text-[#1A1814]",
					children: word
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[1.5rem] font-bold tracking-[-0.03em] leading-tight text-[#1A1814]",
					children: title.split(" ").slice(2).join(" ")
				})] })]
			}),
			displayStyle === "logo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 my-auto pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[52px] h-[52px] bg-[#1A1814] rounded-xl flex items-center justify-center flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "28",
						height: "28",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "#F2EDE4",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 17l10 5 10-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12l10 5 10-5" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[1.9rem] font-extrabold tracking-[-0.04em] leading-[1] text-[#1A1814]",
					children: title.split(" ").slice(0, 2).map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: word }, i))
				})]
			}),
			displayStyle === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-auto pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[1.6rem] font-bold tracking-[-0.03em] leading-tight",
					children: title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-end mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-[13px] font-medium ${subtitleColor[tone]}`,
					children: subtitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg opacity-50 group-hover:opacity-100 transition-opacity",
					children: "↗"
				})]
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-t border-border/60 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Selected work",
				title: "Things I've built"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: stagger,
				className: "grid grid-cols-1 md:grid-cols-12 gap-3.5 mt-12",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { ...p }, p.title))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "About",
					title: "",
					small: true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				className: "md:col-span-8 space-y-6 text-xl md:text-2xl leading-relaxed tracking-tight text-foreground/85",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"I'm a full-stack developer obsessed with the seam between",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: " software and intelligence"
					}),
					" — building tools that don't just respond, they think alongside you."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base md:text-lg text-muted-foreground",
					children: "Started with curiosity, kept going because every project taught me one new uncomfortable thing. Today I'm building agentic systems, writing about the physics of AI products, and shipping freelance work on Upwork. The long arc: a small studio that makes opinionated AI tools for people who hate bloat."
				})]
			})]
		})
	});
}
var stackItems = [
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
	"Vercel/HuggingFace"
];
function Skills() {
	const sectionRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const [distance, setDistance] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
		offset: ["start start", "end end"]
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		ref: sectionRef,
		className: "relative hidden lg:block border-t border-border/60 bg-paper-tint/40",
		style: { height: `${Math.max(distance, 0) + 800}px` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-6xl px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground",
						children: "Stack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-6xl font-semibold",
						children: [
							"What I Build With",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "inline-block h-8 w-8 text-accent" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base text-muted-foreground",
						children: "Frontend, backend, and deployment tools I use to design, build, and ship production systems."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				ref: trackRef,
				style: { x },
				className: "flex items-center gap-20 whitespace-nowrap pl-8 will-change-transform",
				children: stackItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-semibold tracking-[-0.02em] text-foreground/90 transition-colors duration-300 hover:text-accent",
						children: item
					}), index < stackItems.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "select-none text-base text-accent/60",
						children: "•"
					})]
				}, item))
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack-mobile",
		className: "border-t border-border/60 bg-paper-tint/40 py-16 lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground",
					children: "Stack"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl",
					children: [
						"What I Build With",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "inline-block h-8 w-8 text-accent" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "Frontend, backend, and deployment tools I use to design, build, and ship production systems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: stackItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\n                  rounded-full\n                  border\n                  border-border/70\n                  bg-background/70\n                  px-4\n                  py-2\n                  text-sm\n                  font-medium\n                  transition-all\n                  duration-300\n                  hover:border-accent\n                  hover:text-accent\n                ",
						children: item
					}, item))
				})
			]
		})
	})] });
}
var glimpses = [
	{
		stat: "66+",
		title: "Code Repositories",
		detail: "66+ code repositories"
	},
	{
		stat: "3-5",
		title: "Clients",
		detail: "Clients delivered through direct referrals and network"
	},
	{
		stat: "3",
		title: "Scholarships",
		detail: "International scholarships won (RUDN, HSE, Rector)"
	},
	{
		stat: "1st",
		title: "Hackathons",
		detail: "1st place — JDC X Indrive National Hackathon"
	},
	{
		stat: "10+",
		title: "Projects",
		detail: "Shipped projects, from trading bots to full-stack platforms"
	},
	{
		stat: "6",
		title: "Certifications",
		detail: "Certifications across AI, Data Science, Cybersecurity, and Mobile Dev"
	},
	{
		stat: "Many",
		title: "Mentorship",
		detail: "Regularly helping peers debug and learn throughout the Governor Sindh AI program"
	},
	{
		stat: "3",
		title: "Languages",
		detail: "English, Urdu, Sindhi"
	}
];
function Glimpse() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "glimpse",
		className: "border-t border-border/60 bg-paper-tint/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "At a glance",
				title: "A glimpse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "show",
				viewport: { once: true },
				variants: stagger,
				className: "mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4",
				children: glimpses.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "rounded-xl border border-border bg-card p-6 hover:border-foreground/30 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl md:text-4xl font-display font-bold text-accent",
							children: g.stat
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-3 font-display font-semibold text-foreground",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs md:text-sm text-muted-foreground",
							children: g.detail
						})
					]
				}, g.title))
			})]
		})
	});
}
var achievements = [
	{
		title: "RUDN Scholarship",
		detail: "Awarded an international scholarship by RUDN University, Russia, in recognition of academic excellence and technical achievement.",
		image: rudn_default
	},
	{
		title: "HSE Olympiad",
		detail: "Won the HSE International Olympiad — one of Russia's most competitive academic scholarships for international students.",
		image: hse_default
	},
	{
		title: "Rector Scholarship — UIN Surakarta",
		detail: "Awarded the Rector Scholarship at UIN Surakarta, Indonesia, for the Data Science program.",
		image: rector_default
	},
	{
		title: "1st Place — JDC X Indrive Course",
		detail: "Placed first out of all participants at the JDC X Indrive Course. Prize: Samsung Tablet.",
		image: jdc_default
	}
];
function Achievements() {
	const sectionRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "achievements",
		ref: sectionRef,
		className: "border-t border-border/60 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground",
							children: "ACHIEVEMENTS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-foreground",
							children: "A few wins"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm md:text-base leading-relaxed text-muted-foreground",
							children: "Milestones and recognition earned through academic excellence, competitions, and dedication."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[450vh] md:min-h-[500vh]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-16 md:top-24 flex h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-[60vh] md:h-[78vh] w-full overflow-hidden",
							children: achievements.map((item, index) => {
								const segment = 1 / achievements.length;
								const enterStart = index * segment;
								const enterEnd = enterStart + segment * .2;
								const holdStart = enterEnd;
								const holdEnd = holdStart + segment * .2;
								const exitStart = holdEnd;
								const exitEnd = enterStart + segment;
								const rawOpacity = useTransform(scrollYProgress, [
									enterStart,
									enterEnd,
									holdStart,
									holdEnd,
									exitStart,
									exitEnd
								], index === 0 ? [
									1,
									1,
									1,
									1,
									1,
									1
								] : [
									0,
									2,
									2,
									2,
									2,
									0
								]);
								const rawY = useTransform(scrollYProgress, [
									enterStart,
									enterEnd,
									holdStart,
									holdEnd,
									exitStart,
									exitEnd
								], index === 0 ? [
									0,
									0,
									0,
									0,
									-20,
									-40
								] : [
									40,
									0,
									0,
									0,
									-40,
									-70
								]);
								const rawScale = useTransform(scrollYProgress, [
									enterStart,
									enterEnd,
									holdStart,
									holdEnd,
									exitStart,
									exitEnd
								], index === 0 ? [
									1,
									1,
									1,
									1,
									.98,
									.96
								] : [
									.97,
									1,
									1,
									1,
									.98,
									.96
								]);
								const opacity = useSpring(rawOpacity, {
									stiffness: 60,
									damping: 20
								});
								const y = useSpring(rawY, {
									stiffness: 70,
									damping: 25
								});
								const scale = useSpring(rawScale, {
									stiffness: 80,
									damping: 30
								});
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
									style: {
										opacity,
										y,
										scale
									},
									className: "absolute inset-x-0 top-0 flex flex-col rounded-[2rem] border border-border/70 bg-card/95 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur overflow-hidden h-[60vh] min-h-[22rem] md:h-[72vh] md:min-h-[28rem]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full flex-[0_0_40%] md:flex-[0_0_45%] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.title,
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-1 items-end p-5 md:p-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "w-full",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-[0.65rem] md:text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3 md:size-3.5 text-accent" }), "Recognition"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-4 md:mt-6 font-display text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.02em] text-foreground",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 md:mt-4 max-w-lg text-xs md:text-sm lg:text-base leading-relaxed text-muted-foreground line-clamp-3 md:line-clamp-none",
													children: item.detail
												})
											]
										})
									})]
								}, item.title);
							})
						})
					})
				})]
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border/60 bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-6 py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display font-semibold tracking-[-0.03em] text-4xl md:text-6xl leading-[0.95]",
						children: [
							"Let’s build",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-accent",
								children: "something meaningful."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base md:text-lg leading-relaxed text-muted-foreground",
						children: "Open to collaboration, freelance projects, and opportunities in modern web development and AI applications. Reach me fastest via email."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2",
						children: [
							{
								label: "Email",
								value: "mudasirsohailsoomro@gmail.com",
								href: "mailto:mudasirsohailsoomro@gmail.com"
							},
							{
								label: "LinkedIn",
								value: "linkedin.com/in/mudasirsohail",
								href: "https://www.linkedin.com/in/mudasirsohail/"
							},
							{
								label: "GitHub",
								value: "github.com/mudasirsohail",
								href: "https://github.com/mudasirsohail"
							},
							{
								label: "Phone",
								value: "+92 3103147544",
								href: "tel:+923103147544"
							}
						].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: link.href,
							className: "rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-foreground/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground",
								children: link.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm md:text-base text-foreground",
								children: link.value
							})]
						}, link.label))
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-background text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Mudasir Sohail"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Built with React · Tailwind · Framer Motion" })]
		})
	});
}
function SectionHeader({ eyebrow, title, small }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
		children: eyebrow
	}), title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: `mt-3 font-display font-semibold tracking-[-0.03em] ${small ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`,
		children: title
	})] });
}
//#endregion
export { Index as component };
