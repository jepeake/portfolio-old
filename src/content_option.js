const logotext = "My Portfolio";
const meta = {
    title: "Jacob Peake",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Jacob Peake",
    animated: {
        first: "Computer Engineer",
        second: "Developing Software",
        third: "Building Things",
    },
    description: "Computer Engineer @ Imperial College.",
    your_img_url: "https://raw.githubusercontent.com/jepeake/portfolio/main/src/assets/images/QT.jpg",
};
const dataabout = {
    title: "About Me",
    aboutme: "Hello ! I'm Jacob - a Computer Engineer & Designer. I have a deep curiosity for the application of technical knowledge to build products that can change the world around us. I am persistently seeking new challenges & opportunities to develop interesting projects - in both the software & hardware domains. As a dedicated and adaptable individual - I embrace new challenges as an opportunity to gain a new perspective & expand my abilities. I aspire to build intelligent systems that can enhance people's experiences & develop technology that can make the wonders of life more accessible to all.",
};
const worktimeline = [{
        jobtitle: "Computer Engineering MEng",
        where: "Imperial College London",
        date: "2021-2025",
    },
    {
        jobtitle: "Avionics Engineer",
        where: "Karman Space Programme",
        date: "2023",
    },
    {
        jobtitle: "Software Engineer (Internship)",
        where: "Qualcomm",
        date: "2023",
    },
];

const skills = [{
        name: "C++",
        value: 80,
    },
    {
        name: "C",
        value: 80,
    },
    {
        name: "Python",
        value: 70,
    },
];

const services = [{
        title: "Software Engineering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Hardware Engineering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },

];

const dataportfolio = [{
    img: process.env.PUBLIC_URL + "images/rocketbw.jpg",
    description: "Vega Avionics System",
    link: "/vega",
    },
    {
        img: "",
        description: "Autonomous Pathfinding Robot",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "images/compiler.jpg",
        description: "C to RISC-V Compiler",
        link: "/compiler",
    }, 
    {
        img: "",
        description: "RISC-V CPU Design",
        link: "/riscv",
    }, 
    {
        img: process.env.PUBLIC_URL + "images/portfolio.jpg",
        description: "Webpage Portfolio Design",
        link: "/webpage",
    }, 


];

const contactConfig = {
    YOUR_EMAIL: "jacob.peake21@imperial.ac.uk",
    YOUR_FONE: "(+44) 7956-968583",
    description: "Please reach out with any opportunities you may have.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/jepeake",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/jacob-peake",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};