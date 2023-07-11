import {
    mobile,
    exp,
    c,
    cpp,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    port,
    AI,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Event Management",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "President, Student Council",
      company_name: "IIT Ropar",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Official Representation of Student Body and Leader of Student Council: Acted as the voice and leader of the student community.",
        "Event Management at an official level: Successfully organized and executed important events.",
        "Advocacy for student rights, welfare, and academic interests: Promoted and protected student rights, welfare, and academic concerns."
      ],
    },
    {
      title: "Game Changer - Tech Fest",
      company_name: "IIT Ropar",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Dec 2022",
      points: [
        "Led the development and implementation of a comprehensive platform for contestants participating in the technical fest event.",
        "Utilized CSS, JavaScript, and EJS to create a real-time interface."
      ],
    },
    {
      title: "Competitive-Programming",
      company_name: "Codeofrces | Codechef",
      icon: shopify,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "Specialist @Codeforces | Max Rating - 1460",
        "4* Coder at Codechef"
        ,
      ],
    },
    {
      title: "Academics",
      // company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2021-2023",
      points: [
        "Awarded Merit-Cum-Means Fellowship (IIT Ropar) for being in top 7% (in academics) of my batch.",
        "Achieved 99.66 percentile in JEE main 2021 and among 2 % of students in JEE Advanced 2021",
        
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "AI Image Generation Mern App",
      description:
        " An AI image generation app inspired by DALL-E, empowering users to bring their descriptions to life by creating images and easily sharing them within their community. Built with the powerful combination of Cloudinary for image hosting, the MERN Stack for development, and OpenAI for AI capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "open ai",
          color: "blue-text-gradient",
        }
      ],
      image: AI,
      source_code_link: "https://githttps://github.com/naviket12/AI_Image_Generationhub.com/",
    },
    {
      name: "3D Developer Portfolio Website",
      description:
        "Introducing a versatile and dynamic 3D Developer Portfolio created with Three.js, React (JavaScript), and Tailwind CSS, designed not only to showcase my work, ongoing projects, achievements, and responsibilities but also to function as a dynamic CV that can be easily updated over time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "three js",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/naviket12/3D_Portfolio",
    },
    {
      name: "Exponential Trees - DSA",
      description:
        "Sorting a set of integers has been a very common problem that has had researchers' interesets since very long time.In this project we have implemented the Exponential Trees that gives the bound for sorting n integers of O(n loglogn). However the original algorithm is very complex and hard to implement so we have applied the modified exponential trees in this project.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Data Structures & Alogorithms",
          color: "green-text-gradient",
        },
      ],
      image: exp,
      source_code_link: "https://github.com/subham3604/Exponential--Trees",
    },
  ];
  
  export { services, technologies, experiences, projects };