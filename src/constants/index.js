import blog_web from "../assets/projects/blog_web.png";
import converter from "../assets/projects/converter.png";
import currencyExchanger from "../assets/projects/currencyExchanger.png";
import cicd_platform from "../assets/projects/cicd_platform.png";
import mercuryViz from "../assets/projects/mercuryViz.png";
import streamSmith from "../assets/projects/streamSmith.png";

export const HERO_CONTENT = `I am a software engineer with expertise in building scalable microservices and cloud-native applications. Through internships at companies like Schlumberger and Wintergreen, I have developed robust systems using Java, Spring Boot, C#, and Angular, while architecting solutions on AWS and Azure. My experience spans distributed systems with Redis caching and service discovery, CI/CD pipelines with ArgoCD, and container orchestration using Docker and Kubernetes. I'm passionate about leveraging AI tools and cloud technologies to create high-performance applications that solve real-world problems.`;

export const ABOUT_TEXT = `I am a Master's student in Computer Science at Northeastern University with a unique journey from Advertising to software engineering. My undergraduate background in Advertising Management, combined with a Computer Science minor (4.0 GPA), gives me a distinctive perspective on building technology that resonates with users. I've built microservices platforms on Azure, designed hybrid AWS architectures for healthcare applications, and developed AI-driven tools using the Gemini API and LangChain. I thrive at the intersection of technical excellence and human-centric design—whether optimizing MongoDB queries for 27% better performance or crafting intuitive React dashboards. Outside of coding, I'm an active member of women in tech communities including Grace Hopper Celebration and Rewriting the Code.`;

export const EXPERIENCES = [
  {
    year: "2025/06 - 2025/09",
    role: "Software Engineer Intern",
    company: "Schlumberger (SLB)",
    description: `Developed an internal task management platform using Angular and C#, enhancing team productivity and collaboration.
              Restructured NoSQL data models in MongoDB, achieving a 27% improvement in query execution through strategic indexing
      and storage design.
      Automated the release lifecycle by building ArgoCD pipelines and established real-time system health visibility with Grafana.`,
    technologies: ["Angular", "C#", "MongoDB", "Redis","Azure", "ArgoCD", "RESTful APIs", "Grafana"],
  },
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
  // {
  //   year: "2023/03 - 2023/12",
  //   role: "Software Engineer",
  //   company: "Huawei Technologies Co., Ltd",
  //   description: `Developed and executed a robust microservices-based sign-in system utilizing Java and Spring Boot tech stacks. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Java", "Spring Boot", "Zipkin", "Eureka", "Spring Cloud Gateway", "Hibernate", "Docker", "Prometheus"],
  // },
  {
    year: "2022/05 - 2022/12",
    role: "Software Engineer Intern",
    company: "Wuhan Xingtu Xinke Electronics Co., Ltd",
    description: `Contributed to the development of employee blogging website using React.js, Express.js and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MaterialUI"],
  },
];

export const PROJECTS = [
  {
    title: "MercuryViz: AI-Driven Chart Recommender",
    image: mercuryViz,
    description:
      "An intelligent data visualization tool that leverages Google Gemini API and LangChain to analyze CSV files and automatically generate chart recommendations. Features few-shot prompting strategies to categorize complex data columns (categorical, numerical, temporal) and a responsive React dashboard that presents AI-generated JSON specifications and chart logic.",
    technologies: ["React", "Python", "Flask", "Gemini API", "LangChain", "Pandas"],
  },
  {
    title: "Distributed CI/CD Platform",
    image: cicd_platform,
    description:
      "A distributed continuous integration platform with microservices architecture that processes YAML workflows with dependency resolution (DAG) and distributed job execution. Features a Go control plane with gRPC server, REST API, and RabbitMQ for reliable job distribution. Runners built in Rust handle isolated Docker container execution. Includes real-time log streaming via SSE to a React dashboard, scalable artifact storage with MinIO using presigned URLs, and Prometheus metrics for observability.",
    technologies: ["Go", "Rust", "React", "Docker", "PostgreSQL", "RabbitMQ", "MinIO", "Nginx"],
  },
  {
    title: "StreamSmith: Real-Time Data Pipeline",
    image: streamSmith,
    description:
      "A high-throughput, real-time data pipeline using Kafka and Spark for combined streaming and batch processing of traffic data, achieving a 30% boost in data processing efficiency. Orchestrated data ingestion with Airflow DAGs to reduce manual operational overhead. Utilized Cassandra for high-throughput writes and low-latency reads, with Confluent Control Center monitoring for streaming reliability.",
    technologies: ["Python", "Kafka", "Spark", "Airflow", "Cassandra", "PostgreSQL", "Docker"],
  },
   {
    title: "ConvertFlow: Video to MP3 Converter",
    image: converter,
    description:
      "A microservices-based application that converts video files into MP3 format with automated scaling capabilities. Implements user authentication with MySQL, file storage with MongoDB for optimized upload/download performance, and asynchronous message processing with RabbitMQ. Deployed on Kubernetes with Docker containerization for enhanced scalability.",
    technologies: ["Python", "MySQL", "MongoDB", "Docker", "RabbitMQ", "Kubernetes"],
  },
  {
    title: "CurrencyExchanger",
    image: currencyExchanger,
    description:
      "A microservice website made for online currency convert",
    technologies: ["Java", "SpringBoot", "JPA", "Eureka", "Zipkin", "Spring Cloud Gateway", "Docker", "EC2"],
  },
  {
    title: "BlogSphere",
    image: blog_web,
    description:
      "A full-stack blog website using the MERN stack ",
    technologies: ["React", "Node.js", "Express.js",  "MongoDB"],
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
  email: "peng.cai@northeastern.edu or pengcai99@gmail.com(Personal) ",
};
