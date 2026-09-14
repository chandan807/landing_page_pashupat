import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './assets/pashupat-logo.svg'
import './styles.css'

const capabilities = [
  ['Custom healthcare software development', 'Web, backend and connected product delivery'],
  ['API integration', 'Secure data exchange and service integration'],
  ['System integration', 'Connect existing systems and operational workflows'],
  ['Business & workflow automation', 'Reduce manual work across operational processes'],
  ['Healthcare IoT development', 'Connected devices, monitoring and data workflows'],
  ['Technology implementation support', 'Technical delivery support from discovery to rollout'],
]

const faqs = [
  ['Can you work as an offshore delivery partner?', 'Yes. The engagement can be structured around technical discovery, delivery ownership and integration support while keeping scope, responsibilities and approvals clear.'],
  ['Can you integrate with an existing healthcare system?', 'Existing systems can be assessed during discovery to confirm interfaces, APIs, data constraints, security requirements and delivery feasibility before implementation.'],
  ['How do you handle privacy, security and intellectual property?', 'Privacy, security, data handling and IP requirements should be confirmed as part of discovery and reflected in the approved engagement and delivery controls.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [toast, setToast] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const serviceOptions = useMemo(() => capabilities.map(([name]) => name), [])

  const goToContact = (service = '') => {
    if (service) setSelectedService(service)
    setMenuOpen(false)
    requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setToast('Thanks — your enquiry is ready for backend/CRM connection.')
    form.reset()
    setSelectedService('')
    window.setTimeout(() => setToast(''), 3400)
  }

  return (
    <>
      <nav className="nav">
        <div className="wrap navin">
          <a href="#top" className="brand" aria-label="Pashupat Solutions home"><img className="logo" src={logo} alt="Pashupat Solutions" /></a>
          <div className="links"><a href="#services">Services</a><a href="#process">Process</a><a href="#usecases">Use cases</a><a href="#faq">FAQ</a><button className="btn primary" onClick={() => goToContact()}>Discuss your requirement <span>↗</span></button></div>
          <button className="btn ghost menu" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen}>{menuOpen ? 'Close' : 'Menu'}</button>
          <div className={`mobilelinks ${menuOpen ? 'open' : ''}`}>{['services','process','usecases','faq'].map(id => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{id === 'usecases' ? 'Use cases' : id[0].toUpperCase()+id.slice(1)}</a>)}<button className="btn primary" onClick={() => goToContact()}>Discuss your requirement</button></div>
        </div>
      </nav>

      <main id="top">
        <header className="hero"><div className="wrap hero-grid"><div><div className="eyebrow"><span className="dot" /> For healthcare consultants, technology partners & healthcare organisations</div><h1>Healthcare Software Delivery Partner <span className="grad">For Africa</span></h1><p className="lead">Offshore technology delivery for South African healthcare software integration, automation, IoT and implementation requirements — built around structured technical discovery and accountable delivery.</p><div className="cta"><button className="btn primary big" onClick={() => goToContact()}>Discuss Your Healthcare Requirement <span>→</span></button><button className="btn ghost big" onClick={() => goToContact()}>Share A Project Brief</button></div><div className="trustrow"><span>● B2B project enquiries only</span><span>India · UAE · USA delivery context</span></div></div><div className="panel"><div className="status"><div><span className="panel-label">DELIVERY READINESS</span><h3>Technical discovery snapshot</h3></div><span className="pill">Active</span></div><div className="metric"><b>6 delivery capabilities</b><small>Software · Integration · Automation · IoT · Implementation</small></div><div className="bars"><div className="barrow"><span>Integration</span><div className="bar"><div className="fill" style={{width:'94%'}} /></div><b>94</b></div><div className="barrow"><span>Automation</span><div className="bar"><div className="fill" style={{width:'87%'}} /></div><b>87</b></div><div className="barrow"><span>IoT readiness</span><div className="bar"><div className="fill" style={{width:'81%'}} /></div><b>81</b></div></div><div className="dashnote"><span>01</span><p>Start with scope, systems, risks and success criteria — not unsupported promises.</p></div></div></div></header>

        <section><div className="wrap"><div className="section-head"><div><span className="kicker">WHO WE SUPPORT</span><h2>Designed for teams that already know the healthcare outcome they need.</h2></div><p>We support business-to-business healthcare technology delivery where the commercial requirement is clear and the right technical execution capacity is needed.</p></div><div className="cards">{[['◎','Healthcare consultants','For consultants who need a technical delivery partner to execute a defined client requirement.','Discuss A Client Requirement'],['↗','Technology partners','Extend your team with offshore product, integration, automation and implementation capacity.','Extend Your Delivery Team'],['✦','Healthcare organisations','Hospitals, laboratories, pharmacies, healthtech teams and healthcare organisations.','Discuss Your Requirement']].map(([icon,title,text,cta]) => <article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p><button className="linkbtn" onClick={() => goToContact()}>{cta} →</button></article>)}</div></div></section>

        <section className="soft"><div className="wrap"><div className="section-head"><div><span className="kicker">THE DELIVERY GAP</span><h2>When the healthcare requirement is clear but delivery capacity is missing.</h2></div></div><div className="problems">{[['01','Disconnected systems','Legacy systems do not exchange data cleanly.'],['02','Manual operations','Manual workflows slow operations and reporting.'],['03','Execution gap','A consultant needs an execution team for a client project.']].map(([n,t,p]) => <div className="problem" key={n}><div className="num">{n}</div><div><b>{t}</b><p>{p}</p></div></div>)}</div></div></section>

        <section id="services"><div className="wrap"><div className="section-head"><div><span className="kicker">CAPABILITIES</span><h2>Healthcare technology capabilities</h2></div><p>Choose a capability to pre-select it in the project enquiry form.</p></div><div className="caps">{capabilities.map(([name,desc], i) => <button className="cap" key={name} onClick={() => goToContact(name)}><span className="capindex">0{i+1}</span><b>{name}</b><span>{desc} →</span></button>)}</div></div></section>

        <section id="process" className="soft"><div className="wrap"><div className="section-head"><div><span className="kicker">HOW IT WORKS</span><h2>A focused route from requirement to delivery approach.</h2></div></div><div className="steps">{[['01','Share the requirement','Provide business context, systems involved and the outcome you need. Please do not include patient data.','Share A Project Brief'],['02','Confirm scope & risks','We review systems, delivery scope, risks, dependencies and success criteria during technical discovery.','Book Technical Discovery'],['03','Receive a delivery approach','Get a practical technical direction and next steps based on the confirmed requirement.','Request Discussion']].map(([n,t,p,c]) => <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p><button onClick={() => goToContact()} className="btn light">{c} →</button></div>)}</div></div></section>

        <section id="usecases"><div className="wrap use-grid"><div><div className="section-head stacked"><div><span className="kicker">EXAMPLE AREAS</span><h2>Relevant healthcare use-case areas</h2></div><p>These are example areas for technical discussion and should not be read as completed-project claims.</p></div><div className="use-list">{['Hospital & clinic system integration','Laboratory information system integration','Pharmacy workflow & cold-chain monitoring','Telemedicine & remote patient monitoring'].map(x => <button key={x} onClick={() => goToContact()} className="use"><span>↗</span>{x}</button>)}</div></div><div className="compliance"><div className="icon">⌁</div><span className="kicker">DISCOVERY CONTROL</span><h3>Privacy, security & interoperability</h3><p>Privacy, security, interoperability and local regulation are reviewed during technical discovery. For South African delivery, data roles, hosting location, cross-border transfer and POPIA obligations should be confirmed before implementation.</p><button onClick={() => goToContact()} className="btn ghost">Discuss Requirements →</button></div></div></section>

        <section className="soft"><div className="wrap"><div className="section-head"><div><span className="kicker">VENDOR EVALUATION</span><h2>Proof that supports vendor evaluation</h2></div><p>Only approved, verifiable healthcare delivery evidence should be published here.</p></div><div className="proof"><article className="card proofcard"><div className="proofno">01</div><div><h3>Healthcare project case study</h3><p>Add one approved healthcare project with the problem, delivery approach and measurable result.</p><button onClick={() => goToContact()} className="linkbtn">View Relevant Work →</button></div></article><article className="card proofcard"><div className="proofno">02</div><div><h3>Delivery evidence</h3><p>Add verified team roles, technical stack, security approach and delivery references.</p><button onClick={() => goToContact()} className="linkbtn">Meet The Delivery Team →</button></div></article></div></div></section>

        <section id="contact"><div className="wrap"><div className="formwrap"><div className="formcopy"><div className="eyebrow dark"><span className="dot" /> Qualified B2B enquiry</div><h2>Request A Technical Discussion</h2><p>Tell us enough to understand the business requirement, systems involved and expected outcome. We’ll use that context to qualify the technical discussion.</p><div className="formticks"><span>✓ Structured technical discovery</span><span>✓ B2B healthcare delivery focus</span><span>✓ No patient data requested</span></div></div><form className="form" onSubmit={handleSubmit}><div className="grid2"><Field label="Work email *"><input name="email" type="email" required placeholder="you@company.com" /></Field><Field label="Full name *"><input name="name" required placeholder="Your name" /></Field><Field label="Company *"><input name="company" required placeholder="Company name" /></Field><Field label="Company type *"><select name="companyType" required defaultValue=""><option value="" disabled>Select</option><option>Healthcare consultant</option><option>Technology partner</option><option>Healthcare organisation</option></select></Field><Field label="Country *"><select name="country" required defaultValue=""><option value="" disabled>Select</option><option>South Africa</option><option>Kenya</option><option>Nigeria</option><option>Ghana</option><option>Other</option></select></Field><Field label="Service needed *"><select name="service" required value={selectedService} onChange={e => setSelectedService(e.target.value)}><option value="" disabled>Select</option>{serviceOptions.map(x => <option key={x}>{x}</option>)}</select></Field></div><Field label="Requirement summary *"><textarea name="summary" required maxLength="700" placeholder="Briefly describe the business requirement, systems involved and expected outcome..." /></Field><div className="grid2"><Field label="Expected timeline *"><select name="timeline" required defaultValue=""><option value="" disabled>Select</option><option>Immediately</option><option>Within 1–3 months</option><option>3–6 months</option><option>Exploring / discovery</option></select></Field><Field label="Budget range (optional)"><select name="budget" defaultValue=""><option value="">Select</option><option>Under $10k</option><option>$10k–$25k</option><option>$25k–$50k</option><option>$50k+</option></select></Field></div><div className="notice">⚠ Do not submit patient information in this form.</div><label className="consent"><input name="consent" type="checkbox" required /><span>I agree to the privacy notice and follow-up about this business enquiry.</span></label><button className="btn primary submit" type="submit">Request Technical Discussion <span>→</span></button><p className="backend-note">Frontend interaction is complete. Connect this form to your approved backend, CRM or email endpoint before collecting live enquiries.</p></form></div></div></section>

        <section id="faq" className="soft"><div className="wrap faq-wrap"><div className="section-head"><div><span className="kicker">FAQ</span><h2>Frequently asked questions</h2></div></div><div className="faq">{faqs.map(([q,a],i) => <div className={`q ${openFaq===i?'open':''}`} key={q}><button type="button" onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><strong>{openFaq===i?'−':'+'}</strong></button><div className="answer"><p>{a}</p></div></div>)}</div></div></section>

        <section className="final"><div className="wrap"><div className="finalbox"><div><span className="kicker lighttext">START A QUALIFIED DISCUSSION</span><h2>Have a healthcare technology requirement to deliver?</h2></div><button className="btn primary big" onClick={() => goToContact()}>Request Technical Discussion →</button></div></div></section>
      </main>
      <footer className="footer"><div className="wrap foot"><a href="#top"><img className="logo" src={logo} alt="Pashupat Solutions" /></a><span>Healthcare technology delivery · B2B enquiries</span></div></footer>
      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </>
  )
}

function Field({label, children}) { return <label className="field"><span>{label}</span>{children}</label> }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
