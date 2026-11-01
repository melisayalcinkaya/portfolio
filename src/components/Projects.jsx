import { projectArt } from '../illustrations/index.jsx'
import { usePrefs } from '../prefs.jsx'
import { IconExternal, IconGitHub, IconLock } from './icons.jsx'

function ExtLink({ href, children, variant = 'btn-paper' }) {
  return (
    <a className={`btn btn-sm ${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function ProjectCard({ item, labels, featured }) {
  const Art = projectArt[item.key]
  const { demo, code, site, desktop } = item.links
  return (
    <article className={`project tone-${item.tone}${featured ? ' is-featured' : ''}`} aria-labelledby={`p-${item.key}`}>
      <div className="project-art">
        <Art />
      </div>
      <div className="project-body">
        <h3 id={`p-${item.key}`}>{item.title}</h3>
        <p className="project-summary">{item.summary}</p>
        <ul className="project-points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="project-tech">
          <span className="visually-hidden">{labels.tech}: </span>
          {item.tech.map((name) => (
            <span key={name} className="tech">
              {name}
            </span>
          ))}
        </p>
        {item.extra && (
          <div className="project-extra">
            <h4>{item.extra.title}</h4>
            <p>{item.extra.text}</p>
          </div>
        )}
        <div className="project-links">
          {demo && (
            <ExtLink href={demo} variant="btn-ink">
              {labels.demo}
              <IconExternal />
            </ExtLink>
          )}
          {site && (
            <ExtLink href={site} variant="btn-ink">
              {labels.site}
              <IconExternal />
            </ExtLink>
          )}
          {code && (
            <ExtLink href={code}>
              <IconGitHub />
              {labels.code}
            </ExtLink>
          )}
          {desktop && (
            <ExtLink href={desktop}>
              <IconGitHub />
              {item.extra.label}
            </ExtLink>
          )}
          {item.privateNote && (
            <span className="private-note">
              <IconLock />
              {item.privateNote}
            </span>
          )}
        </div>
        {item.demoNote && <p className="demo-note">{item.demoNote}</p>}
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = usePrefs()
  const p = t.projects
  const [featured, ...rest] = p.items
  return (
    <section className="sheet" id="projects" aria-labelledby="projects-title">
      <div className="sheet-head">
        <h2 id="projects-title">{p.title}</h2>
        <p>{p.intro}</p>
      </div>
      <ProjectCard item={featured} labels={p} featured />
      <div className="project-grid">
        {rest.map((item) => (
          <ProjectCard key={item.key} item={item} labels={p} />
        ))}
      </div>
    </section>
  )
}
