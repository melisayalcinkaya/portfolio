import { PaperArt } from '../illustrations/index.jsx'
import { usePrefs } from '../prefs.jsx'
import { IconExternal } from './icons.jsx'

export default function Skills() {
  const { t } = usePrefs()
  const s = t.skills
  const pub = t.publication
  return (
    <section className="sheet" id="skills" aria-labelledby="skills-title">
      <div className="two-col skills-layout">
        <div>
          <h2 id="skills-title">{s.title}</h2>
          <dl className="skill-groups">
            {s.groups.map((g) => (
              <div key={g.name} className="skill-group">
                <dt>{g.name}</dt>
                <dd>
                  <ul className="chips">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2>{s.certTitle}</h2>
          <p className="cert-issuer">{s.certIssuer}</p>
          <dl className="cert-groups">
            {s.certs.map((c) => (
              <div key={c.name}>
                <dt>{c.name}</dt>
                {c.items.map((item) => (
                  <dd key={item}>{item}</dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="publication tone-lavender" aria-labelledby="pub-title">
        <h2 className="publication-heading">{pub.title}</h2>
        <article className="pub-card">
          <p className="kind-chip">{pub.kind}</p>
          <h3 id="pub-title">{pub.name}</h3>
          {pub.originalName && (
            <p className="pub-original" lang="tr">
              {pub.originalName}
            </p>
          )}
          <p className="pub-meta">
            {pub.authors} <time>{pub.date}</time>
          </p>
          <ul>
            {pub.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a className="text-link" href={pub.link} target="_blank" rel="noreferrer">
            {pub.linkLabel}
            <IconExternal />
          </a>
        </article>
        <div className="pub-art">
          <PaperArt />
        </div>
      </div>
    </section>
  )
}
