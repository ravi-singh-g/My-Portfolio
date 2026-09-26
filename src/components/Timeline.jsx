import { motion } from 'framer-motion'
import { resume } from '../data/resume'
import { SectionHead } from './About'

export default function Timeline() {
  return (
    <section className="section" id="experience">
      <SectionHead kicker="04 · journey" title="Experience & Education" />

      <div className="timeline">
        {resume.experience.map((item, i) => (
          <motion.div
            key={`${item.role}-${item.period}`}
            className="tl-item"
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="tl-dot" />
            <div className="card tl-card">
              <div className="tl-head">
                <span className={`tl-badge ${item.type === 'Education' ? 'edu' : 'int'}`}>{item.type}</span>
                <span className="tl-period">{item.period}</span>
              </div>
              <h3 className="tl-role">{item.role}</h3>
              <p className="tl-org">{item.org}</p>
              <ul className="tl-points">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
