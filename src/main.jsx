import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ChevronDown, Clock3, Compass, ExternalLink, Footprints, Landmark, MapPin, Menu, Mountain, Shield, Star, Ticket, X } from 'lucide-react';
import './styles.css';

const images = {
  hero: '/images/Hero.jpeg',
  rajagiri: '/images/rajagiri potraight.jpeg',
  krishnagiri: '/images/krishnagiri potraight.jpeg',
  panorama: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Gingee_fort_top_view.jpg',
  kalyana: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Kalyana_Mahal_from_Rajagiri.jpg',
  audience: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Audience_hall_Krishnagiri_Fort_Gingee.JPG',
  hill: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Gingee_Raja_Fort_Hill.jpg',
};

const timeline = [
  ['9th century', 'Earliest fortifications', 'The earliest fortifications are traditionally linked with the Chola period.'],
  ['c. 1190', 'Foundation & early strengthening', 'Ananta Kon is associated with the foundation, with later strengthening attributed to Krishna Kon.'],
  ['13th century', 'A hill citadel grows', 'Under the Kurumbar period, the hill fortifications developed into a stronger citadel.'],
  ['15th–16th c.', 'Vijayanagara & Nayak expansion', 'Major works transformed Gingee into the formidable three-hill complex remembered today.'],
  ['1649', 'Bijapur Sultanate', 'The fort was captured and the name Badshabad is associated with this phase.'],
  ['1677', 'Maratha period', 'Subedar Harji Raje Mahadik captured Gingee for the Marathas under Shivaji.'],
  ['1698', 'Mughal period', 'Zulfiqar Khan captured the fort; Nusratgarh became an associated name.'],
  ['1714', 'Nawab of Arcot', 'Gingee passed into the control of the Nawab of Arcot.'],
  ['1750', 'French occupation', 'The French held the fort for a short period during the struggle for influence in South India.'],
  ['1761', 'British capture', 'The British took the fort; it was later abandoned as a military centre in the 19th century.'],
];

const hills = [
  { name: 'Rajagiri', tag: 'Main citadel', image: images.rajagiri, text: 'The tallest and most heavily fortified hill. The climb passes a deep chasm and a bridge before reaching the summit, where the Ranganatha temple and citadel ruins remain.', facts: ['~800 m high hill', '~2 hr round trip', '60-ft-deep chasm', 'Kamalakanni & Senji shrines'] },
  { name: 'Krishnagiri', tag: 'Rani Fort', image: images.krishnagiri, text: 'North of Rajagiri, this quieter hill has steep steps, granaries, temples and an empty Ranganatha shrine. Its summit also preserves an Indo-Islamic audience-hall structure.', facts: ['~1 hr round trip', 'Steep stone steps', 'Granaries & temples', 'Historic audience hall'] },
  { name: 'Chakkilidurg', tag: 'The lesser hill', image: images.panorama, text: 'The southeastern hill, also called Chandrayandurg, completes the triangular defensive landscape. It is currently not open for climbing.', facts: ['Southeastern hill', 'Not open for climbing', 'Part of the defensive triangle', 'Associated with arms/leatherwork traditions'] }
];

const gallery = [
  [images.kalyana, 'Kalyana Mahal', 'The iconic seven-storey pyramidal pavilion.'],
  [images.hero, 'Gingee Fort landscape', 'The fort complex set against the rocky hills of Gingee.'],
  [images.audience, 'Krishnagiri audience hall', 'A domed pavilion at the summit of Krishnagiri.'],
  [images.panorama, 'Hilltop panorama', 'Stone structures and the surrounding landscape seen from above.'],
];

function Nav({ open, setOpen }) {
  const links = [['Home', '#home'], ['History', '#history'], ['Explore', '#explore'], ['Legends', '#legends'], ['Visit', '#visit'], ['Gallery', '#gallery']];
  return <header className="nav"><a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">G</span><span>GINGEE<br /><small>FORT • HERITAGE</small></span></a><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="https://www.district.in/events/gingee-fort-buy-tickets" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Book tickets <ExternalLink size={14} /></a></nav></header>
}

function SectionTitle({ eyebrow, title, children, light = false }) { return <div className={light ? 'section-title light' : 'section-title'}><span>{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div> }

function App() {
  const [open, setOpen] = useState(false); const [activeHill, setActiveHill] = useState(0);
  return <div className="site">
    <Nav open={open} setOpen={setOpen} />
    <main>
      <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(10,16,13,.9) 0%,rgba(10,16,13,.62) 42%,rgba(10,16,13,.12) 100%),url(${images.hero})` }}>
        <div className="hero-content"><div className="eyebrow-pill"><Star size={13} /> UNESCO WORLD HERITAGE • 2025</div><p className="kicker">SENJI • CHENJI • JINJI</p><h1>Gingee<br /><em>Fort</em></h1><p className="hero-lead">A fortress carved into three hills, where stone, landscape and centuries of history meet.</p><div className="hero-actions"><a className="button primary" href="https://www.district.in/events/gingee-fort-buy-tickets" target="_blank" rel="noreferrer">Book tickets <ExternalLink size={15} /></a><a className="button ghost" href="#explore">Explore the fort <ArrowRight size={17} /></a></div></div>
        <div className="hero-side"><div className="side-note"><span>KNOWN AS</span><strong>“Troy of the East”</strong><small>A name popularised by British writers for its formidable defences.</small></div><div className="scroll">SCROLL <ChevronDown size={15} /></div></div>
      </section>

      <section className="facts"><div className="fact"><MapPin /><span><b>Villupuram District</b><small>Tamil Nadu, India</small></span></div><div className="fact"><Mountain /><span><b>Three fortified hills</b><small>Rajagiri • Krishnagiri • Chakkilidurg</small></span></div><div className="fact"><Shield /><span><b>13 km of walls</b><small>Across an ~11 sq km complex</small></span></div><div className="fact"><Landmark /><span><b>UNESCO · 2025</b><small>Component 12 of a serial World Heritage property</small></span></div></section>

      <section className="intro container"><div className="intro-image"><img src={images.kalyana} alt="Kalyana Mahal at Gingee Fort" /><div className="image-caption">Kalyana Mahal · Rajagiri</div></div><div className="intro-copy"><span className="eyebrow">A fortress shaped by terrain</span><h2>Where the landscape became the defence.</h2><p>Gingee Fort is not a single hilltop monument. It is a large defensive landscape built around three rocky hills, connected by walls, gates, water systems and structures at the base.</p><p>Its strategic position made it a coveted stronghold for successive powers. Today, the surviving remains reveal layers of Chola, Vijayanagara-Nayak, Maratha, Mughal, Arcot, French and British history.</p><div className="quote"><span>“</span><div><p>Known in popular tradition as the <strong>Troy of the East</strong>, Gingee is celebrated for the difficulty of its natural and man-made defences.</p><small>— Heritage description</small></div></div></div></section>

      <section id="history" className="history section-dark"><div className="container"><SectionTitle eyebrow="01 · HISTORY" title="A fort that changed hands with the centuries." light>From early hill fortifications to the Maratha, Mughal, Arcot, French and British periods.</SectionTitle><div className="timeline">{timeline.map(([date, title, text], i) => <div className="timeline-item" key={date}><div className="time-date">{date}</div><div className="time-dot">{String(i + 1).padStart(2, '0')}</div><div className="time-body"><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="timeline-stat"><strong>6</strong><span>major changes of power<br /><small>between 1649 and 1761</small></span><strong>112</strong><span>years of intense political transition<br /><small>within that period</small></span></div></div></section>

      <section id="explore" className="explore container"><SectionTitle eyebrow="02 · EXPLORE THE FORT" title="Three hills. One extraordinary defensive system." >Choose a hill to discover its role, character and surviving features.</SectionTitle><div className="hill-layout"><div className="hill-tabs">{hills.map((h, i) => <button key={h.name} className={activeHill === i ? 'active' : ''} onClick={() => setActiveHill(i)}><span>0{i + 1}</span><div><b>{h.name}</b><small>{h.tag}</small></div><ArrowRight size={18} /></button>)}<div className="map-card"><img src={images.panorama} alt="Gingee Fort hilltop landscape" /><div><Compass size={17} /><span>Three-hill landscape<br /><small>Explore the complex on foot</small></span></div></div></div><article className="hill-detail"><img src={hills[activeHill].image} alt={hills[activeHill].name} /><div className="hill-detail-copy"><span className="eyebrow">{hills[activeHill].tag}</span><h3>{hills[activeHill].name}</h3><p>{hills[activeHill].text}</p><div className="mini-facts">{hills[activeHill].facts.map(x => <span key={x}><i></i>{x}</span>)}</div></div></article></div></section>

      <section className="structures"><div className="container"><SectionTitle eyebrow="THE LOWER & INNER FORT" title="More than walls and hills." /><div className="structure-grid"><div className="structure-card large"><img src={images.kalyana} alt="Kalyana Mahal" /><div><span>01</span><h3>Kalyana Mahal</h3><p>The fort’s signature seven-storey pavilion, rising from the lower fort with a pyramidal shikhara.</p></div></div><div className="structure-card"><div className="icon-box">◈</div><h3>Temples & shrines</h3><p>Venkataramana Temple, Kamalakkanni Amman Temple and the small Pancha Pandava shrines add a sacred layer to the complex.</p></div><div className="structure-card"><div className="icon-box">▣</div><h3>Mosque & halls</h3><p>Sadat Ullah Khan Mosque, pillared halls and Indo-Islamic structures reflect later phases of occupation.</p></div><div className="structure-card"><div className="icon-box">◫</div><h3>Water & storage</h3><p>Granaries, prison cells and the sacred Aanaikulam pond supported life inside the fortified landscape.</p></div></div></div></section>

      <section id="legends" className="legend"><div className="legend-image" style={{ backgroundImage: `url(${images.hill})` }}></div><div className="legend-copy"><span className="eyebrow">03 · LEGENDS & CULTURE</span><h2>The story of Raja Tej Singh.</h2><p>The Tamil folk tradition of <em>Thesingu Raasan</em> tells of Raja Tej Singh, son of Swarup Singh, who challenged the Nawab of Arcot with his friend and general Mehboob Khan.</p><p>In the popular story, Tej Singh was defeated and killed in battle. His memory lives through Tamil ballads, poems, street theatre and oral storytelling, making Gingee not only a monument of stone but also a living cultural landscape.</p><div className="legend-line"></div><span className="tamil">தேசிங்கு ராஜன் · ஒரு மக்கள் நினைவு</span></div></section>

      <section id="visit" className="visit container"><SectionTitle eyebrow="04 · PLAN YOUR VISIT" title="Come early. Take your time." >The fort is best experienced slowly, with water, comfortable footwear and enough time for the climbs.</SectionTitle><div className="visit-grid"><div className="visit-main"><div className="visit-card highlight"><Clock3 /><div><span>VISITING HOURS</span><strong>9:00 AM — 5:00 PM</strong><small>Ticket counter closes at 4:30 PM.</small></div></div><div className="visit-card"><Ticket /><div><span>ENTRY TICKETS</span><strong>₹25 · Indian &nbsp;|&nbsp; ₹250 · Foreigner</strong><small>Adults (15+ yrs): ₹25 (Indian) · ₹250 (Foreigner)<br />Children (below 15 yrs): ₹0 (Free entry)</small><a className="ticket-btn" href="https://www.district.in/events/gingee-fort-buy-tickets" target="_blank" rel="noreferrer">Book tickets to Gingee Fort <ExternalLink size={13} /></a></div></div><div className="visit-card"><Footprints /><div><span>TIME TO ALLOW</span><strong>About half a day</strong><small>Covering Rajagiri and Krishnagiri takes time, especially in the heat.</small></div></div><div className="visit-card"><Compass /><div><span>GETTING THERE</span><strong>Tiruvannamalai — Puducherry route</strong><small>Frequent buses stop at the fort. Tindivanam is the nearest major railway town; Chennai is the nearest major airport.</small></div></div></div><aside className="tip"><span>VISITOR TIP</span><h3>Beat the heat.</h3><p>Start your climb early, carry enough drinking water, wear sturdy footwear and plan the hills around your energy level.</p><div className="tip-route"><span>CHENNAI</span><b>~160 km</b><span>GINGEE</span></div><a href="https://maps.google.com/?q=Gingee+Fort" target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={15} /></a></aside></div></section>

      <section id="gallery" className="gallery"><div className="container"><SectionTitle eyebrow="05 · GALLERY" title="Stone, sky and stories." /><div className="gallery-grid">{gallery.map(([src, title, desc], i) => <figure key={title} className={i === 1 ? 'tall' : ''}><img src={src} alt={title} /><figcaption><b>{title}</b><span>{desc}</span></figcaption></figure>)}</div></div></section>

      <section className="heritage-note"><div className="container"><div className="unesco-mark"><span>WORLD<br />HERITAGE</span><strong>UNESCO</strong></div><div><span className="eyebrow">MARATHA MILITARY LANDSCAPES OF INDIA</span><h2>Gingee Fort is Component 12 of the 2025 UNESCO World Heritage property.</h2><p>UNESCO describes the serial property as a network of twelve fortifications representing the Maratha military defence system. Gingee is the sole component located in Tamil Nadu.</p></div><a href="https://whc.unesco.org/en/list/1739" target="_blank" rel="noreferrer">UNESCO site <ExternalLink size={16} /></a></div></section>
    </main>
    <footer><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">G</span><span>GINGEE<br /><small>FORT • HERITAGE</small></span></div><p>A digital guide to one of Tamil Nadu’s most remarkable fortified landscapes.</p></div><div><b>Explore</b><a href="#history">History</a><a href="#explore">The three hills</a><a href="#legends">Legends & culture</a><a href="#visit">Plan your visit</a></div><div><b>Sources</b><a href="https://whc.unesco.org/en/list/1739" target="_blank" rel="noreferrer">UNESCO World Heritage Centre</a><a href="https://commons.wikimedia.org/wiki/Category:Gingee_Fort" target="_blank" rel="noreferrer">Wikimedia Commons images</a><span>Visitor fees & timings should be reconfirmed before travel.</span></div></div><div className="footer-bottom"><span>© 2026 Gingee Fort Heritage · Built with React</span><span className="footer-credit">Designed and Developed by <a href="https://dm-tech-freelance-portfolio.vercel.app/#" target="_blank" rel="noreferrer">DM Tech</a></span></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App />);
