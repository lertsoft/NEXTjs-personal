// Constant data.
// This method allows for an easier and more streamline data management for the site.
const userData = {
  githubUsername: "lertsoft",
  name: "Ronny Coste",
  designation: "Software Engineer",
  avatarUrl: "/rccolor.JPG",
  email: "contact@ronnycoste.com",
  phone: "+1 201-473-2041",
  address: "New york, NY",
  projects: [
    {
      title: "Curated By",
      link: "https://curatedby.ronnycoste.com",
      imgUrl: "/curatedby.jpg",
    },
    {
      title: "Cinema",
      link: "https://cinema.ronnycoste.com",
      imgUrl: "/cinema.jpg",
    },
    {
      title: "Lifecycle",
      link: "https://lifecycle.vercel.app",
      imgUrl: "/lifecycle.png",
    },

    {
      title: "Three JS",
      link: "https://vanilla3d.netlify.app",
      imgUrl: "/three.jpg",
    },
    {
      title: "Resume",
      link: "https://resume.ronnycoste.com",
      imgUrl: "/resume.jpg",
    },
    {
      title: "Wealth at scale of Jeff Bezoz",
      link: "https://pixelwealth.ronnycoste.com",
      imgUrl: "/WealthAtScale.png",
    },
    {
      title: "BeautifiedTab",
      link: "https://chrome.google.com/webstore/detail/new-tab-photography-with/ifokjpcjioaipganojgpkemhhillgenf?hl=en&authuser=0",
      imgUrl: "/beautifiedTab.jpg",
    },
    {
      title: "Template ready with my favorite tooling",
      link: "https://github.com/lertsoft/typescript_nextjs_template",
      imgUrl: "/Template.png",
    },
    {
      title: "Personal Site",
      link: "https://ronnycoste.com",
      imgUrl: "/nextPersonal.png",
    },
    {
      title: "Gallery du Coste",
      link: "https://gallery.ronnycoste.com",
      imgUrl: "/gallery.png",
    },
    {
      title: "Blog built with NextJS and Notion",
      link: "https://blog.ronnycoste.com",
      imgUrl: "/blog.png",
    },
    {
      title: "IPFS hosted Portfolio Site",
      link: "https://ipfs.ronnycoste.com",
      imgUrl: "/Portfolio.jpg",
    },
    {
      title: "Hackathon, Environment Track Winner - reVive",
      link: "https://devpost.com/software/cuny-hackathon-2019#updates",
      imgUrl: "/revive.jpg",
    },
  ],
  about: {
    title:
      "I am a software engineer that loves to build web apps, and learning about designing interfaces.",
    description: [
      `I have been involved in technology since middle school when I started hacking and breaking down my PSP, and android device. Mostly worked on hardware which is why I started on the path of networking.`,
      `I started tinkering more with scripts and HTML, CSS when I was learning C# but everything that i learned I used it to modify scripts to automate almost all my repetitve task on my phone, and laptop.`,
      `Now those days are gone and I have come far to being quite comfortable with Javascript, and Python after dozens of reddit and stack overflow explainers... `,
      `My focus right now is continue improving in all of these: JS, NEXT.js, REACT.js, NODE.js, EXPRESS.js, CHAKRA-UI, TAILWIND-CSS, ETHER.js, PYTHON, SOLIDITY, TYPESCRIPT, SQL, BASH, R, C++, AWS, GCLOUD, and a lot more.`,
    ],
    currentProject: "Lifecycle",
    currentProjectUrl: "https://lifecycle.vercel.app",
  },
  experience: [
    {
      title: "Director of Photography & Camera Assistant Freelancer ",
      company: "Freelancer",
      year: "2021 - Present",
      companyLink: "",
      desc: "Managed new clients creative accounts, collaborated with research companies and marketing departments to create content relevant to their audiences.",
    },
    {
      title: "Director of Photography & Camera Assistant Contractor",
      company: "Belle Image Productions",
      year: "2021 - Present",
      companyLink: "https://belleimageproduction.com",
      desc: "Collaborated with the Director & Producer to create films that encapsulate the clients’ goals. Executed the Director’s vision and feel of the film without concise information from the director.  ",
    },
    {
      title: "Software Developer Fellow",
      company: "CUNY TECH PREP",
      year: "2020 - 2021",
      companyLink: "https://cunytechprep.nyc",
      desc: "Learned in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployments such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test-driven development, and CI/CD.  ",
    },
    {
      title: "B.S. in Computer Science and Information Security",
      company: "John Jay College, NYC, NY",
      year: "2019 - 2021",
      companyLink: "https://www.jjay.cuny.edu",
      desc: "Learned to manage teams in a software development team, How to implement different data structures, and Algorithms in an application.",
    },
    {
      title: "Cuny Hackathon participant",
      company: "Cuny Hackathon",
      year: "2019",
      companyLink: "https://devpost.com/software/cuny-hackathon-2019#updates",
      desc: "Won the sustainable award and Second best application out of 20 teams. *Created a user-friendly application in a team of 5 that uses the smartphone camera to snap a photograph and uses firebase cloud computers to analyze objects and demonstrate where you can recycle them. Developed using react Native to code the mobile app and used the Earth911 and NYCopendata API to gather recycling information. Visualized the layout and color palette of the application using Adobe XD and Figma.",
    },
    {
      title: "Staff",
      company: "New York City Urban Debate League",
      year: "2017 - 2019",
      companyLink: "https://debate.nyc",
      desc: "Mentored a group of 20 middle schoolers from immigrant families on how to become a better Debaters and how they can improve their English and native language by debating with other students.",
    },
    {
      title: "IT Intern",
      company: "TesercomDO",
      year: "2017",
      companyLink: "",
      desc: "Wrote, and update all the documentation for all the clients at the time. While Providing IT support for our clients network and data center infraestructure. ",
    },
    {
      title: "Associate of Science in Network Technology",
      company: "ITLA, Santo Domingo, DR",
      year: "2015 - 2017",
      companyLink: "https://itla.edu.do/",
      desc: "Learned about setting up an networking infraestructure from the ground up. How to design robust networks. Also how to manage, mantain, and scale networks for global enterprises using cisco hardware.",
    },
    
    {
      title: "Social Development Intern ",
      company: "TechoDR",
      year: "2016 - 2017",
      companyLink: "https://rd.techo.org",
      desc: "Planned, developed, and coordinated logistic activities with corporate teams using Google Workspace software such as  Calendar, Docs, Sheets, and Drive to seamlessly collaborate with other volunteers and staff members. Also analyse data and built visualization model for the director of the team and other stakeholders at the NGO.",
    },
    {
      title: "IT Intern ",
      company: "Bonanza Dominicana",
      year: "2015 - 2015",
      companyLink: "hhttps://www.bonanza.com.do",
      desc: "Troubleshooted hardware, software, and networks so that the company infrastructure stayed on 24/7. Provided first-tier support to a network of over 40 End Users. Added over 10 support articles to the IT Support Database. Facilitated on-site and remote support to end users, and perform post-resolution follow-ups to ensure the service was effective. Visited branch offices for hands-on support on the companies equipment.",
    },
    {
      title: "High School",
      company: "UNPHU, Santo Domingo, DR",
      year: "2012 - 2015",
      companyLink: "https://copphu.edu.do",
      desc: "Took a two year technical program that thought us programming basics on C#, Design with adobe photoshop, and Data analitics with Excel. was part of the first debate team, Soccer team, and participated in a film festival. ",
    },
  ],
  BlogPost: [
    {
      title: "Japanese Crashcourse",
      desc: "The little things that I know in japanese are here.",
      link: "https://blog.ronnycoste.com/japanese",
      date:"08.12.2022",
    },
    {
      title: "Values worksheet",
      desc: "My personal values on a blog post. This worksheet I finished back in 2020 that i felt i needed because i was drifting apart from what was truly important to me.",
      link: "https://blog.ronnycoste.com/values-worksheet",
      date:"06.09.2022",
    }, 
    {
      title: "24 failures & Successes by the age of 24",
      desc: "My successes and failures.",
      link: "https://blog.ronnycoste.com/my_failures_and_successes",
      date:"05.30.2022",
    },
    {
      title: "Why did I choose NextJS to build my websites?",
      desc: "I started using Next in January and fell in love with it. Now all my sites are based on it.",
      link: "https://blog.ronnycoste.com/why-did-i-choose-nextjs-to-build-my-websites",
      date:"06.17.2022",
    },
    {
      title: "My Favorite Apps",
      desc: "This are the apps that I use on a day to day basis",
      link: "https://blog.ronnycoste.com/my-favorite-apps",
      date:"07.28.2022",
    },
    {
      title: "Decentralized Front-End with IPFS",
      desc: "My experience hosting my personal website on IPFS.",
      link: "https://blog.ronnycoste.com/decentralized-front-end-with-ipfs",
      date:"07.01.2022",
    },
  ],
  resumeUrl:
    "https://docs.google.com/document/d/1hsroxazSC8G1tRMweraSicSZWmVLqG7tHHrRo5z6NG8/edit?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/costeronny",
    twitter: "https://twitter.com/costeronny",
    linkedin: "https://linkedin.com/in/ronnycoste",
    github: "https://github.com/lertsoft",
    contact: "https://ronnycoste.com/contact",
    gallery: "https://gallery.ronnycoste.com/"
  },
};

export default userData;
