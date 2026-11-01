import { usePrefs } from '../prefs.jsx'

function Entry({ item }) {
  return (
    <li className="entry">
      <p className="entry-date">{item.date}</p>
      <div className="entry-body">
        <h4>{item.role}</h4>
        <p className="entry-org">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.org}
            </a>
          ) : (
            item.org
          )}
          , {item.place}
        </p>
        {item.note && <p>{item.note}</p>}
        {item.points && (
          <ul>
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Experience() {
  const { t } = usePrefs()
  const e = t.experience
  return (
    <section className="sheet" id="experience" aria-labelledby="experience-title">
      <div className="sheet-head">
        <h2 id="experience-title">{e.title}</h2>
      </div>
      <div className="two-col">
        <div className="panel tone-paper">
          <h3>{e.workTitle}</h3>
          <ol className="timeline">
            {e.work.map((item) => (
              <Entry key={item.org} item={item} />
            ))}
          </ol>
        </div>
        <div className="panel tone-paper">
          <h3>{e.eduTitle}</h3>
          <ol className="timeline">
            {e.education.map((item) => (
              <Entry key={item.org} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
