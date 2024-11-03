import { FaBrain, FaDesktop, FaMobileAlt, FaPenNib } from "react-icons/fa";

export const servicesData = [
    {
        title: "Web Development",
        description: "Build dynamic web applications using JavaScript frameworks such as React.js and Express.js, integrating tools like Prisma ORM and Tailwind CSS for optimal performance.",
        icon: <FaDesktop color='white' />
    },
    {
        title: "Mobile App Development",
        description: "Develop cross-platform mobile applications with React Native, utilizing React Native Paper for a polished user interface and seamless functionality.",
        icon: <FaMobileAlt color='white' />
    },
    {
        title: "UI/UX Design",
        description: "Create engaging user interfaces and experiences using Figma, focusing on user-centric design principles and usability testing.",
        icon: <FaPenNib color='white' />
    },
    {
        title: "Machine Learning, Data Science, and Analytics",
        description: "Utilize Python and libraries such as TensorFlow and Keras to build machine learning models, alongside data visualization tools like Tableau and SQL for impactful data analysis.",
        icon: <FaBrain color='white' />
    },
]