import mekaar from "../images/mekaar.png";
import sibias from "../images/sibias.png";
import faceEmotionRecog from "../images/FaceEmotionRecog.png";
import Chotrack from "../images/ChoTracker.png";
import ChoBot from "../images/ChoBot.png";
import Aleka from "../images/Aleka.png";
import Modaa from "../images/Modaa.png";
import SaleroBasamo from "../images/SaleroBasamo.png";
import cla from "../images/cla.png";
import alfa from "../images/alfa.png";
import ciphernex from "../images/ciphernex.png";
import kitas from "../images/kitas.png";
import travel from "../images/travel.png";
import trev from "../images/trev.png";
import mindsbot from "../images/mindsbot.png";

const portofolios = [
  {
    imgUrl: cla,
    category: ["web"],
    title: "ALFA (Application of Finance)",
    description:
      "Developed a comprehensive web application using React and Express for **Kalbe International** to streamline the tracking of Year-To-Date (YTD) data across performance indicators assigned to various lines of business (LOB) and departments. The CLA Online application significantly enhances the transparency of Key Performance Indicators (KPIs) through automated document creation, approval workflows, and reporting functionalities, offering real-time insights into organizational growth and performance achievements. </br> Previously, the Commitment Letter Agreement (CLA) process was manually managed using Excel spreadsheets and stored on Google Drive, which posed significant challenges. This outdated method made data retrieval cumbersome and increased the risks of data loss and mismanagement. Moreover, the transparency of KPI calculations, growth metrics, and achievements was limited, with rigid permission settings that failed to keep certain CLA indicators confidential among involved parties. </br> The CLA Online application addresses these challenges by automating business processes for the Management System division, transforming a previously cumbersome manual workflow into an efficient digital solution. The development of CLA Online presented unique challenges due to its complex business processes and the diverse nature of data types involved, including quantitative, qualitative, and hybrid data types. Additionally, the application handles various achievement and growth calculations, determining whether indicators represent maximum or minimum expected values. Based on these metrics, the system decides if users need to input a Success Indicator (SIRA) for successful evaluations or a Failure Indicator (PICAPA) for unmet targets",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "Prisma ORM",
      "Microsoft SQL Server",
      "Chakra UI",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: alfa,
    category: ["web"],
    title: "ALFA (Application of Finance)",
    description:
      "Designed and implemented a robust financial management system to optimize ERP access cycles for monthly data closures, facilitating seamless connectivity between SQL Server and SAP SQL Anywhere via ODBC. This application enhances user management by business unit and secures ERP access globally, significantly improving data closure processes.</br>Within Kalbe International, the assignment of users in the OrlanSoft ERP system is currently performed manually by the IT admin team for each reporting period. The IT admin is responsible for individually entering each user who will act as the person in charge (PIC) of inputting closing data for every period within the OrlanSoft application. This task encompasses not only the head office but also PICs across all Strategic Business Units (SBUs) worldwide (e.g., Philippines, Nigeria, Sri Lanka, Myanmar, etc.), creating a considerable pain point given the admin's additional responsibilities.</br>ALFA emerges as a strategic solution to this issue, providing a streamlined process for assigning users that eliminates the need to go through the OrlanSoft ERP. Instead, assignments can now be managed directly through ALFA, alleviating concerns regarding the transfer of responsibilities from the IT team to the Finance division. A standout feature of ALFA is the <br>User Grouping</br> functionality, which allows for bulk user assignments, thus optimizing the assignment process.</br>The development of ALFA presented challenges related to data insertion into the ERP database, which operates on SAP SQL Anywhere, while the web application utilizes Microsoft SQL Server. This challenge was effectively addressed through the implementation of Open Database Connectivity (ODBC) technology, ensuring smooth data integration between the two systems.",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "Prisma ORM",
      "Microsoft SQL Server",
      "ODBC",
      "Open Query",
      "Chakra UI",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: ciphernex,
    category: ["web"],
    title: "CIPHERNEX (KI Phising Web)",
    description:
      "Developed an innovative phishing campaign platform for **Kalbe International** to enhance security awareness across its global units. This comprehensive system evaluates employee awareness through a variety of phishing templates and response tracking, enabling targeted improvements in global security practices.</br>CIPHERNEX is an innovation project from the IT division of Kalbe International, designed to heighten employee awareness regarding cyber phishing threats. As the parent company of Kalbe International, PT Kalbe Farma Tbk faces numerous fraudulent activities impersonating its brand, particularly targeting its employees. One of the most common threats involves data theft through phishing schemes via email.</br>While training programs to raise awareness about phishing have been conducted, these measures alone are insufficient. A survey is essential to gauge employee awareness levels concerning phishing attacks. Therefore, **CIPHERNEX** was created as a platform that facilitates the generation of phishing campaign templates for ongoing awareness efforts, complete with detailed reporting on employee responses. With **CIPHERNEX**, the company can effectively evaluate the awareness level of its workforce regarding phishing threats.",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "Prisma ORM",
      "Microsoft SQL Server",
      "Chakra UI",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: kitas,
    category: ["web"],
    title: "KITAS (KI IT Asset Sphere)",
    description:
      "Designed a centralized IT asset management system for <b>Kalbe International</b> to monitor both physical and digital assets across all business units. This application automates asset issuance and enables comprehensive tracking and management, making it an essential tool for IT resource oversight on a global scale.</br>Kalbe International oversees all entities under the Kalbe Farma umbrella worldwide. As the company expands and establishes subsidiaries across the globe, managing a vast array of assets becomes increasingly challenging, particularly for the IT division. <b>KITAS</b> was developed to simplify asset management for the individuals responsible for overseeing IT resources, encompassing both physical and digital assets.</br><b>KITAS</b> features a complete workflow designed to automate the entire asset management process, from asset assignment and maintenance tracking to managing inventory and coordinating with third parties involved in purchasing, maintaining, and disposing of assets. This robust system ensures that asset management is efficient, transparent, and easily accessible.",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "Prisma ORM",
      "Microsoft SQL Server",
      "Chakra UI",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: travel,
    category: ["web"],
    title: "TRAVEL REQUEST",
    description:
      "Created a mini-ERP solution to automate manual travel documentation processes for **Kalbe International**, optimizing travel requests, fund disbursement, and expense reporting. This system integrates with Orlansoft ERP, automating journal entries in financial modules such as Cash/Bank Disbursement and Cash Receipt, thereby enhancing process efficiency company-wide.</br>Business travel is an integral part of operations at Kalbe International, given its global presence and expansion efforts. Travel requires careful financial management and authorization from various stakeholders. Prior to implementing the Travel Request system, travel expense requests and approvals were managed manually, often using Excel spreadsheets, resulting in inflexible data management that was difficult to access and lacked transparency.</br>The Travel Request application serves as a solution to automate these processes comprehensively. Functioning as a mini-ERP, it encompasses multiple phases, starting with the creation of travel proposals that detail the requestor’s information and the trip itinerary, including required expenses such as airfare, accommodation, and meals. Expenses can be requested in multiple currencies (USD and local currency), streamlining the approval process by relevant authorities in the target travel destinations.</br>The application also manages the disbursement process for travel funding, featuring three submenus: payment requests for travel expenses, reimbursements for excess payments, and management of funds not utilized (full refunds). This menu is accessible solely to cashiers and generates automatic journal entries in the Orlansoft ERP system.</br>Finally, the settlement process allows the traveler to report on their expenses against the funds provided by the company. This reporting process includes a chart of accounts (COA) and automatically creates journal entries in the ERP system, ensuring accurate financial tracking and reporting.",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "Prisma ORM",
      "Microsoft SQL Server",
      "Chakra UI",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: trev,
    category: ["web", "mobile"],
    title: "TREV (Tracking Event)",
    description:
      "TREV is a dynamic web and mobile application (developed in React Native) designed to manage events and sales performance across multiple business units for Kalbe International. This solution integrates real-time event planning, daily and periodic sales reporting, and performance tracking, delivering consistency, transparency, and efficiency in event execution globally.</br>Kalbe International, with its diverse brand portfolio, actively participates in various events worldwide. However, the existing manual event-tracking processes make it challenging to achieve real-time insights into each event's performance—whether tracking product sales, product sampling, or non-product activities like event partnerships. Additionally, Kalbe frequently collaborates with third-party agencies, utilizing SPGs and SPBs, but the manual system has posed risks to transparency, often leading to inaccuracies and discrepancies in sales reporting by these external parties.</br>TREV addresses these challenges by providing an end-to-end digital solution. The application’s **Event Planning** feature supports the creation and approval of event proposals, streamlining the entire approval workflow. Once an event is approved, TREV’s **Event Execution** feature enables comprehensive tracking, including attendance records for all sales personnel assigned to the event. It also provides detailed reporting on individual sales achievements, along with progress graphs for each product and salesperson, offering valuable insights for post-event evaluation.</br>Built with field adaptability in mind, TREV’s mobile app—developed in React Native—ensures that on-site personnel can seamlessly access and use the system. With offline database capabilities, the mobile app functions reliably even in low-connectivity environments. TREV empowers event coordinators and stakeholders, allowing them to monitor and manage events in real time, regardless of location or country, ensuring smooth operations and optimal performance across all territories.",
    technologies: [
      "ReactJs",
      "ExpressJs",
      "React Native",
      "Firebase",
      "Prisma ORM",
      "Microsoft SQL Server",
      "Chakra UI",
      "React Native Paper",
      "Vite",
      "Figma",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: mindsbot,
    category: ["web", "machine-learning"],
    title: "MindsCare - Mental Health Chabot",
    description:
      "In 2019, nearly a billion people worldwide were living with mental health disorders, with depression and anxiety being the most prevalent, according to the World Health Organization. Limited access to mental health consultation services has contributed to this alarming statistic. MindsCare was created as a solution to bridge this gap, offering **MindsBot** as a primary feature—a mental health chatbot powered by Natural Language Generation, built on the advanced Transformer Architecture using the GPT-2 XL Large Language Model (LLM).</br>MindsCare was developed as my final research project for completing my Bachelor’s degree at Politeknik Negeri Jakarta. It’s a web-based platform built with ReactJS and Flask, designed to provide accessible mental health support through conversational AI.</br>The chatbot model was created through hyperparameter tuning on GPT-2, trained on a dataset containing question-and-answer pairs related to mental health issues. This model was integrated into a web application, achieving a Word Perplexity score of 1.167, indicating a high-quality text generation capability. The chatbot’s validity was assessed through human evaluation by mental health experts, achieving an 82.5% validity score. Reliability testing, using Cohen's Kappa, yielded a coefficient of 0.4667, categorizing it as having moderate agreement. Functional system tests through Black Box Testing demonstrated a 100% success rate for positive scenarios. However, in negative scenarios, the chatbot currently lacks the capability to restrict inputs outside of mental health contexts.</br>MindsCare represents a significant step towards making mental health support more accessible, leveraging advanced AI to address one of the world’s most pressing health challenges.",
    technologies: [
      "ReactJs",
      "Flask",
      "Transformers Hugging Face",
      "GPT-2 XL LLM",
      "Chakra UI",
    ],
    siteUrl: "",
    isSiteAble: false,
  },
  {
    imgUrl: mekaar,
    category: ["web"],
    title: "Mekaar Prb-C DSS",
    description:
      "Mekaar Prb-C is one of the group-based capital programs intended for underprivileged women who are MSME actors in Parambahan Village, Tanah Datar, West Sumatra. This group was formed in 2019 and has approximately 60 members. Mekaar Prb-C is chaired by one person who acts as the person in charge as well as the Decision Maker in the organization.Problems that often arise in this organization are related to making decisions on loan amounts and selecting prospective borrowers. This happens because there are no clear and structured parameters to determine the decision. Based on these problems, we created a web-based platform called Mekaar Prb-C which is useful as a Decision Support System for making decisions about who is eligible to receive a loan. Mekarr Prb-C contains some information such as an introduction to DSS, an introduction to Mekaar Prb-C and a DSS calculation model using the AHP (Analytical Hierarchy Process) algorithm.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    siteUrl: "https://dsswithahp.000webhostapp.com/",
    isSiteAble: true,
  },
  {
    imgUrl: faceEmotionRecog,
    category: ["machine-learning"],
    title: "Face Emotion Detection",
    description:
      "Facial expressions are the most effective method for humans to express emotions. One emotion can give more information than words. In the world of machine learning, the use of facial expressions to detect emotions using a machine is quite widely used. For example in the field of Psychology. Facial emotion detection technology is used when counseling patients with psychologists. The results of this technology detection will be used to analyze patient disorders later by psychologists. The Facial Emotion Detection project that I built aims to create a machine learning model that can recognize 6 types of emotions (angry, fear, happy, neutral, sad, surprise) through facial expressions using the CNN algorithm. Which this model can later be used in various systems or applications that require this kind of artificial intelligence feature.",
    technologies: [
      "Python",
      "Tensorflow",
      "Keras",
      "Numpy",
      "Seaborn",
      "matplotlib",
    ],
    siteUrl: "https://github.com/fadillarahim/face-emotion-detection",
    isSiteAble: true,
  },
  {
    imgUrl: Chotrack,
    category: ["machine-learning", "mobile"],
    title: "Chotracker (Cholesterol Tracker)",
    description:
      "ChoTracker is a mobile application whose main feature is an artificial intelligence that can predict cholesterol numbers through eye pictures. This project was built in groups and I am responsible as a machine learning engineer whose job is to build machine learning models to predict cholesterol numbers through eye pictures. I use the Fuzzy Local Binary Pattern (FLBP) technique for feature extraction and Linear Regression to train the model so that it can predict cholesterol numbers based on the train dataset.",
    technologies: [
      "Python",
      "Tensorflow",
      "Keras",
      "Numpy",
      "Scikit Learn",
      "Scikit Image",
    ],
    siteUrl: "https://youtu.be/X65fvPUFLc0",
    isSiteAble: true,
  },
  {
    imgUrl: sibias,
    category: ["web"],
    title: "SIBIAS",
    description:
      "SIBIAS (Policy and Aspiration Information System) is an innovative web-based platform that aims to facilitate effective communication between the government and the public. As a dedicated social media platform, SIBIAS is used to disseminate government policy information and collect public aspirations. Low levels of understanding have led to misunderstandings among the population regarding government policies, resulting in various negative consequences. To address this issue, a policy Through SIBIAS, the public can express their aspirations, suggestions, and feedback directly to the government, while the government can inform about policies and receive feedback from the public. With the goal of strengthening citizen engagement and responsive governance, SIBIAS is expected to play a vital role in building an inclusive and democratic society.",
    technologies: ["React js", "CSS", "Node.js", "MySQL", "Bootstrap", "HTML"],
    siteUrl: "https://sibias.binasafetyindo.com/",
    isSiteAble: true,
  },
  {
    imgUrl: ChoBot,
    category: ["machine-learning", "mobile"],
    title: "ChoBot (ChoTracker Chat Bot)",
    description:
      "ChoBot is one of the Chat Bot features in the ChoTracker apps. ChoBot is a machine learning feature built using the Natural Language Processing (NLP) concept using several tools such as Tensorflow and NLTK. This feature allows users to ask questions about cholesterol in the chat feature and the system will answer them automatically.",
    technologies: ["Python", "Tensorflow", "Keras", "Numpy", "NLTK", "Pickle"],
    siteUrl:
      "https://github.com/ChoTracker-C23-PS308/ChoTracker-ML/blob/fadil/ChatBot_Model_2.ipynb",
    isSiteAble: true,
  },
  {
    imgUrl: Aleka,
    category: ["web", "design"],
    title: "Aleka.com",
    description:
      "Aleka is an e-commerce platform specifically for event organizers selling their services. Aleka is designed not only for wedding organizers but also for event organizers for other events such as government events, music festivals and others.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    siteUrl:
      "https://www.figma.com/proto/zAs1SpVxCpDRMSMgBqb0ez/ALEKA.COM?type=design&node-id=1-2449&t=LMEl0bFdG7AQ8PNH-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2449&mode=design",
    isSiteAble: true,
  },
  {
    imgUrl: Modaa,
    category: ["design"],
    title: "Modaa",
    description:
      "Modaa is an e-commerce that specializes in selling luxury and well-known brands. All items sold on Modaa are branded brands and not replicas or fakes. The Modaa is designed using Figma tools on the basis of a mobile application frame.",
    technologies: ["Figma", "Canva"],
    siteUrl:
      "https://www.figma.com/file/HYDKUc9BJEtj3iFlCW0wdV/MODAA-KELOMPOK-4?type=design&node-id=0%3A1&mode=design&t=vk0yKy9cujhDjK3N-1",
    isSiteAble: true,
  },
  {
    imgUrl: SaleroBasamo,
    category: ["design"],
    title: "Salero Basamo",
    description:
      "Salero Basamo is a Padang restaurant application whose name is taken from the name of the restaurant itself. This application is mobile-based and has the main function for ordering food and table reservations online. This application is designed as a solution to implementing social distancing during the Covid-19 period.",
    technologies: ["Figma", "Canva"],
    siteUrl:
      "https://www.figma.com/proto/ESKeAiUBayuR1REcLBc9iB/APBO?type=design&node-id=1-335&t=XSv3lqdUEbAAAsA0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A335&show-proto-sidebar=1&mode=design",
    isSiteAble: true,
  },
];

export default portofolios;
