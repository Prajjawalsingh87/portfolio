import MiniSearch from "minisearch";
import {
  articles,
  contactProfiles,
  devopsWork,
  experience,
  experienceStack,
  facts,
  impact,
  miniApps,
  projects,
  ratings,
  skillGroups,
  slug,
  toolchain,
} from "../../data/content";
import { profile } from "../../data/profile";

// Every section on the page, with the text a visitor sees in its heading.
const sections = [
  { id: "home", title: "Home", text: `${profile.name}, ${profile.role} in ${profile.location}. I build fast APIs and real-time data pipelines.` },
  { id: "about", title: "About me", text: "I like backend problems that have to work at scale. Education, role, core stack and competitive programming." },
  { id: "experience", title: "Experience", text: `What I've shipped at work. ${profile.role} at ${profile.company}, Jul 2025 – Present.` },
  { id: "skills", title: "Skills", text: "Tools I use every day: languages, frameworks, databases, streaming, cloud and DevOps." },
  { id: "projects", title: "Projects", text: "Things I've built, with live demos and GitHub source code." },
  { id: "devops", title: "DevOps & Cloud", text: "I ship and run what I build. Containers, clusters, pipelines and dashboards." },
  { id: "writing", title: "Writing", text: "I write about how systems really work. Articles on Medium." },
  { id: "contact", title: "Contact", text: `Let's build something reliable together. Email ${profile.email} or download the resume.` },
];

function buildDocuments() {
  const docs = [];
  const add = (doc) => docs.push({ ...doc, id: `${doc.kind}:${docs.length}`, tags: doc.tags ?? "" });

  sections.forEach((s) =>
    add({ kind: "Section", title: s.title, text: s.text, section: s.id, target: s.id }),
  );

  facts.forEach((f) =>
    add({ kind: "About", title: f.label, text: f.value, section: "about", target: "about" }),
  );
  ratings.forEach((r) =>
    add({
      kind: "About",
      title: `${r.site} rating ${r.rating}`,
      text: `${r.badge}. Competitive programming profile.`,
      section: "about",
      target: "about",
      url: r.href,
    }),
  );

  add({
    kind: "Experience",
    title: `${profile.role} at ${profile.company}`,
    text: "Jul 2025 – Present · Delhi, India · Full-time",
    tags: experienceStack.join(" "),
    section: "experience",
    target: "experience",
  });
  impact.forEach((i) =>
    add({ kind: "Experience", title: `${i.value} ${i.label}`, text: "", section: "experience", target: "experience" }),
  );
  experience.forEach((e) =>
    add({ kind: "Experience", title: e.title, text: e.text, section: "experience", target: `exp-${slug(e.title)}` }),
  );

  skillGroups.forEach((g) =>
    add({ kind: "Skills", title: g.title, text: g.items.join(" · "), tags: g.items.join(" "), section: "skills", target: `skill-${slug(g.title)}` }),
  );

  projects.forEach((p) =>
    add({
      kind: "Project",
      title: p.title,
      text: p.description,
      tags: p.tags.join(" "),
      links: [p.live, p.repo].filter(Boolean).join(" "),
      section: "projects",
      target: `project-${slug(p.title)}`,
      url: p.live ?? p.repo,
    }),
  );
  miniApps.forEach((a) =>
    add({
      kind: "Project",
      title: a.title,
      text: "Small build",
      links: [a.live, a.repo].filter(Boolean).join(" "),
      section: "projects",
      target: `project-${slug(a.title)}`,
      url: a.live ?? a.repo,
    }),
  );

  devopsWork.forEach((d) =>
    add({
      kind: "DevOps",
      title: d.title,
      text: d.description,
      tags: d.tags.join(" "),
      links: d.href ?? "",
      section: "devops",
      target: `devops-${slug(d.title)}`,
      url: d.href,
    }),
  );
  toolchain.forEach((t) =>
    add({ kind: "DevOps", title: `${t.title} toolchain`, text: t.items.join(" · "), tags: t.items.join(" "), section: "devops", target: `tools-${slug(t.title)}` }),
  );

  articles.forEach((a) =>
    add({
      kind: "Article",
      title: a.title,
      text: `${a.date} · Medium`,
      section: "writing",
      target: `article-${slug(a.title)}`,
      url: a.href,
    }),
  );

  add({ kind: "Contact", title: "Email", text: profile.email, section: "contact", target: "contact" });
  add({ kind: "Contact", title: "Resume (PDF)", text: "Download my resume", section: "contact", target: "contact" });
  contactProfiles.forEach((c) =>
    add({ kind: "Contact", title: c.label, text: c.handle, links: c.href, section: "contact", target: "contact", url: c.href }),
  );

  return docs;
}

export const sectionDocs = sections;

export function createSearch() {
  const index = new MiniSearch({
    fields: ["title", "text", "tags", "links", "kind"],
    storeFields: ["kind", "title", "text", "section", "target", "url"],
    searchOptions: {
      boost: { title: 3, tags: 2, kind: 1.5 },
      prefix: true,
      fuzzy: 0.2,
    },
  });
  index.addAll(buildDocuments());

  // Prefer results that match every word; fall back to any word.
  return (query) => {
    const all = index.search(query, { combineWith: "AND" });
    return (all.length ? all : index.search(query, { combineWith: "OR" })).slice(0, 12);
  };
}
