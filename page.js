const projects=[
 ['01','Abeona Tourism','Social Media & Marketing','/work/abeona.png'],
 ['02','Tripgo','Company Profile & Marketing','/work/tripgo.png'],
 ['03','Onsite','Brand & Company Profile','/work/onsite.png'],
 ['04','GoBro Web Services','Content & Digital Marketing','/work/gobro.png'],
 ['05','Visions Quality Coatings','Social Media Content','/work/visions.png'],
 ['06','Dr. Lim Dental','Social Media Content','/work/drlim.png']
];
const services=['Operations & Administrative Support','Workflow & Process Management','SOP & Process Documentation','Project & Task Coordination','Content, Social Media & Presentations','Research, Data Organization & AI-Assisted Work'];
export default function Home(){return <main>
<nav><b>Micaela Manalili</b><div><a href="#about">About</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></div></nav>
<section className="hero"><p className="eyebrow">HELLO, I’M</p><h1>Micaela<br/>Manalili.</h1><h2>Operations Virtual Assistant <span>•</span><br/>Admin & Workflow Support</h2><p className="lead">Reliable support behind the scenes—helping businesses stay organized, improve workflows, coordinate projects, and keep day-to-day operations moving smoothly.</p><a className="button" href="#work">View my work →</a><div className="orb">organized<br/><i>but creative</i></div></section>
<section id="about" className="split"><div><p className="eyebrow">WHAT I CAN HELP WITH</p><h2>Support that keeps<br/>work moving.</h2></div><div className="services">{services.map((s,i)=><div key={s}><span>0{i+1}</span><b>{s}</b></div>)}</div></section>
<section id="work"><header className="sectionHead"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects & client work</h2></div><p>Creative, marketing and operational work from previous roles and clients.</p></header><div className="projects">{projects.map((p,i)=><article className={i%2?'reverse':''} key={p[1]}><div className="num">{p[0]}</div><div className="projectText"><p className="eyebrow">SELECTED PROJECT</p><h3>{p[1]}</h3><p>{p[2]}</p></div><img src={p[3]} alt={`${p[1]} work sample`}/></article>)}</div></section>
<section className="toolkit"><p className="eyebrow">MY TOOLKIT</p><h2>Airtable · Monday.com · Make.com · HubSpot · Trello · Google Workspace · Zoho · Calendly · Later</h2></section>
<section id="process" className="process"><p className="eyebrow">HOW I WORK WITH CLIENTS</p><h2>Clear from day one.</h2><div>{['Discovery & Onboarding','Access & Workspace Setup','Workflow Review','System & Process Setup','Ongoing Support','Optimization'].map((x,i)=><p key={x}><span>0{i+1}</span>{x}</p>)}</div></section>
<footer id="contact"><p className="eyebrow">LET’S WORK TOGETHER</p><h2>Need a more organized<br/>way to get things done?</h2><a className="button" href="mailto:manaliliela@gmail.com">manaliliela@gmail.com →</a><p className="small">Micaela Manalili · Operations Virtual Assistant</p></footer>
</main>}
