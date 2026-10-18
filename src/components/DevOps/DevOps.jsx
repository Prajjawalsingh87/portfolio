import { ArrowUpRightIcon, GitHubIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const work = [
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
      "Services on Kubernetes via Helm and Ingress behind a load balancer (99.9% uptime), Nginx as reverse proxy, and a CDN that cut asset costs by 90%.",
    tags: ["Helm", "Ingress", "Nginx", "CDN", "Load Balancer"],
  },
];

const toolchain = [
  { title: "Cloud", items: ["AWS EKS", "RDS", "S3", "Secrets Manager", "EC2", "CDN"] },
  { title: "Containers", items: ["Docker", "docker-compose", "Kubernetes", "Helm", "Ingress"] },
  { title: "Delivery", items: ["GitHub Actions", "CI/CD", "Nginx", "Load Balancer"] },
  { title: "Observability", items: ["OpenTelemetry", "SigNoz", "Grafana", "Tracing", "Metrics"] },
];

function DevOps() {
  return (
    <Section
      id="devops"
      eyebrow="DevOps & Cloud"
      title="I ship and run what I build."
      intro="Containers, clusters, pipelines and dashboards, at work and in my own labs."
      className="bg-surface"
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {work.map((item) => (
          <li key={item.title}>
            <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-ink p-6">
              <h3 className="text-xl font-bold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-muted ring-1 ring-line">
                    {tag}
                  </li>
                ))}
              </ul>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                >
                  <GitHubIcon width={16} height={16} />
                  View on GitHub
                  <ArrowUpRightIcon />
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-5 grid gap-6 rounded-[var(--radius-card)] border border-line bg-ink p-6 sm:grid-cols-2 lg:grid-cols-4">
        {toolchain.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-subtle">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <li key={tool} className="rounded-md bg-surface px-2.5 py-1 text-sm font-medium text-muted ring-1 ring-line">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default DevOps;
