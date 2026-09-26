import { motion } from 'framer-motion'
import { resume } from '../data/resume'
import { avatar } from '../data/avatar'

export function SectionHead({ kicker, title, id }) {
  return (
    <div className="sec-head" id={id}>
      <motion.p
        className="sec-kicker"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        // {kicker}
      </motion.p>
      <motion.h2
        className="sec-title"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {title}
      </motion.h2>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead kicker="01 · whoami" title="About Me" />

      <div className="about-grid">
        <motion.div
          className="about-avatar card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={avatar}
            alt="3D avatar of Ravi Raushan Singh"
            className="about-avatar-img"
          />
          <span className="about-avatar-name gradient-text">
            {resume.firstName} {resume.lastName}
          </span>
          <span className="about-avatar-role">B.Tech CSE @ BIT Mesra</span>
        </motion.div>
        <motion.p
          className="about-text card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {resume.about}
        </motion.p>

        <div className="about-stats">
          {resume.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="stat-value gradient-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="achievements">
        {resume.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className="achievement card"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="ach-icon">◆</span>
            <div>
              <strong>{a.title}</strong>
              <p>{a.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
