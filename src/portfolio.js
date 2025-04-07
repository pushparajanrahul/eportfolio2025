/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Pushparajan",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "Machine Learning Researcher + MLOps Engineer • Cloud Enthusiast • Bridging innovative models with production-ready systems"
  ),
  resumeLink:
    "https://drive.usercontent.google.com/download?id=18xWwynPsU6BKSP1EEqT-N1ZuhvxSqf4y&export=download&authuser=2&confirm=t&uuid=d3987c6d-f553-418a-8aaf-b51aaf3b64d5&at=AENtkXZvSABhovuOl3z0ok9Kn4rZ:1731743087768", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pushparajanrahul",
  linkedin: "https://www.linkedin.com/in/pushparajanrahul/",
  gmail: "pushparajan.rahul@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@rahulpushparajan",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A curious researcher and builder — from learning great designs, designing novel ML architectures to scaling production systems.",
  skills: [
    emoji("🔬 Fine-tuning and evaluating large language and vision models (LoRA, CLIP, BERT, GPT-4)"),
    emoji("🧪 Build & test deep learning models (ViTs, self-supervised, diffusion, etc.)"),
    emoji("📊 Architecting scalable ML pipelines using Docker, MLflow, and cloud-native tools"),
    emoji("⚙️ Automate workflows with CI/CD, Docker, K8s, MLflow"),
    emoji("🔎 Building multimodal systems and semantic search pipelines using vector databases"),
    emoji("🛠️ Data engineering with Kafka, Spark, SQL, and real-time ETL pipelines")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { 
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain" 
    },
    { 
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-cubes" 
    },
    { 
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker" 
    },
    { 
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-server" 
    },
    { 
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws" 
    },
    { 
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python" 
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/01asulogo.png"),
      subHeader: "Master of Science in Robotics and Autonomous Systems",
      duration: "January 2023 – December 2024",
      desc: "Focused on Deep Learning, NLP, Vision, and Embedded Machine Learning",
      descBullets: [
        "GPA: 4.0/4.0 (Awarded suma-cum-laude)",
        "Submitted a co-authored research paper on zero-shot multimodal RAG-based image labeling to ASME IDETC-CIE 2025",
        "Worked as a Graduate Research Assistant on vision-language models and knowledge-driven pipelines"
      ]
    },
    {
      schoolName: "Mahatma Gandhi University",
      logo: require("./assets/images/02mgulogo.png"),
      subHeader: "Bachelor of Technology in Applied Electronics and Instrumentation",
      duration: "May 2009 - May 2013",
      desc: "Foundational engineering education with emphasis on control systems, sensors, and signal processing.",
      descBullets: [
        "Published a paper on 'Wireless Automation of Multi-process using LabVIEW",
        "Graduated in the top 10 of the department"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Research", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MLOps & Infrastructure",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming & System Design",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant – Machine Learning",
      company: "Arizona State University",
      companylogo: require("./assets/images/01asulogo.png"),
      date: "June 2024 – Present",
      desc: "Building multimodal retrieval systems, knowledge graphs, and web-scale pipelines with advanced LLM integrations.",
      descBullets: [
        "Built Vision-Language RAG pipeline using Llama 3.2Vision and GPT-4o-mini on A100s, reducing manual labeling by 60%",
        "Enhanced multi-hop reasoning using self-consistency checks, improving output quality by 85%",
        "Visualized CLIP-based embeddings via UMAP/t-SNE for high-accuracy content analysis (72%)"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Schneider Electric",
      companylogo: require("./assets/images/03selogo.png"),
      date: "Sep 2013 – June 2021",
      desc: "Led large-scale ML, ETL, and cloud migration projects to optimize industrial IoT data infrastructure.",
      descBullets: [
        "Designed fault detection pipeline using XGBoost and MLFlow with 40% accuracy improvement",
        "Built high-throughput ETL system using Kafka + Spark for 50K+ messages/day with <100ms latency",
        "Migrated legacy historian systems to AWS S3, reducing infra costs by 25%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
    "Certifications, Conferences, Awards, and Research Contributions.",

  achievementsCards: [
    {
      title: "ASME Hackathon Winner - 3rd Place",
      subtitle:
        "Developed ConvNeXt + Ontology pipeline for unbalanced datasets",
      image: require("./assets/images/04asmelogo.png"),
      imageAlt: "ASME IDETC-CIE Hackathon 2024",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/12fb5a49-9a11-4550-bf4c-16ca093547f8?username=rahulpushparajan478741"
        },
        {
          name: "ASME IDETC-CIE News Letter",
          url: "https://www.asme.org/getmedia/aab7fe89-2c36-4c38-bca4-5efe38404a82/cie-newsletter-spring-2025-draft-v2.pdf#page=12"
        }
      ]
    },
    {
      title: "TensorFlow Developer Certificate",
      subtitle:
        "Issued by TensorFlow (Google)",
      image: require("./assets/images/05TFlogo.png"),
      imageAlt: "TF Developer",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.credential.net/12fb5a49-9a11-4550-bf4c-16ca093547f8"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy writing about machine learning projects, system preparations, MLOps tooling, and lessons learned from hands-on projects.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@rahulpushparajan/getting-ubuntu-22-04-5-lts-jammy-jellyfish-on-oracle-virtualbox-314fb5460386",
      title: "Getting Ubuntu 22.04.5 LTS(Jammy Jellyfish) on Oracle VirtualBox",
      description:
        "Installing Ubuntu 22.04.5 LTS (Jammy Jellyfish) in Oracle VirtualBox is a common yet crucial setup for developers, researchers, and robotics enthusiasts. This step-by-step guide walks you through the installation process, ensuring you have a smooth experience getting your virtual machine up and running."
    },
    {
      url: "https://medium.com/@rahulpushparajan/pointnet-for-3d-point-cloud-classification-a-deep-dive-cebd053f0c08",
      title: "PointNet++ for 3D Point Cloud Classification: A Deep Dive",
      description:
        "Unlike traditional 2D images, point clouds lack a fixed structure, and thus PointNet++ (an extension of PointNet), fixes the challenging scenatios where conventional CNNs fail."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6022977852",
  email_address: "pushparajan.rahul@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
