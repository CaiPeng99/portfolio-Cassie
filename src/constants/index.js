import blog_web from "../assets/projects/blog_web.png";
import converter from "../assets/projects/converter.png";
import currencyExchanger from "../assets/projects/currencyExchanger.png";


export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable web applications. With hands-on experience and a track record of successful projects, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I am well-versed in cloud computing techniques, including deploying and managing applications on platforms like AWS, as well as utilizing tools like Docker and Kubernetes for containerization and orchestration. My goal is to leverage my expertise to create innovative, cloud-native solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. As a passionate and dedicated girl with a background in Advertising Management during my undergraduate studies, I bring a unique perspective to the intersection of technology and human-centric approaches, Psychology, Advertising, Economics and Marketing. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025/01 - 2025/05",
    role: "Cloud Archiitect Intern",
    company: "Wintergreen",
    description: `Focus on Cloud Infrastructure & Full-Stack Development with PHP and Laravel;
            Cloud Infrastructure: Hands-on experience with AWS services including EC2, S3, RDS, ELB, Route 53, and more.
            Full-Stack Development: Built and optimized applications using PHP and Laravel, ensuring robust backend systems and seamless user experiences.`,
    technologies: ["AWS", "PHP", "Laravel","Vue.js", "Postman", "EC2", "S3", "RDS", "ELB", "Route 53"],
  },
  {
    year: "2024/8 - Present/12",
    role: "Student Developer",
    company: "Develop For Good",
    description: `Collaborated with a nonprofit organization to develop a mobile application aimed at providing financial knowledge for k12 students. Designed and implemented interactive app features using Expo, React.js and Firebse to enhance user engagement and accessibility. Collaborated with teammates and client to define project requirements and timelines.`,
    technologies: ["React.js", "Expo", "Firebase"],
  },
  {
    year: "2023/03 - 2023/12",
    role: "Software Engineer",
    company: "Huawei Technologies Co., Ltd",
    description: `Developed and executed a robust microservices-based sign-in system utilizing Java and Spring Boot tech stacks. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Java", "Spring Boot", "Zipkin", "Eureka", "Spring Cloud Gateway", "Hibernate", "Docker", "Prometheus"],
  },
  {
    year: "2022/05 - 2022/12",
    role: "Software Intern",
    company: "Wuhan Xingtu Xinke Electronics Co., Ltd",
    description: `Contributed to the development of employee blogging website using React.js, Express.js and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MaterialUI"],
  },
];

export const PROJECTS = [
  {
    title: "BlogSphere",
    image: blog_web,
    description:
      "A full-stack blog website using the MERN stack ",
    technologies: ["React", "Node.js", "Express.js",  "MongoDB"],
  },
  {
    title: "Video_to_mp3_converter",
    image: converter,
    description:
      "A project to convert video to mp3",
    technologies: ["Python", "MySQL", "MongoDB", "RabbitMQ", "Docker", "Kubernetes", "k9s"],
  },
  {
    title: "CurrencyExchanger",
    image: currencyExchanger,
    description:
      "A microservice website made for online currency convert",
    technologies: ["Java", "SpringBoot", "JPA", "Eureka", "Zipkin", "Spring Cloud Gateway", "Docker", "EC2"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "US ",
  phoneNo: "+1 207 331 1650 ",
  email: "peng.cai@northeastern.edu",
};
