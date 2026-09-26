import { resume } from '../data/resume'

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {resume.name}
      </span>
      <span className="footer-tech">Built with React · Three.js (R3F) · Framer Motion</span>
    </footer>
  )
}
