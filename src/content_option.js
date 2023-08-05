const logotext = "My Portfolio";
const meta = {
    title: "Jacob Peake",
    description: "",
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
    aboutme: "Hello ! I'm Jacob - a Computer Engineer. I have a deep curiosity for the application of technical knowledge to build products that can change the world around us. I am persistently seeking new challenges & opportunities to develop interesting projects - in both the software & hardware domains. As a dedicated and adaptable individual - I embrace new challenges as an opportunity to gain a new perspective & expand my abilities. I aspire to build intelligent systems that can enhance people's experiences & develop technology that can make the wonders of life more accessible to all.",
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
    {
        name: "System Verilog",
        value: 70,
    },
    {
        name: "HTML/CSS",
        value: 60,
    },
    {
        name: "JavaScript",
        value: 60,
    },
    {
        name: "MATLAB",
        value: 60,
    },
];

const services = [{
        title: "Software Engineering",
        description: "Proficient in C/C++ & Python. Most Proficient in Low-Level Software Design & Developing Skills in Machine Learing & Pytorch.",
    },
    {
        title: "Design",
        description: "Capable of executing tasks with a design-orientated mindset. Particularly - implementing new ideas to solve challenges in new or traditional problem domains - developing creative solutions. Participate often in Design Reviews for certain projects.",
    },
    {
        title: "Hardware Engineering",
        description: "Proficient in SystemVerilog & RTL Design. Developing HDL to solve certain challenges - such as developing RISC-V CPU. ",
    },
    {
        title: "Web Development",
        description: "Proficient in HTML, CSS, JavaScript & React to design visually-appealing, user-friendly webpages - such as this one.",
    },

];

const dataportfolio = [{
    img: process.env.PUBLIC_URL + "images/rocketbw.jpg",
    description: "Vega Avionics System",
    link: "/#/vega",
    },
    {
        img: "",
        description: "Autonomous Pathfinding Robot",
        link: "/#/pathfinder",
    },
    {
        img: process.env.PUBLIC_URL + "images/compiler.jpg",
        description: "C to RISC-V Compiler",
        link: "/#/compiler",
    }, 
    {
        img: "",
        description: "RISC-V CPU Design",
        link: "/#/riscv",
    }, 
    {
        img: process.env.PUBLIC_URL + "images/portfolio.jpg",
        description: "Webpage Portfolio Design",
        link: "/#/webpage",
    }, 


];

const contactConfig = {
    YOUR_EMAIL: "jacob.peake21@imperial.ac.uk",
    YOUR_FONE: "(+44) 7956-968583",
    description: "Please reach out with any opportunities you may have.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ybrgl6r",
    YOUR_TEMPLATE_ID: "template_npd2o1n",
    YOUR_USER_ID: "o9-AzcwxOKkJmqem8",
};

const socialprofils = {
    github: "https://github.com/jepeake",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/jacob-peake/",
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