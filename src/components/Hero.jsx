import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import { resume } from '../data/resume'
import { avatar } from '../data/avatar'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-canvas">
        <Scene3D />
      </div>

      <div className="hero-avatar" aria-hidden="true">
        <img src={avatar} alt="" />
        <span className="hero-avatar-label">Ravi Raushan Singh · BIT Mesra</span>
      </div>

      <div className="hero-content">
        <motion.div {...fadeUp(0.1)} className="hero-kicker">
          <span className="pulse-dot" />
          {resume.availability}
        </motion.div>

        <motion.h1 {...fadeUp(0.25)} className="hero-title">
          <span className="hero-first">{resume.firstName}</span>{' '}
          <span className="hero-last gradient-text">{resume.lastName}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.4)} className="hero-role">
          {resume.role}
        </motion.p>

        <motion.p {...fadeUp(0.5)} className="hero-sub">
          <span className="hero-kicker-inline">{resume.hero.kicker}</span>
          <br />
          {resume.hero.sub}
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.8)} className="hero-socials">
          <a href={resume.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href={resume.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a href={`mailto:${resume.email}`} aria-label="Email">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
              <path d="M3 6.5l9 6 9-6" />
            </svg>
          </a>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about">
        <span className="mouse">
          <span className="wheel" />
        </span>
      </a>
    </section>
  )
}
