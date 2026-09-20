"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Flower({ petal = "#F6C7D1", center = "#F3CC68", className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={petal}>
        <ellipse cx="50" cy="18" rx="12" ry="20" />
        <ellipse cx="50" cy="18" rx="12" ry="20" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="18" rx="12" ry="20" transform="rotate(120 50 50)" />
        <ellipse cx="50" cy="18" rx="12" ry="20" transform="rotate(180 50 50)" />
        <ellipse cx="50" cy="18" rx="12" ry="20" transform="rotate(240 50 50)" />
        <ellipse cx="50" cy="18" rx="12" ry="20" transform="rotate(300 50 50)" />
      </g>
      <circle cx="50" cy="50" r="14" fill={center} />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <motion.div
        className="topBar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Reliable support for smoother operations.
      </motion.div>

      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <a href="#home" className="logo">
          <span className="lM">M</span>
          <span className="lI">I</span>
          <span className="lC">C</span>
          <span className="lA1">A</span>
          <span className="lE">E</span>
          <span className="lL">L</span>
          <span className="lA2">A</span>
        </a>
      </motion.div>

      <motion.nav
        className="navBar"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#tools">Tools</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </motion.nav>

      <section className="hero" id="home">
        <motion.div
          className="flower flowerOne"
          animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flower petal="#8DBCBC" center="#F7D8DF" />
        </motion.div>

        <motion.div
          className="flower flowerTwo"
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flower petal="#F3CC68" center="#FFFDF9" />
        </motion.div>

        <motion.div
          className="heroCard"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            OPERATIONS VIRTUAL ASSISTANT
          </motion.p>

          <motion.h1 variants={stagger} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} style={{ display: "inline-block" }}>
              Helping you stay
            </motion.span>

            <br />

            <motion.span variants={fadeUp} className="lineAccent">
              organized,
            </motion.span>

            <motion.span variants={fadeUp} style={{ display: "inline-block" }}>
              {" "}while work
            </motion.span>

            <br />

            <motion.span
              variants={fadeUp}
              className="lineTeal"
              style={{ display: "inline-block" }}
            >
              keeps moving.
            </motion.span>
          </motion.h1>

          <motion.p
            className="heroText"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            Admin support, workflows, project coordination and smarter systems
            that make day-to-day operations easier to manage.
          </motion.p>

          <motion.div
            className="heroButtons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
          >
            <motion.a
              href="#work"
              className="button primary"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View my work
            </motion.a>

            <motion.a
              href="#contact"
              className="button secondary"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s work together
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section className="services section" id="services">
        <motion.div
          className="sectionHeading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="sectionNumber">01</p>
          <div>
            <p className="eyebrow">WHAT I CAN HELP WITH</p>
            <h2>Support that keeps things moving.</h2>
          </div>
        </motion.div>

        <motion.div
          className="serviceGrid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {[
            {
              number: "01",
              title: "Admin Support",
              text: "Email, calendars, documents, file organization, research and the day-to-day details that keep work organized.",
              className: "pink",
            },
            {
              number: "02",
              title: "Workflow Systems",
              text: "Organizing processes, documenting SOPs and creating clearer workflows for recurring tasks.",
              className: "orange",
            },
            {
              number: "03",
              title: "Project Coordination",
              text: "Keeping tasks, deadlines, client communication and moving pieces organized from start to finish.",
              className: "teal",
            },
            {
              number: "04",
              title: "AI + Automation",
              text: "Using AI and digital tools to simplify repetitive work and support more efficient systems.",
              className: "yellow",
            },
          ].map((item) => (
            <motion.article
              key={item.number}
              variants={fadeUp}
              className={`serviceCard ${item.className}`}
              whileHover={{ y: -10, rotate: item.number === "02" ? 1 : -1 }}
              transition={{ duration: 0.25 }}
            >
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="about section" id="about">
        <motion.div
          className="aboutIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="sectionNumber">02</p>
          <p className="eyebrow">BEHIND THE SCENES</p>
          <h2>
            I help turn busy, <span>scattered work</span>
            <br />
            into something easier to manage.
          </h2>
        </motion.div>

        <div className="aboutLayout">
          <motion.div
            className="aboutShape"
            initial={{ opacity: 0, x: -50, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shapeText">
              <span>7+</span>
              <p>years supporting businesses</p>
            </div>
          </motion.div>

          <motion.div
            className="aboutCopy"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              I&apos;m Micaela, an Operations Virtual Assistant with experience
              across administrative support, marketing, project coordination and
              digital operations.
            </p>

            <p>
              I work behind the scenes to organize workflows, coordinate tasks,
              manage information and help businesses create smoother ways of
              working.
            </p>

            <a href="#experience" className="textLink">
              See my experience →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <motion.div
          className="sectionHeading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="sectionNumber">03</p>
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Different teams. Different roles. One organized approach.</h2>
          </div>
        </motion.div>

        {[
          ["01", "MassHouse", "Operations, studio coordination, PR & workflow support"],
          ["02", "Abeona Travels", "Social media, marketing & administrative support"],
          ["03", "ColdIQ", "Research, organization & virtual assistance"],
          ["04", "Clique Ideas", "Marketing & digital support"],
        ].map((item, index) => (
          <motion.div
            key={item[0]}
            className="experienceRow"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
            </div>
            <p>{item[2]}</p>
          </motion.div>
        ))}
      </section>

      <section className="work section" id="work">
        <motion.div
          className="sectionHeading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="sectionNumber">04</p>
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>A little look at what I&apos;ve worked on.</h2>
          </div>
        </motion.div>

        <div className="workGrid">
          {[
            ["/work/abeona.png", "01", "Abeona Travels", "Social Media & Marketing"],
            ["/work/drlim.png", "02", "Dr. Lim Dental", "Content & Social Media"],
            ["/work/visions.png", "03", "Visions Quality Coatings", "Digital Content"],
            ["/work/gobro.png", "04", "GoBro Web Services", "Marketing Content"],
          ].map((item, index) => (
            <motion.article
              key={item[1]}
              className={`project ${index === 0 ? "projectLarge" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="imageWrap">
                <motion.img
                  src={item[0]}
                  alt={`${item[2]} work sample`}
                  whileHover={{ scale: 1.055 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="projectInfo">
                <span>{item[1]}</span>
                <div>
                  <h3>{item[2]}</h3>
                  <p>{item[3]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="tools" id="tools">
        <Flower petal="#FFFFFF" center="#F3CC68" className="toolsFlower tf1" />
        <Flower petal="#F7D8DF" center="#F3CC68" className="toolsFlower tf2" />
        <Flower petal="#F4A84C" center="#FFFFFF" className="toolsFlower tf3" />

        <motion.div
          className="toolsInner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">TOOLS I WORK WITH</p>
          <h2>Tools are useful. Good systems make them work.</h2>

          <motion.div
            className="toolCloud"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Monday.com",
              "Make.com",
              "ClickUp",
              "Zoho",
              "Google Workspace",
              "HubSpot",
              "Airtable",
              "Trello",
              "WordPress",
              "Canva",
              "ChatGPT",
              "Claude",
              "Calendly",
              "Later",
            ].map((tool) => (
              <motion.span
                key={tool}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="process section" id="process">
        <motion.div
          className="sectionHeading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="sectionNumber">05</p>
          <div>
            <p className="eyebrow">HOW WE&apos;LL WORK TOGETHER</p>
            <h2>A simple, organized onboarding process.</h2>
          </div>
        </motion.div>

        <motion.div
          className="processGrid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {[
            ["01", "Get to know your business", "I learn how you work, what you need and where support matters most."],
            ["02", "Set up access & workspace", "We organize the tools, files and communication needed to begin."],
            ["03", "Organize the workflow", "I review tasks and processes and create a clearer working system."],
            ["04", "Support & improve", "We keep things moving and refine the system as the business evolves."],
          ].map((item) => (
            <motion.div
              key={item[0]}
              className="processItem"
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="contact" id="contact">
        <Flower petal="#F7D8DF" center="#F3CC68" className="contactFlower" />

        <motion.div
          className="contactInner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>

          <h2>
            Need an extra pair of
            <br />
            organized hands?
          </h2>

          <p>
            Let&apos;s talk about where you need support and how I can help make
            things easier behind the scenes.
          </p>

          <motion.a
            className="contactButton"
            href="mailto:manaliliela@gmail.com"
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Say hello →
          </motion.a>
        </motion.div>
      </section>

      <footer>
        <p>© 2026 Micaela Manalili</p>
        <p>Operations Virtual Assistant · Admin & Workflow Support</p>
        <p className="sig">Micaela</p>
      </footer>
    </main>
  );
}
