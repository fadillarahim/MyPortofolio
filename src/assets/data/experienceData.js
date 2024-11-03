import kalbe from "../images/kalbe-inter.jpg";
import bangkit from "../images/bangkit.jpg";
import huawei from "../images/huawei.jpg";
import dicoding from "../images/dicoding.jpeg";

export const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Kalbe International Pte, Ltd.",
    image: kalbe,
    location: "East Jakarta, Indonesia",
    startDate: "Aug 2023",
    endDate: "Present",
    description: {
      commonDesc:
        "Developed and implemented high-impact systems used across all Kalbe International business units globally, managing complete development processes from UI/UX design to deployment and maintenance.",
      list: [
        "CLA Online (Commitment Letter Agreement Online) - Developed a web application with React and Express to monitor KPI progress across departments, improving transparency with real-time data on target achievements.",
        "ALFA (Application of Finance) - Built a financial management tool integrating SQL Server and SAP SQL Anywhere, streamlining ERP access and enhancing monthly data closure processes across business units.",
        "CIPHERNEX (KI Phishing Web) - Created a phishing campaign platform to raise security awareness, testing employee response to phishing threats and enhancing overall cybersecurity measures.",
        "KITAS (KI IT Asset Sphere) - Designed a comprehensive IT asset management system for efficient tracking and automation of physical and digital asset issuance across all units.",
        "TRAVEL REQUEST - Developed a mini-ERP for travel documentation, automating processes for requests, fund disbursement, and expense reporting, integrated with Orlansoft ERP for streamlined financial entries.",
        "TREV (Tracking Event) - Built a React-Native web and mobile app to manage event and sales performance, supporting planning, reporting, and performance tracking globally.",
      ],
    },
    technologies: [
      "ReactJs",
      "ExpressJs",
      "React Native",
      "Prisma ORM",
      "SQL Server",
      "ODBC",
      "Chakra UI",
      "Javascript",
      "Typescript",
      "Vite",
    ],
  },
  {
    title: "Machine Learning Cohort",
    company: "Bangkit Academy 2023 Batch 1",
    image: bangkit,
    location: "Indonesia",
    startDate: "Feb 2023",
    endDate: "Jul 2023",
    description: {
      commonDesc:
        "Completed an intensive program in Data Analysis, Machine Learning, Deep Learning, Natural Language Processing, Time Series, and Model Deployment.",
      list: [
        "Technical Skills: Proficient in Python, TensorFlow, Keras, and Tableau.",
        "Soft Skills: Enhanced skills in English, project management, professional communication, and personal branding.",
        "Achievements: Distinction Graduate with a final score of 95.33 (Grade: A).",
        "Capstone Project: ChoTracker, a mobile application for predicting cholesterol levels through eye image analysis, showcasing advanced machine learning in healthcare.",
      ],
    },
    technologies: ["Python", "Tensorflow", "Flask", "Tableu"],
  },
  {
    title: "HCIA-AI and Machine Learning",
    company: "Huawei Talent",
    image: huawei,
    location: "Indonesia",
    startDate: "Aug 2022",
    endDate: "Dec 2022",
    description: {
      commonDesc:
        "Gained expertise in AI, Machine Learning, and Deep Learning fundamentals.",
      list: [
        "Certification: Successfully passed the HCIA-AI exam, demonstrating proficiency in AI principles and techniques.",
      ],
    },
    technologies: [],
  },
  {
    title: "Fullstack Web Development Program",
    company: "MSIB Batch 3 Program at PT. Dicoding Akademi Indonesia",
    image: dicoding,
    location: "Indonesia",
    startDate: "Aug 2022",
    endDate: "Dec 2022",
    description: {
      commonDesc:
        "Completed a learning path covering JavaScript, Node.js, GitHub, React.js, and project management.",
      list: [
        "Achievement: Graduated with Distinction, final score 96.86 (Grade: A).",
        "Project: Developed SIBIAS (Sistem Informasi Kebijakan dan Aspirasi), a platform to facilitate policy and community aspirations, providing real-world solutions for community engagement.",
      ],
    },
    technologies: [
        "ReactJs",
        "ExpressJs",
        "MySQL",
        "Webpack",
        
    ]
  },
];
