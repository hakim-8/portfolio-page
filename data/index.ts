export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className:
      "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 lg:min-h-[60vh] lg:max-w-[47vw] md:max-h-[80vw] w-full col-span-1 row-span-1", // Added w-full and col-span-1 for small screens
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className:
      "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 relative lg:left-[-120px] lg:min-w-[34vw]", // Updated for sm
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 relative lg:left-[-120px] lg:min-w-[34vw]", // Updated for sm
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className:
      "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 lg:max-w-[30vw] lg:max-h-[28vh] w-full col-span-1 row-span-1", // Updated for sm
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently taking a cybersecurity course",
    description: "The Inside Scoop",
    className:
      "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 relative lg:left-[7px] lg:max-w-[54vw] lg:max-h-[62vh] w-full col-span-1 row-span-1", // Updated for sm
    imgClassName: "absolute top-0 right-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 lg:max-w-[30vw] lg:max-h-[30vh] relative lg:top-[-70px] w-full", // Updated for sm
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fitness App",
    des: "Fitness Hub is an interactive fitness platform where users can explore exercises with detailed descriptions and visual demonstrations. The site features a quiz that uses AI to generate a personalized weekly workout plan based on user input",
    img: "/s1.png",
    iconLists: ["/tail.svg", "/js.svg", "/react.webp", "axios.png"],
    link: "https://fitness-app-project-mhmm.netlify.app/",
    gitHubLink: "https://github.com/hakim-8/fitness-app-project",
  },
  {
    id: 2,
    title: "AI short video generator",
    des: "This AI-powered video generator site allows users to create personalized short videos by entering a story prompt. Users can choose an image style, set the video duration, and watch as the AI generates a custom video. Built with Next.js and Clerk for seamless user authentication.",
    img: "/s2.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/c.svg",
      "/react.webp",
      "/fb.png",
      "/neon.jpeg",
    ],
    link: "https://ai-short-video-generator-project-mhmm.netlify.app/",
    gitHubLink: "https://github.com/hakim-8/ai-short-video-generator-project",
  },
  {
    id: 4,
    title: "Construction Company Website",
    des: "This website built for Homestyle Concepts KE is a modern web app built with Next.js and React. It features a responsive design and integrates EmailJS to enable direct messaging via a dynamic contact form, ensuring seamless client communication.",
    img: "/s4.png",
    iconLists: ["/sql.png", "/next.svg", "/react.webp", "/c.svg", "/js.svg"],
    link: "https://homestyleconcepts.co.ke",
    gitHubLink: "https://github.com/hakim-8",
  },
  {
    id: 5,
    title: "Food store",
    des: "An interactive food store site built with Angular and Typescript with a dynamic filtering system, allowing users to sort by food group, and a smart shopping cart that automatically calculates totals as items are added. Styled with SCSS",
    img: "/s5.png",
    iconLists: ["/a.svg", "/ts.png", "/sass.png"],
    link: "https://food-page-project-mhm.netlify.app/",
    gitHubLink: "https://github.com/hakim-8/food-page-project",
  },
  {
    id: 6,
    title: "Portfolio Page",
    des: "This portfolio page, built with Next.js and TypeScript, features interactive 3D globe elements, animated buttons, and dynamic Lottie animations, showcasing projects with Three.js and React-three-fiber.",
    img: "/s6.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.png",
      "three.png",
      "/react.webp",
    ],
    link: "",
    gitHubLink: "https://github.com/hakim-8/portfolio-page",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Linux Systems Intern",
    desc: "Trained in Linux operations, including file organization and process scheduling, while troubleshooting and resolving system, network, and application errors.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Web Developer Intern",
    desc: "Completed a month of training in HTML, CSS, JavaScript, full-stack development, building and deploying a website for a mosque.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IT Implementation Intern",
    desc: "Assisted in implementing ERPNext to optimize operations, including setup, customization, data migration, testing, training, and support for seamless deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Social Media Management Apprentice",
    desc: "Assisted in managing social media accounts, managing social media ads, creating content, scheduling posts, analyzing performance, and engaging with audiences to boost growth.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
