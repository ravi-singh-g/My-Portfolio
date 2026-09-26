import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { resume } from '../data/resume'

const NAV_LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    NAV_LINKS.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
    }
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'nav-solid' : ''}`}>
      <motion.div className="nav-progress" style={{ scaleX }} />
      <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="nav-logo-badge">R</span>
        <span className="nav-logo-text">
          ravi<span className="neon">.dev</span>
        </span>
      </a>

      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {NAV_LINKS.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'nav-link active' : 'nav-link'}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        {resume.links.resume && (
          <a
            href={resume.links.resume}
            download
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Resume ↓
          </a>
        )}
      </nav>

      <button
        className={`nav-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
