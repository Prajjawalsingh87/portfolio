import { ArrowUpRightIcon, GitHubIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const work = [
  {
    title: "Kubernetes Production Lab",
    description:
      "FastAPI + PostgreSQL + nginx running on a self-managed kubeadm cluster on EC2: Kustomize overlays, Ingress, probes, non-root containers, images in ECR, and CI that validates manifests and builds images.",
    tags: ["Kubernetes", "Kustomize", "Docker", "AWS EC2", "ECR", "GitHub Actions"],
    href: "https://github.com/Prajjawalsingh87/kubernetes-lab",
  },
  {
    title: "DevOps Roadmap",
    description:
      "My structured journey through DevOps and cloud, learning in public: AWS IAM and NGINX guides, with phases for Linux, networking, containers, Kubernetes, CI/CD and observability.",
    tags: ["AWS IAM", "NGINX", "Linux", "CI/CD"],
    href: "https://github.com/Prajjawalsingh87/devops-roadmap",
  },
  {
    title: "In production at TailNode",
    description:
      "Docker images deployed to Kubernetes with Helm charts and Ingress behind a load balancer (99.9% uptime SLA), Nginx reverse proxying, and a CDN layer that cut asset delivery costs by 90%.",
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
      title="Shipping and running what I build."
      intro="Beyond writing services, I containerize, deploy and observe them, at work and in my own labs."
      className="bg-surface/40"
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {work.map((item) => (
          <li key={item.title}>
            <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6">
              <h3 className="text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
                    {tag}
                  </li>
                ))}
              </ul>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-fg transition-colors hover:text-accent"
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

      <div className="mt-5 grid gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4">
        {toolchain.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <li key={tool} className="rounded-md border border-line bg-raised px-2.5 py-1 text-sm text-muted">
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
