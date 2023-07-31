import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import mekaar from "../images/mekaar.png"
import sibias from "../images/sibias.png"
import faceEmotionRecog from "../images/faceRecog.png"
import Chotrack from "../images/ChoTracker.jpg"
import ChoBot from "../images/ChoBot.png"

const portofolios = [
    {
        id: "01",
        imgUrl: mekaar,
        category: "Web Dev",
        title: "Mekaar Prb-C DSS",
        description:
          "Mekaar Prb-C is one of the group-based capital programs intended for underprivileged women who are MSME actors in Parambahan Village, Tanah Datar, West Sumatra. This group was formed in 2019 and has approximately 60 members. Mekaar Prb-C is chaired by one person who acts as the person in charge as well as the Decision Maker in the organization.Problems that often arise in this organization are related to making decisions on loan amounts and selecting prospective borrowers. This happens because there are no clear and structured parameters to determine the decision. Based on these problems, we created a web-based platform called Mekaar Prb-C which is useful as a Decision Support System for making decisions about who is eligible to receive a loan. Mekarr Prb-C contains some information such as an introduction to DSS, an introduction to Mekaar Prb-C and a DSS calculation model using the AHP (Analytical Hierarchy Process) algorithm.",
        technologies: ["HTML", "CSS", "PHP", "MySQL"],
        siteUrl: "https://dsswithahp.000webhostapp.com/",
      },
      {
        id: "02",
        imgUrl: faceEmotionRecog,
        category: "Machine Learning",
        title: "Face Emotion Detection",
        description:
          "Facial expressions are the most effective method for humans to express emotions. One emotion can give more information than words. In the world of machine learning, the use of facial expressions to detect emotions using a machine is quite widely used. For example in the field of Psychology. Facial emotion detection technology is used when counseling patients with psychologists. The results of this technology detection will be used to analyze patient disorders later by psychologists. The Facial Emotion Detection project that I built aims to create a machine learning model that can recognize 6 types of emotions (angry, fear, happy, neutral, sad, surprise) through facial expressions using the CNN algorithm. Which this model can later be used in various systems or applications that require this kind of artificial intelligence feature.",
        technologies: ["Python", "Tensorflow", "Keras", "Numpy", "Seaborn", "matplotlib"],
        siteUrl: "https://github.com/fadillarahim/face-emotion-detection",
      },
      {
        id: "03",
        imgUrl: Chotrack,
        category: "Machine Learning",
        title: "Chotracker (Cholesterol Tracker)",
        description:
          "ChoTracker is a mobile application whose main feature is an artificial intelligence that can predict cholesterol numbers through eye pictures. This project was built in groups and I am responsible as a machine learning engineer whose job is to build machine learning models to predict cholesterol numbers through eye pictures. I use the Fuzzy Local Binary Pattern (FLBP) technique for feature extraction and Linear Regression to train the model so that it can predict cholesterol numbers based on the train dataset.",
        technologies: ["Python", "Tensorflow", "Keras", "Numpy", "Scikit Learn", "Scikit Image"],
        siteUrl: "https://youtu.be/X65fvPUFLc0",
      },
      {
        id: "04",
        imgUrl: sibias,
        category: "Web Dev",
        title: "SIBIAS",
        description:
          "SIBIAS (Policy and Aspiration Information System) is an innovative web-based platform that aims to facilitate effective communication between the government and the public. As a dedicated social media platform, SIBIAS is used to disseminate government policy information and collect public aspirations. Low levels of understanding have led to misunderstandings among the population regarding government policies, resulting in various negative consequences. To address this issue, a policy Through SIBIAS, the public can express their aspirations, suggestions, and feedback directly to the government, while the government can inform about policies and receive feedback from the public. With the goal of strengthening citizen engagement and responsive governance, SIBIAS is expected to play a vital role in building an inclusive and democratic society.",
        technologies: ["React js", "CSS", "Node.js", "MySQL", "Bootstrap", "HTML"],
        siteUrl: "https://sibias.binasafetyindo.com/",
      },
      {
        id: "05",
        imgUrl: ChoBot,
        category: "Machine Learning",
        title: "ChoBot (ChoTracker Chat Bot)",
        description:
          "ChoBot is one of the Chat Bot features in the ChoTracker apps. ChoBot is a machine learning feature built using the Natural Processing Language (NLP) concept using several tools such as Tensorflow and NLTK. This feature allows users to ask questions about cholesterol in the chat feature and the system will answer them automatically.",
        technologies: ["Python", "Tensorflow", "Keras", "Numpy", "NLTK", "Pickle"],
        siteUrl: "https://github.com/ChoTracker-C23-PS308/ChoTracker-ML/blob/fadil/ChatBot_Model_2.ipynb",
      },
    
      {
        id: "06",
        imgUrl: portfolioImg06,
        category: "Ux",
        title: "Online Therapy Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "07",
        imgUrl: portfolioImg07,
        category: "Web Dev",
        title: "Appointment Booking Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "08",
        imgUrl: portfolioImg01,
        category: "Web Dev",
        title: "Finance Technology Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "09",
        imgUrl: portfolioImg02,
        category: "Ux",
        title: "Video Conference Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "10",
        imgUrl: portfolioImg03,
        category: "Ux",
        title: "File Sharing Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "11",
        imgUrl: portfolioImg04,
        category: "Web Dev",
        title: "Landing Page",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "12",
        imgUrl: portfolioImg05,
        category: "Web Dev",
        title: "Landing Page",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "13",
        imgUrl: portfolioImg06,
        category: "Web Dev",
        title: "Online Therapy Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
      {
        id: "14",
        imgUrl: portfolioImg07,
        category: "ux",
        title: "Appointment Booking Website",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
        technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
        siteUrl: "#",
      },
];

export default portofolios;