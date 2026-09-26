// ============================================================
//  SINGLE SOURCE OF TRUTH — edit links & content here only.
// ============================================================

export const resume = {
  name: 'Ravi Raushan Singh',
  firstName: 'Ravi',
  lastName: 'Raushan Singh',
  role: 'Backend Developer · Full-Stack · AI',
  location: 'Jamshedpur, Jharkhand, India',
  email: 'ravirausingh12@gmail.com',
  phone: '+91 9801452053',
  availability: 'Open to internships & full-time roles',

  links: {
    // >>> All links below are verified & live <<<
    github: 'https://github.com/ravi-singh-g', // ✓ your real profile
    linkedin: 'https://www.linkedin.com/in/ravi-raushan-singh-profile/', // ✓ provided by you
    resume: '', // TODO: add your resume link here (Google Drive link or /resume.pdf in public/) — button hides until set
  },

  hero: {
    kicker: 'B.Tech CSE @ BIT Mesra (2024 – 2027)',
    sub: 'Building secure, scalable REST APIs, JWT auth systems and LLM-powered tools — from hackathon platforms to enterprise RAG assistants.',
  },

  about:
    'I am a Computer Science undergraduate at BIT Mesra with hands-on project experience across three areas: backend, authentication and team-management work on HackFlow, a team-built hackathon management platform; an LLM-based RAG knowledge assistant (TataBot) built during a Tata Steel internship; and a six-dashboard Tableau sales analysis (Superstore India) built during a TSUISL internship. I focus on clean API design, robust authentication and practical, production-minded engineering.',

  stats: [
    { value: '7.60', label: 'CGPA / 10' },
    { value: '2×', label: 'Tata Steel Internships' },
    { value: '100+', label: 'LeetCode DSA Problems' },
    { value: '6', label: 'Tableau Dashboards' },
  ],

  skills: [
    { group: 'Languages', items: ['Python', 'JavaScript', 'C++', 'SQL', 'Java'] },
    {
      group: 'Web Development',
      items: ['HTML5', 'CSS3', 'Node.js', 'Express.js', 'Flask', 'REST APIs'],
    },
    { group: 'Databases', items: ['MongoDB', 'Mongoose', 'MySQL'] },
    { group: 'AI / ML', items: ['RAG', 'LLMs', 'Llama 3.3 70B', 'Groq API'] },
    {
      group: 'Auth & Security',
      items: [
        'JWT',
        'Access & Refresh Tokens',
        'RBAC',
        'Auth Middleware',
        'bcrypt',
        'HttpOnly Cookies',
        'Protected API Routes',
      ],
    },
    { group: 'Data Analytics', items: ['Tableau', 'Excel', 'Data Visualization'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman'] },
    {
      group: 'CS Fundamentals',
      items: ['OOP', 'DSA', 'DBMS', 'OS', 'Computer Networks', 'Computer Architecture'],
    },
  ],

  projects: [
    {
      name: 'HackFlow',
      kind: 'Group Project · Backend',
      accent: '#00e5ff',
      blurb:
        'A team-built hackathon management platform — my primary responsibility was the backend: JWT-based authentication & authorization, role-based access control, REST APIs, and team-management functionality.',
      highlights: [
        'JWT auth — short-lived access tokens + refresh-token renewal stored in HttpOnly cookies',
        'Role-based access control across 4 roles: Participant, Judge, Admin, Team Captain',
        '20+ REST endpoints (routes → controllers → models) + complete team-management APIs',
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
      links: {
        github: 'https://github.com/ravi-singh-g/HackFlow',
        demo: 'https://hack-flow-rust.vercel.app/', // ✓ verified from your repo's README badge
      },
    },
    {
      name: 'TataBot',
      kind: 'AI · RAG',
      accent: '#a855f7',
      blurb:
        'An LLM-based knowledge assistant for employee learning & development, built during my Tata Steel internship — answers grounded in internal documentation.',
      highlights: [
        'RAG pipeline over 3 domain knowledge bases (SOPs, safety, troubleshooting guides)',
        'Groq API + Llama 3.3 inside a Flask web app',
        'Role-based responses for 3 user personas — answers in under 5 seconds',
      ],
      tech: ['Python', 'Flask', 'RAG', 'Groq API', 'Llama 3.3'],
      links: {
        github: 'https://github.com/ravi-singh-g/TataBot-AI-Knowledge-Assistant',
        demo: '',
      },
    },
    {
      name: 'Superstore India',
      kind: 'Data Analytics',
      accent: '#34d399',
      blurb:
        'End-to-end sales analytics of the public Superstore India dataset — from raw data cleaning to stakeholder-ready interactive dashboards.',
      highlights: [
        'Cleaned a ~10,000-row dataset with Excel & SQL (duplicates, missing values, date/category formats)',
        '6 interactive dashboards: segments, manager-wise P&L, returns, trends, seasonality, shipping',
      ],
      tech: ['Tableau', 'Excel', 'SQL'],
      links: {
        github: 'https://github.com/ravi-singh-g/Superstore-India-Sales-Analysis',
        demo: '',
      },
    },
  ],

  experience: [
    {
      type: 'Internship',
      role: 'AI Intern — L&D Innovation',
      org: 'Tata Steel',
      period: 'May 2026 – Jul 2026',
      points: [
        'Developed TataBot, a Python/Flask AI knowledge assistant using RAG and LLM APIs, grounded in 3 knowledge bases to answer employee training queries.',
        'Designed role-based response personalization for 3 user groups, delivering answers in under 5 seconds.',
      ],
    },
    {
      type: 'Internship',
      role: 'Data Analytics Intern',
      org: 'TSUISL — Tata Steel Utilities & Infrastructure Services Ltd.',
      period: 'May 2025 – Jul 2025',
      points: [
        'Prepared analysis-ready data with Excel and SQL and built 6 interactive Tableau dashboards tracking sales, profitability and shipping KPIs.',
        'Surfaced customer-segment and shipping-efficiency trends for stakeholders.',
      ],
    },
    {
      type: 'Education',
      role: 'B.Tech in Computer Science & Engineering',
      org: 'Birla Institute of Technology, Mesra — Deoghar Campus',
      period: '2024 – 2027',
      points: ['CGPA: 7.60 / 10'],
    },
    {
      type: 'Education',
      role: 'Diploma in Computer Science Engineering',
      org: 'University Polytechnic, BIT Mesra',
      period: '2022 – 2024',
      points: ['CGPA: 8.35 / 10'],
    },
  ],

  achievements: [
    { title: 'LeetCode', sub: '100+ DSA problems solved' },
    { title: 'CodeWithHarry · 2026', sub: 'Ultimate Job-Ready AI-Powered Data Analytics Course' },
    { title: 'Certifications', sub: 'Python · SQL · Tableau & more' },
  ],
}
