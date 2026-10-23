import { links } from "./profile";

const gh = (repo) => `https://github.com/Prajjawalsingh87/${repo}`;
const post = (slug) => `https://medium.com/@singhprajjawal87/${slug}`;

// About
export const facts = [
  { label: "Role", value: "Backend Engineer, TailNode" },
  { label: "Education", value: "B.Tech ECE, NIT Trichy (2021–25)" },
  { label: "Core stack", value: "Python · Java · Django · FastAPI · gRPC" },
  { label: "Data", value: "Kafka · WarpStream · CDC · ClickHouse · PostgreSQL" },
  { label: "Infra", value: "AWS (S3, Route 53) · Nginx · Kubernetes" },
];

export const ratings = [
  { site: "LeetCode", rating: "2130", badge: "Guardian · top 1.92%", href: links.leetcode, color: "bg-amber-500" },
  { site: "CodeChef", rating: "1922", badge: "4★ peak", href: links.codechef, color: "bg-orange-700" },
  { site: "Codeforces", rating: "~1550", badge: "Specialist", href: links.codeforces, color: "bg-cyan-600" },
];

// Experience
export const impact = [
  { value: "38%", label: "lower monthly spend: $1,500 to $930" },
  { value: "60%", label: "faster average loads: 5 seconds to 2 seconds" },
  { value: "800 KB", label: "coordinate payload, down from 2 MB" },
  { value: "$570", label: "saved each month across three cost categories" },
];

export const experience = [
  { title: "Customer performance and cost investigation", text: "Investigated slow shape and coordinate loading and rising infrastructure costs by examining content delivery, coordinate payloads, S3 storage usage, and Kafka replication traffic across Availability Zones." },
  { title: "CDN caching and application security", text: "Implemented CDN caching for frequently accessed content, reducing average load time from 5 seconds to 2 seconds (60%). Monthly origin data-transfer costs fell from $500 to $300 (40%). Integrated a WAF to filter malicious requests and protect application endpoints." },
  { title: "Coordinate payload optimisation", text: "Removed redundant coordinates and optimised precision while preserving required shape accuracy. Average payload size fell from 2 MB to 800 KB (60%), making shapes faster to download and render and smoother to interact with." },
  { title: "S3 storage cost optimisation", text: "Optimised stored data and applied lifecycle policies where appropriate, reducing monthly S3 storage costs from $300 to $210 (30%)." },
  { title: "Kafka to WarpStream migration", text: "Moved a suitable messaging workload from Kafka to WarpStream to reduce cross-Availability Zone replication traffic. Monthly messaging infrastructure costs fell from $700 to $420 (40%). Across origin transfer, S3 storage, and messaging, monthly spend fell from $1,500 to $930, saving $570 (38%)." },
  { title: "Real-time data pipeline and CDC", text: "Automated Kafka-to-ClickHouse ETL for 500K+ daily events, cutting reporting latency from hours to under 2 minutes, with replication, CQRS and Event Sourcing for audit-ready data." },
  { title: "APIs and production infrastructure", text: "Built secured REST and FastAPI endpoints at sub-50 ms p99 using OAuth2/JWT. Containerized services with Docker and deployed them on Kubernetes using Helm and Ingress, supporting a 99.9% uptime SLA. Configured Nginx and load balancers and debugged production issues across logs, metrics and databases." },
  { title: "System design and engineering practices", text: "Led design reviews on PostgreSQL sharding and indexing, Redis caching, ScyllaDB write optimisation and distributed consistency. Used Claude Code, Cursor and Copilot with critical code review to ship tested changes." },
];

export const experienceStack = ["Django", "FastAPI", "gRPC", "Kafka", "WarpStream", "CDC", "ClickHouse", "PostgreSQL", "Redis", "ScyllaDB", "AWS S3", "WAF", "CDN", "Route 53", "Docker", "Kubernetes", "Helm", "Nginx", "Load Balancer", "MCP"];

// Skills
export const skillGroups = [
  { title: "Languages", items: ["Java 17+", "Python", "C++", "SQL", "JavaScript"] },
  { title: "Frameworks", items: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "FastAPI", "Django", "JUnit", "MapStruct", "Liquibase/Flyway"] },
  { title: "APIs & Auth", items: ["REST API design", "gRPC", "GraphQL", "Microservices", "OAuth2", "JWT"] },
  { title: "Integrations", items: ["Webhooks", "Idempotency keys", "Retries & replay", "Reconciliation", "HMAC signing", "JWS/JWE", "Payment gateways"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "ClickHouse", "ScyllaDB", "MongoDB", "Redis", "Memcached", "Query optimisation"] },
  { title: "Streaming", items: ["Kafka", "WarpStream", "CDC", "SQS", "RabbitMQ", "Event-driven", "CQRS", "Event sourcing", "Stream processing"] },
  { title: "Cloud & DevOps", items: ["AWS EKS · RDS · S3", "S3 Glacier & lifecycle", "Route 53", "Hosted zones", "Load balancers", "Nginx", "CDN", "WAF", "Docker", "Kubernetes", "Helm", "Ingress", "GitHub Actions"] },
  { title: "Observability", items: ["OpenTelemetry", "SigNoz", "Grafana", "Tracing", "Structured logging"] },
  { title: "AI tooling", items: ["MCP (Model Context Protocol)", "Claude Code", "Cursor", "GitHub Copilot"] },
  { title: "Foundations", items: ["DSA", "System design", "Concurrency", "OOP", "Design patterns"] },
];

// Projects
export const projects = [
  {
    title: "Orbit — Social Media App",
    description:
      "Full-stack social app: OTP signup, posts, likes, follows and a feed. MongoDB compound indexes cut feed queries by 70%.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://social-media-application-7gjn.vercel.app",
    repo: gh("Social-media-application"),
  },
  {
    title: "SnapLink — URL Shortener",
    description:
      "Short links with custom aliases, expiry and click analytics. Redis caches redirects; PostgreSQL stores every click.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    live: "https://url-shortner-1-xyqj.onrender.com",
    repo: gh("URL_Shortner"),
  },
  {
    title: "Quiz Competition Platform",
    description:
      "Timed solo quizzes with topic selection, answer explanations and results saved on your device.",
    tags: ["React", "React Router", "Tailwind CSS"],
    live: "https://quiz-competition-plum.vercel.app",
    repo: gh("Quiz-Competition"),
  },
  {
    title: "File Agent",
    description:
      "An LLM agent that plans and runs file operations through tools, served as a CLI and a FastAPI API.",
    tags: ["Python", "FastAPI", "LLM", "Groq"],
    live: "https://file-agent.onrender.com",
    repo: gh("FILE_AGENT"),
  },
  {
    title: "FX Live — Currency Converter",
    description:
      "Live rates for 200+ currencies and crypto. Converts as you type, with a searchable picker and popular rates.",
    tags: ["React", "Vite", "Tailwind CSS", "REST API"],
    live: "https://real-time-currencyconverter.vercel.app",
    repo: gh("Real-time-currencyconverter"),
  },
  {
    title: "Segment Tree Solutions",
    description:
      "C++ solutions for the ITMO segment tree course, CSES, Codeforces and AtCoder, each with its key idea.",
    tags: ["C++", "DSA", "Segment Tree"],
    repo: gh("segment-treeITMO-solutions"),
  },
];

export const miniApps = [
  { title: "Todo", live: "https://todo-chi-vert.vercel.app", repo: gh("TODO") },
  { title: "Password Generator", live: "https://passwordgenerator-three-steel.vercel.app", repo: gh("passwordgenerator") },
  { title: "Color Playground", live: "https://bacgroundcolorchnager.vercel.app", repo: gh("bacgroundcolorchnager") },
  { title: "LLD in C++", repo: gh("lld-learning") },
  { title: "System Design in C++", repo: gh("system_design") },
];

// DevOps & Cloud
export const devopsWork = [
  {
    title: "Kubernetes Production Lab",
    description:
      "A FastAPI + PostgreSQL app on my own kubeadm cluster on EC2, with Kustomize overlays, Ingress, health probes, ECR images and CI that validates every manifest.",
    tags: ["Kubernetes", "Kustomize", "Docker", "AWS EC2", "ECR", "GitHub Actions"],
    href: "https://github.com/Prajjawalsingh87/kubernetes-lab",
  },
  {
    title: "DevOps Roadmap",
    description:
      "My learning-in-public roadmap: AWS IAM and NGINX guides so far, then Linux, networking, containers, Kubernetes, CI/CD and observability.",
    tags: ["AWS IAM", "NGINX", "Linux", "CI/CD"],
    href: "https://github.com/Prajjawalsingh87/devops-roadmap",
  },
  {
    title: "In production at TailNode",
    description:
      "Improved customer load times from 5s to 2s with CDN caching; added WAF protection and reduced coordinate payloads from 2 MB to 800 KB. Cut origin transfer costs by 40%, S3 storage by 30%, and messaging infrastructure by 40% through a suitable Kafka-to-WarpStream migration. Total monthly savings: $570 (38%).",
    tags: ["Helm", "Ingress", "Nginx", "Route 53", "CDN", "S3 Glacier", "WarpStream"],
  },
];

export const toolchain = [
  { title: "Cloud", items: ["AWS EKS", "RDS", "S3 & Glacier", "Route 53", "Secrets Manager", "EC2", "CDN"] },
  { title: "Containers", items: ["Docker", "docker-compose", "Kubernetes", "Helm", "Ingress"] },
  { title: "Delivery", items: ["GitHub Actions", "CI/CD", "Nginx", "Load Balancer"] },
  { title: "Observability", items: ["OpenTelemetry", "SigNoz", "Grafana", "Tracing", "Metrics"] },
];

// Writing (Medium)
export const articles = [
  {
    title: "Kafka vs WarpStream: same Kafka API, a very different engine",
    date: "Oct 2026",
    href: post("kafka-vs-warpstream-same-kafka-api-a-very-different-engine-1db5f5117e8b"),
  },
  {
    title: "Understanding PACELC and Why R + W > N Matters in Distributed Systems",
    date: "Jul 2026",
    href: post("understanding-pacelc-and-why-r-w-n-matters-in-distributed-systems-73aa99447480"),
  },
  {
    title: "Kubernetes Architecture Explained: From Pod Creation to Deployments, ReplicaSets, and Controllers",
    date: "Jun 2026",
    href: post("kubernetes-architecture-explained-from-pod-creation-to-deployments-replicasets-and-controllers-ee9036ea8ea8"),
  },
  {
    title: "PostgreSQL Shared Memory Architecture",
    date: "Jun 2026",
    href: post("2-postgresql-shared-memory-architecture-aa78436ee54e"),
  },
  {
    title: "How PostgreSQL actually works under the hood",
    date: "May 2026",
    href: post("how-postgresql-actually-works-under-the-hood-056ae22aae1b"),
  },
];

// Stable element ids so search results can scroll to the exact item.
export const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Contact
export const contactProfiles = [
  { label: "LinkedIn", handle: "Prajjawal Singh", href: links.linkedin },
  { label: "GitHub", handle: "Prajjawalsingh87", href: links.github },
  { label: "Medium", handle: "@singhprajjawal87", href: links.medium },
  { label: "LeetCode", handle: "sprajjawalsingh", href: links.leetcode },
  { label: "CodeChef", handle: "singhprajjawal", href: links.codechef },
  { label: "Codeforces", handle: "singhprajjawal87", href: links.codeforces },
];
