import {
  mobile,
  backend,
  creator,
  web,
  java,
  python,
  flask,
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
  headstarter,
  tesla,
  shopify,
  carrent,
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
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter",
    icon: headstarter,
    iconBg: "#000000",
    date: "July 2024 - September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing projects from design to deployment leading 3 engineering fellows using MVC design patterns",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Core Member",
    company_name: "SRA: Society of Robotics and Automation",
    icon: tesla,
    iconBg: "#000000",
    date: "Jan 2023 - May 2024",
    points: [
      "Served as Core Member at the College Robotics club.",
      "Managed mentored, and co-conducted Wall-E (Self-Balancing Robot) and Pixels(Image Processing and Computer Vision) Seminar for over more than 200 freshman students.",
      "Contributed to open source repository of Pixels.",
      "Delivered lectures on Vectors in C++, LED Blink and Playing with Images and Image Representation.",
    ],
  },
  {
    title: "Mentee",
    company_name: "COC: Community of Coders",
    icon: shopify,
    iconBg: "#000000",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "MyntraMuse",
    description:
      "Web-based platform MyntraMuse is here to bridge this gap by empowering users to design their dream outfits with ease. Leveraging advanced AI technology, MyntraMuse allows Gen-Z fashion enthusiasts to input their style ideas and preferences, generating custom fashion designs that are uniquely tailored to their vision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "huggingfaceapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "iNFiniTy",
    description:
      "iNFiniTy serves as a digital marketplace for art collectors and creators to trade unique and rare digital art collectibles known as Non-Fungible Tokens (NFTs).Users can discover, buy, sell, and collect digital artworks securely on the blockchain. Artists retain control over their work and receive royalties for each subsequent sale on the secondary market.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };