import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Calendar, FileDown, FileText, Mail, MapPin, Phone, Send, Users, Award, Rocket, Shield, Lightbulb } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About IIC', href: '#about' },
    { label: 'Activities', href: '#activities' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Resources', href: '#resources' },
    { label: 'Members', href: '#members' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900">IIC Portal</a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 hover:text-blue-600 transition-colors">{n.label}</a>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-blue-600">{n.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Fostering Innovation & Entrepreneurship Spirit on Campus</h1>
            <p className="mt-4 text-slate-700">Join our vibrant community of innovators, creators, and founders. Explore activities, resources, and mentorship opportunities.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#members" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Users className="h-5 w-5" /> Join IIC
              </a>
              <a href="#submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                <Lightbulb className="h-5 w-5" /> Submit Idea
              </a>
              <a href="#activities" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors">
                <Calendar className="h-5 w-5" /> Upcoming Event
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About IIC" subtitle="Vision & Mission">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-slate-700">
          <p>
            The Institution’s Innovation Council (IIC) was established under the Ministry of Education’s Innovation Cell (MIC) to build an ecosystem that inspires students and faculty to think innovatively and embrace entrepreneurship.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-white">
              <Rocket className="h-6 w-6 text-blue-600" />
              <p className="mt-2 font-semibold">Innovation Culture</p>
            </div>
            <div className="p-4 rounded-xl border bg-white">
              <Shield className="h-6 w-6 text-blue-600" />
              <p className="mt-2 font-semibold">Pre-incubation Support</p>
            </div>
            <div className="p-4 rounded-xl border bg-white">
              <Award className="h-6 w-6 text-blue-600" />
              <p className="mt-2 font-semibold">Entrepreneurship</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-4">
            <h3 className="font-semibold text-slate-900">Establishment</h3>
            <div className="mt-2 text-slate-700 text-sm">
              <p>Date of Establishment: 01-08-2020</p>
              <p>MIC Registration: MIC-REG-123456</p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <h3 className="font-semibold text-slate-900">Objectives</h3>
            <ul className="mt-2 text-slate-700 list-disc pl-5 text-sm space-y-1">
              <li>Foster innovation culture among students.</li>
              <li>Encourage entrepreneurship to serve the society and nation.</li>
              <li>Support pre-incubation.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Members() {
  const [members, setMembers] = useState(null)
  const [loading, setLoading] = useState(false)
  const load = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE}/members`)
      const data = await res.json()
      setMembers(data)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Section id="members" title="IIC Members" subtitle="Core committee and student coordinators">
      <div className="flex justify-end mb-4">
        <button onClick={load} className="px-3 py-2 text-sm rounded-lg border bg-white hover:bg-slate-50">Load Members</button>
      </div>
      {loading && <p className="text-slate-500">Loading...</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(members || []).map((m, idx) => (
          <div key={idx} className="rounded-xl border bg-white p-4">
            <div className="h-24 w-24 rounded-full bg-slate-100 mx-auto" style={{backgroundImage: m.photo_url ? `url(${m.photo_url})` : 'none', backgroundSize:'cover', backgroundPosition:'center'}} />
            <div className="mt-3 text-center">
              <p className="font-semibold text-slate-900">{m.name}</p>
              <p className="text-sm text-blue-700">{m.role}</p>
              {(m.email || m.phone) && (
                <p className="text-xs text-slate-500 mt-1">{m.email || ''} {m.phone ? `• ${m.phone}` : ''}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {!members && <p className="text-slate-500 mt-4">Click "Load Members" to view the committee.</p>}
    </Section>
  )
}

function Activities() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({ year: '', category: '' })
  const load = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (filters.year) params.append('year', filters.year)
      if (filters.category) params.append('category', filters.category)
      const res = await fetch(`${API_BASE}/activities?${params.toString()}`)
      const data = await res.json()
      setList(data)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Section id="activities" title="Activities" subtitle="Planned and archived events">
      <div className="flex flex-wrap gap-3 items-end">
        <div>
          <label className="block text-sm text-slate-600">Year</label>
          <input value={filters.year} onChange={e=>setFilters(v=>({...v, year:e.target.value}))} placeholder="2025" className="mt-1 px-3 py-2 rounded-lg border w-32" />
        </div>
        <div>
          <label className="block text-sm text-slate-600">Category</label>
          <select value={filters.category} onChange={e=>setFilters(v=>({...v, category:e.target.value}))} className="mt-1 px-3 py-2 rounded-lg border w-48">
            <option value="">All</option>
            <option>MIC Driven</option>
            <option>Self-Driven</option>
            <option>Celebration</option>
          </select>
        </div>
        <button onClick={load} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Load</button>
      </div>
      {loading && <p className="text-slate-500 mt-4">Loading...</p>}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {list.map((ev, idx) => (
          <div key={idx} className="rounded-xl border bg-white p-5">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">{ev.title}</h4>
              <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">{ev.category}</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">{ev.date} {ev.semester ? `• ${ev.semester}` : ''} {ev.year ? `• ${ev.year}` : ''}</p>
            {ev.description && <p className="text-sm text-slate-700 mt-2">{ev.description}</p>}
            <div className="mt-3 flex gap-3 text-sm">
              {ev.report_url && <a className="inline-flex items-center gap-1 text-blue-700 hover:underline" href={ev.report_url} target="_blank" rel="noreferrer"><FileText className="h-4 w-4"/> Report</a>}
              {Array.isArray(ev.photos) && ev.photos.length > 0 && <span className="inline-flex items-center gap-1 text-slate-600"><FileDown className="h-4 w-4"/> Photos</span>}
              {ev.attendance_count && <span className="text-slate-600">Attendance: {ev.attendance_count}</span>}
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && !loading && <p className="text-slate-500 mt-4">No events found. Adjust filters and try again.</p>}
    </Section>
  )
}

function Achievements() {
  const [list, setList] = useState([])
  const [type, setType] = useState('')
  const load = async () => {
    const params = new URLSearchParams()
    if (type) params.append('type', type)
    const res = await fetch(`${API_BASE}/achievements?${params.toString()}`)
    const data = await res.json()
    setList(data)
  }
  return (
    <Section id="achievements" title="Achievements" subtitle="Student startups, patents, awards, hackathons">
      <div className="flex gap-3 items-end">
        <div>
          <label className="block text-sm text-slate-600">Type</label>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="mt-1 px-3 py-2 rounded-lg border w-56">
            <option value="">All</option>
            <option>Startup</option>
            <option>Patent</option>
            <option>Award</option>
            <option>Hackathon</option>
          </select>
        </div>
        <button onClick={load} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Load</button>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((it, idx) => (
          <div key={idx} className="rounded-xl border bg-white p-5">
            {it.logo_url && <img src={it.logo_url} alt="logo" className="h-10 object-contain"/>}
            <p className="mt-2 text-xs text-blue-700 font-medium">{it.type}</p>
            <h4 className="font-semibold text-slate-900">{it.title}</h4>
            <p className="text-sm text-slate-600">{it.person}</p>
            {it.description && <p className="text-sm text-slate-700 mt-2">{it.description}</p>}
            <p className="text-xs text-slate-500 mt-1">{it.date}</p>
          </div>
        ))}
      </div>
      {list.length === 0 && <p className="text-slate-500 mt-4">Click Load to view achievements.</p>}
    </Section>
  )
}

function Gallery() {
  const [items, setItems] = useState([])
  const [year, setYear] = useState('')
  const load = async () => {
    const params = new URLSearchParams()
    if (year) params.append('year', year)
    const res = await fetch(`${API_BASE}/gallery?${params.toString()}`)
    const data = await res.json()
    setItems(data)
  }
  return (
    <Section id="gallery" title="Gallery" subtitle="Event photos & videos">
      <div className="flex gap-3 items-end">
        <div>
          <label className="block text-sm text-slate-600">Year</label>
          <input value={year} onChange={e=>setYear(e.target.value)} placeholder="2025" className="mt-1 px-3 py-2 rounded-lg border w-32" />
        </div>
        <button onClick={load} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Load</button>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((g, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden border bg-white">
            {g.media_type === 'video' ? (
              <video controls src={g.media_url} className="w-full aspect-video object-cover"/>
            ) : (
              <img src={g.media_url} alt={g.title} className="w-full aspect-video object-cover"/>
            )}
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/60 to-transparent text-white text-sm">{g.title}</div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-slate-500 mt-4">Click Load to view gallery.</p>}
    </Section>
  )
}

function Resources() {
  const [items, setItems] = useState([])
  const load = async () => {
    const res = await fetch(`${API_BASE}/resources`)
    const data = await res.json()
    setItems(data)
  }
  return (
    <Section id="resources" title="Resources" subtitle="Handbooks, policies, circulars & templates">
      <button onClick={load} className="px-4 py-2 rounded-lg bg-blue-600 text-white">Load</button>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r, idx) => (
          <a key={idx} href={r.file_url || '#'} target={r.file_url ? '_blank' : undefined} rel="noreferrer" className="rounded-xl border bg-white p-4 hover:shadow">
            <p className="text-xs text-blue-700 font-medium">{r.category}</p>
            <p className="font-semibold text-slate-900">{r.title}</p>
          </a>
        ))}
      </div>
      {items.length === 0 && <p className="text-slate-500 mt-4">Click Load to view resources.</p>}
    </Section>
  )
}

function SubmitIdea() {
  const [form, setForm] = useState({ title:'', description:'', team_members:'', mentor:'', file_url:'' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${API_BASE}/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, status: 'Submitted' })
      })
      const data = await res.json()
      setStatus(`Submitted. Reference ID: ${data.id}`)
      setForm({ title:'', description:'', team_members:'', mentor:'', file_url:'' })
    } catch (e) {
      setStatus('Submission failed. Try again.')
    }
  }
  return (
    <Section id="submit" title="Submit Your Idea" subtitle="Share your innovation with IIC">
      <form onSubmit={submit} className="grid gap-4 bg-white border rounded-2xl p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600">Title of Idea</label>
            <input value={form.title} onChange={e=>setForm(v=>({...v, title:e.target.value}))} required className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">Team Members</label>
            <input value={form.team_members} onChange={e=>setForm(v=>({...v, team_members:e.target.value}))} required className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-600">Brief Description</label>
          <textarea value={form.description} onChange={e=>setForm(v=>({...v, description:e.target.value}))} required rows={4} className="mt-1 px-3 py-2 rounded-lg border w-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600">Mentor (optional)</label>
            <input value={form.mentor} onChange={e=>setForm(v=>({...v, mentor:e.target.value}))} className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">File URL (PDF/Doc)</label>
            <input value={form.file_url} onChange={e=>setForm(v=>({...v, file_url:e.target.value}))} placeholder="https://..." className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
        </div>
        <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white"><Send className="h-5 w-5"/> Submit</button>
        {status && <p className="text-sm text-slate-600">{status}</p>}
      </form>
    </Section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      await res.json()
      setStatus('Thank you! We will get back to you soon.')
      setForm({ name:'', email:'', phone:'', message:'' })
    } catch (e) {
      setStatus('Failed to send. Try again later.')
    }
  }
  return (
    <Section id="contact" title="Contact" subtitle="Reach out to the IIC Faculty Coordinator">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-6">
            <h4 className="font-semibold text-slate-900">Faculty Coordinator</h4>
            <p className="text-slate-700 mt-1">Dr. Vineet Kumar Singh</p>
            <div className="mt-3 space-y-2 text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600"/> iic@example.edu</p>
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-600"/> +91 98765 43210</p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-600"/> Institute Address, City, State</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <iframe title="map" className="w-full h-64" src="https://www.google.com/maps?q=India&output=embed" loading="lazy"></iframe>
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 bg-white border rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Name</label>
              <input value={form.name} onChange={e=>setForm(v=>({...v, name:e.target.value}))} required className="mt-1 px-3 py-2 rounded-lg border w-full" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm(v=>({...v, email:e.target.value}))} required className="mt-1 px-3 py-2 rounded-lg border w-full" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600">Phone</label>
            <input value={form.phone} onChange={e=>setForm(v=>({...v, phone:e.target.value}))} className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">Message</label>
            <textarea rows={4} value={form.message} onChange={e=>setForm(v=>({...v, message:e.target.value}))} required className="mt-1 px-3 py-2 rounded-lg border w-full" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white"><Send className="h-5 w-5"/> Send</button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
        © {new Date().getFullYear()} Institution’s Innovation Council. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Members />
      <Activities />
      <Achievements />
      <Gallery />
      <Resources />
      <SubmitIdea />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
