import { motion } from 'framer-motion'
import { resume } from '../data/resume'
import { SectionHead } from './About'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead kicker="02 · stack" title="Technical Skills" />

      <div className="skills-grid">
        {resume.skills.map((cat, i) => (
          <motion.div
            key={cat.group}
            className="skill-card card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: (i % 4) * 0.07 }}
          >
            <h3 className="skill-group">{cat.group}</h3>
            <div className="chips">
              {cat.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
