export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Sanad Capital",
    description:
      "A clean, modern static website for Sanad Capital—a financial services firm—highlighting investment solutions, company information, and contact details.",
    technologies: ["HTML5", "CSS3", "Js"],
    github: "https://github.com/Moaz-Allam/Sanad_Capital_Website",
    demo: "https://www.odunsi.xyz/",
    image: require(".//../../public/projects/sanadcapital.png"),
    available: true,
  },
  {
    id: 1,
    name: "Homever",
    description:
      "This is a website for a Fintech Startup to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    technologies: ["HTML5", "CSS3", "JS"],
    github: "https://github.com/Moaz-Allam/Homever",
    demo: "https://interlock-teal.vercel.app/",
    image: require(".//../../public/projects/homever.png"),
    available: true,
  },
  {
    id: 2,
    name: "Covido App",
    description:
      "An all-in-one, cross-platform mobile application that lets users book medical appointments with ease—whether at a clinic, at home, or via video call.",
    technologies: ["Flutter", "Firebase", "Stripe"],
    github: "https://github.com/Moaz-Allam/Hotel_System",
    demo: "https://synthetix-iota.vercel.app/",
    image: require(".//../../public/projects/covido.png"),
    available: true,
  },
  {
    id: 3,
    name: "Hotel system",
    description:
      "React app for managing hotel staff: add, edit, and remove employee records; schedule shifts or interviews; generate and download PDF documents and send email notifications.",
    technologies: ["React", "Firebase", "Node Js"],
    github: "https://github.com/Moaz-Allam/Hotel_System",
    demo: "https://propellent.vercel.app/",
    image: require(".//../../public/projects/hotel.png"),
    available: true,
  },
  {
    id: 4,
    name: "Moviex",
    description:
      "Moviex lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/Moaz-Allam/moviex",
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
