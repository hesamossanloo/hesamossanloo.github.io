/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// make our custom icons `./myicons` available in Font Awesome
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAzure,
  faBlockchain,
  faCypress,
  faLambda,
  faServerless,
  faTS
} from "./assets/myicons";
import { workExpArray } from "./data/WorkExpArray";

// noinspection JSCheckFunctionSignatures
library.add([faTS, faLambda, faServerless, faBlockchain, faAzure, faCypress]);

dom.watch();

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hesam Ossanloo",
  title: "Heya, I'm Hesam",
  subTitle: emoji(
    `Principal Engineer & Engineering Leader building AI-powered platforms, scalable ecosystems, and enterprise-grade distributed systems. 
I have 14+ years of experience across startups and established companies. I led teams at Autodesk (Forma Ecosystem, MCP, Agentic AI), 
cofounded SkogApp and TAVANA, and was Head of Engineering at Spark Sport NZ. I hold doctoral research in Semantic Web & AI and volunteered 
on the Mission to the Moon project (Google Lunar X-Prize). Passionate about technical excellence, mentoring, and solving hard problems in great teams.`
  ),
  resumeLink: "Hesam-Ossanloo-CV-EN.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hesamossanloo",
  linkedin: "https://www.linkedin.com/in/hesamossanloo/",
  email: "hesam@ossanloo.com",
  portfolio: "https://www.hesam.info",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Principal Engineer & Engineering Leader — AI-powered platforms, scalable ecosystems, enterprise distributed systems",
  skills: [
    emoji(
      "⚡ Leading engineering teams and building highly scalable, reliable, secure cloud-native and serverless systems (OAuth 2.0, MCP, Agentic AI)."
    ),
    emoji(
      "⚡ Designing enterprise architecture: microservices, micro-frontends, RESTful APIs, event-driven systems, and CAP theorem–aware solutions."
    ),
    emoji(
      "⚡ Driving operational excellence: CI/CD, observability (Datadog, PagerDuty), AI-driven support, and incident response."
    ),
    emoji(
      "⚡ Applying AI & intelligent systems: LLM systems, MCP architectures, semantic search, ontology engineering, and data privacy & AI governance."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "LLM",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "MCP",
      customImage: require("./assets/images/mcpLogo.svg")
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fabi fa-azure"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fabi fa-ts"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "NoSQL/SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fabi fa-blockchain"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fabi fa-cypress"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Atlassian",
      fontAwesomeClassname: "fab fa-atlassian"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Hochschule Darmstadt - University of Applied Sciences (Germany)",
      logo: require("./assets/images/hdaLogo.png"),
      subHeader: "Doctoral Research, Informatics",
      duration: "July 2016 – December 2022",
      desc: "Focus: Semantic Web, Ontology and Taxonomy, Machine learning, AI, ETL, Search result clustering, Linked Open Data, Information Retrieval, Semantic Information Visualization."
    },
    {
      schoolName:
        "Hochschule Darmstadt / Wisconsin Platteville USA",
      logo: require("./assets/images/hdaLogo.png"),
      subHeader: "M.Sc. of Computer Science (Dual Master)",
      duration: "October 2010 – October 2012",
      desc: "Focus: Enterprise Architecture, Fullstack development (Java, JS, Ruby), Business Process Optimization."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Enterprise Architect",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "IaaC/PaaS/SaaS",
      progressPercentage: "95%"
    },
    {
      Stack: "Automated Testing",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: workExpArray
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using GitHub, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/skogAppLogo.png"),
      projectName: "SkogApp",
      projectDesc: `Responsive web app (React, TypeScript) with OAuth 2.0. Six-step wizard for foresters to find and analyze forest on the map. 
      Microservice architecture: AWS Lambda (Python, Node.js) fetches satellite/aerial images via REST APIs; ML model produces forestry plan and bio-growth model. 
      Reduced forestry plan creation from two years to 30 minutes. PostgreSQL/PostGIS, Firestore.`,

      footerLink: [
        {
          name: "Company dissolved",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/tavanaLogo.png"),
      projectName: "TAVANA",
      projectDesc: `Norway's first medical-domain LLM, built in collaboration with Harvard Medical School and MIT. 
      Reduced documentation time by 30–60 minutes per doctor per day through automatic medical-coding (ICD-10).`,

      footerLink: [
        {
          name: "Company dissolved",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/autodeskLogo.png"),
      projectName: "Autodesk Forma Ecosystem",
      projectDesc: `Tech Lead for the Forma ecosystem: public APIs, MCPs (Model Context Protocol), Extensions, and Agentic AI integrations. Architected enterprise-grade OAuth 2.0 authentication and authorization. Led the MCP proof of concept for Autodesk University, now in production with a dedicated squad. Cloud-native, serverless microservices and micro-frontends; operational excellence with Datadog, PagerDuty, and AI-driven support.`,

      footerLink: [
        {
          name: "Autodesk Forma",
          url: "https://www.autodesk.com/uk/products/forma/overview"
        }
      ]
    },
    {
      image: require("./assets/images/sparksportLogo.png"),
      projectName: "Spark Sport App",
      projectDesc: `Led engineering for a multi-platform sports streaming ecosystem serving up to 1M users across 16 platforms 
          (Web, iOS, Android, 13 smart TVs and devices). Microservices, REST APIs, Snowflake, PagerDuty, DataDog, AI-based anomaly detection.`,
      footerLink: [
        {
          name: "Company got acquired by TVNZ",
          url: "https://www.spark.co.nz/getmore/spark-sport-closure/?srsltid=AfmBOoqyItMk3M5WaPrR8_s6sh64u31EYP5K3qx73wENkD0j254LaBEo"
        }
      ]
    },
    {
      image: require("./assets/images/mercuryLogo.png"),
      projectName: "Mercury Broadband",
      projectDesc: `Building scalable cloud-based application for Mercury 
          customers to be able to signup for broadband service or integrate it 
          into their billing service.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mercury.co.nz/broadband/"
        }
      ]
    },
    {
      image: require("./assets/images/powerfinanceLogo.png"),
      projectName: "P^werFinance",
      projectDesc: `Blockchain-based banking platform: secure minting and burning of encrypted digital assets, 
          with scalable microservices, TDD/BDD, CI/CD and Agile delivery.`,
      footerLink: [
        {
          name: "Company dissolved",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/ATLogo.png"),
      projectName: "AT Journey Planner",
      projectDesc: `Every 9 seconds, GPS data from all fleets are sent to the 
          API. Using ML, arrival and departure predictions are made and sent to 
          all clients.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://at.govt.nz/bus-train-ferry/journey-planner/"
        }
      ]
    },
    {
      image: require("./assets/images/PTSLogo.png"),
      logoBlack: true,
      projectName: "Moon Landing Rover (Volunteer)",
      projectDesc: `Semantic search research for the Google Lunar X-Prize Mission to the Moon (Planetary Transportation Systems / PTScientists). Built mission control software for secure communication between the Audi lunar Quattro, ALINA lander, and Earth.`,
      footerLink: [
        {
          name: "Wikipedia: Planetary Transportation Systems",
          url: "https://en.wikipedia.org/wiki/Planetary_Transportation_Systems"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Scientific papers, books and certifications which I have published or achieved!",

  achievementsCards: [
    {
      title: "Domain-Specific Semantic Search Applications: Example SoftwareFinder",
      subtitle:
        "Thomas Hoppe, Bernhard G. Humm, Anatol Reibold (Eds.): Semantic Applications - Methodology, Technology, Corporate Use. pp. 243-258. Springer Verlag, Berlin, 2018. ISBN 978-3-662-55432-6.",
      image: require("./assets/images/semanticBook.jpeg"),
      footerLink: [
        {
          name: "Book Chapter",
          url: "https://www.researchgate.net/publication/322931131_Domain-Specific_Semantic_Search_Applications_Example_SoftwareFinder"
        }
      ]
    },
    {
      title: "Cost-Effective Semi-Automatic Ontology Development from Large Domain Terminology",
      subtitle:
        "Proceedings of the Collaborative European Research Conference (CERC 2017), pp 73-82, Karlsruhe, Germany, 22-23 September 2017. ISSN: 2220-4164.",
      image: require("./assets/images/ontology.svg"),
      footerLink: [
        {
          name: "Scientific Paper",
          url: "https://www.researchgate.net/publication/322724628_Cost-Effective_Semi-Automatic_Ontology_Development_from_Large_Domain_Terminology"
        }
      ]
    },
    {
      title: "A Semantic Search Engine for Software Components",
      subtitle:
        "Proceedings of the International Conference WWW/Internet 2016, IADIS Press, pp 127-135, Mannheim, Germany. ISBN 978-989-8533-57-9.",
      image: require("./assets/images/topicPie.png"),
      footerLink: [
        {
          name: "Scientific Paper",
          url: "https://www.researchgate.net/publication/309735336_A_SEMANTIC_SEARCH_ENGINE_FOR_SOFTWARE_COMPONENTS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: `Need to solve a complex problem, make sure your Tech is scalable and secure, need a mentor to build your team 
    or just want to say hi? Drop me an email 🙂`,
  email_address: "hesam@ossanloo.com",
  number: "+4792203047"
};

export {
  achievementSection, bigProjects, contactInfo, educationInfo, greeting, illustration, openSource, podcastSection, skillsSection, socialMediaLinks, techStack,
  workExperiences
};

