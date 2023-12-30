import {
    mobile,
    backend,
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
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mongodb,
    forum,
    github,
    linkedin,
    email,
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
        title: "Responsive Design",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Front-End Development",
        icon: creator,
    },
    {
        title: "Beautiful Code",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
];

const profiles = [
    {

        name: "github",
        icon: github,
        url: "https://github.com/muktarabdela"
    },
    {

        name: "linkedin",
        icon: linkedin,
        url: "https://www.linkedin.com/in/muktarabdela"
    },
    {

        name: "email",
        icon: email,
        url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=muktarabdela10@gmail.com"
    }


]

const experiences = [
    {
        title: "full stack Developer",
        company_name: "gabiSkin",
        icon: starbucks,
        iconBg: "#383E56",
        date: "october 2023 - nov 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "As a self-driven Full Stack Developer, I have independently conceptualized, designed, and developed a comprehensive e-commerce platform. This bespoke solution is meticulously crafted to empower clients with a seamless and user-friendly environment, facilitating effortless product sales.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "- Integrated real-time updates for order and delivery statuses, facilitating timely information for administrators.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    // icon: starbucks,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    // {
    //     testimonial:
    //         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Sara Lee",
    //     designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];



const projects = [
    {
        projectId: "gabiSkin",
        name: "GabiSKin",
        description:
            "Web-based platform enabling users to effortlessly order, view, and manage their orders, while tracking delivery status. This solution caters to transportation needs, ensuring a convenient and efficient experience. With user-friendly features and real-time updates...  ",
        Url: "https://gabi.muka10.com",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        projectId: "evangadi_forum",
        name: "evangadi Forum",
        description:
            "Evangadi Tech Forum is a collaborative Q&A platform powered by Node.js, React, and MySQL. It features secure access with MySQL-based role assignments, markdown-enabled discussions, and a robust backend using Node.js and MySQL. The sleek UI, crafted with React and Tailwind CSS, ",
        Url: "https://evangadi-fourm.vercel.app/",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
        ],
        image: forum,
        source_code_link: "https://github.com/muktarabdela/evangadi-fourm",
    },
    {
        projectId: "amazon",
        name: "amazon",
        description:
            "Our ecommerce site, inspired by Amazon, relies on React and Node.js for a top-notch performance. Firebase seamlessly handles user authentication and database operations, while Stripe ensures secure payment processing. The React frontend provides a contemporary UI  ",
        Url: "https://amazonmu.netlify.app/",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        projectId: "netflix",
        name: "netflix",
        description:
            "Seamlessly integrated APIs with a movie database for the Netflix clone, actively utilizing diverse sources and documentation for enhanced learning through practical application. Implemented user authentication using Firebase to ensure a secure and personalized experience...",
        Url: "https://netflx1.netlify.app/",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "firbase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/muktarabdela/netflix-clone",
    },
];

const ProjectDetailData = [
    {
        name: "gabiSkin",
        title: "Project: GabiSkin - Local Sticker Company ",
        TheGoal: "The goal of the GabiSkin project was to develop a comprehensive web-based platform for a local sticker company. The primary objectives included creating an intuitive platform with themed sticker categories, implementing secure online ordering, and enhancing the overall customer experience.",

        TheChallenge: [
            " Secure Online Ordering: Implementing a secure online ordering system with integrated payment methods posed a challenge.Ensuring the protection of customer data and providing a seamless purchasing process required careful consideration.",

            " Real-time Updates: Integrating real- time updates for order and delivery statuses was a challenge, as it required synchronizing information between users and administrators in a timely manner.",
            " Efficient Data Storage: Utilizing MongoDB for efficient storage of product information, user data, and order details presented challenges in terms of data structure and retrieval efficiency."
        ],
        TheSolution:
            [
                "Secure Online Ordering: Implemented a robust and secure online ordering system with integrated payment methods, incorporating industry best practices for data encryption and transaction security.",

                " Real-time Updates: Developed a system for real-time updates on order and delivery statuses, enhancing communication between users and administrators. This included implementing push notifications or a similar mechanism.",

                "Efficient Data Storage: Leveraged MongoDB for efficient and scalable storage of product information, user data, and order details. Implemented optimal data models and indexing strategies for improved performance.",

                "Responsive React Components: Developed responsive React components to ensure an enhanced user experience across various devices, contributing to the platform's usability and accessibility.",

                "On-Time Delivery: Successfully delivered the project on time and within budget, contributing to the company's growth and meeting the expectations of stakeholders."
            ],
        youtube: `<iframe width="100%" height="345" src="https://www.youtube.com/embed/eu4SrGNlXo8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

        Outcome: "The GabiSkin project resulted in a successful, user-friendly platform that met the client's objectives. The implemented solutions addressed challenges effectively, ensuring a secure and efficient online ordering experience. The use of MongoDB for data storage and responsive React components contributed to the project's overall success. The timely delivery of the project further reinforced its positive impact on the company's growth and stakeholder satisfaction."
    },
    {
        name: "amazon",
        title: "Project: Amazon-inspired E-commerce Site ",
        TheGoal: "Create a user-friendly e-commerce platform, inspired by Amazon, with a contemporary and adaptable UI using React. Deliver a professional, secure, and user-centric shopping experience..",

        TheChallenge: [
            " Seamless User Authentication and Database Operations with Firebase. ",

            "Ensuring Secure Payment Processing using Stripe.",

            "Designing a Contemporary UI with React for a smooth user experience.",
            "Optimizing Node.js Backend for top-notch performance.        "
        ],
        TheSolution:
            [
                "Utilize Firebase for seamless user authentication and database operations.                ",

                " Integrate Stripe for secure and PCI-compliant payment processing.                ",

                "Develop the UI with React, focusing on responsiveness and user experience.",

                "Optimize the Node.js backend for efficient handling of concurrent user requests.                ",
            ],
        Outcome: "The result is a successful implementation of an Amazon-inspired e-commerce site that delivers an authentic shopping experience. The platform stands out for its professional design, secure user authentication, seamless database operations, and efficient payment processing. The user-centric approach ensures a positive and reliable interaction for customers, mirroring the standards set by Amazon",
        ScreenshotInfo: "dfdfdfdf",
        Screenshots: [
            "",
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
    },
    {
        name: "evangadi_forum",
        title: "Project:Evangadi Tech Forum:",
        TheGoal: "The primary goal of Evangadi Tech Forum is to create a collaborative Question and Answer (Q&A) platform that prioritizes seamless discussions and effortless knowledge sharing within the tech community. The platform aims to facilitate interactive discussions and provide a space where users can ask questions, share knowledge, and engage in meaningful conversations related to technology.",

        TheChallenge: [
            "Secure Access: Implementation of a secure login system using MySQL - based role assignments. Ensuring data privacy and protection of user information.",

            " Interactive Discussions: Developing a feature-rich Q&A platform that supports Markdown for formatting questions and answers. Enabling seamless knowledge sharing among users.",

            "Robust Backend: Building a robust backend using Node.js to handle collaborative data processing. Ensuring efficient communication between the frontend and backend for a smooth user experience.",

            "Sleek UI: Crafting a modern and user - friendly interface using React and Tailwind CSS. Focusing on aesthetics and usability to enhance the overall user experience.",
            "Responsive Content: Implementing dynamic content delivery while handling real-time updates efficiently. Ensuring a responsive design that adapts well to different devices and screen sizes."
        ],
        TheSolution:
            [
                "Secure Access: Implementation of a robust authentication system using MySQL-based role assignments to ensure secure access to the platform.",

                " Interactive Discussions: Development of a feature-rich Q&A platform with Markdown support for creating and formatting interactive discussions.",

                "Robust Backend:  Utilizing Node.js for the backend to efficiently handle collaborative data processing and communication between the frontend and backend.",

                "Sleek UI: Crafting a modern and aesthetically pleasing user interface using React and Tailwind CSS to enhance the overall user experience.",

                "Responsive Content:  Implementation of dynamic content delivery to ensure real-time updates and responsiveness across various devices and screen sizes."
            ],
        youtube: `<iframe width="100%" height="345" src="https://www.youtube.com/embed/0UKQlBGFvgA?si=mbw3JgDrE-uJzJHf" title="YouTube video player" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

        Outcome: "Evangadi Tech Forum delivers a user-centric Q&A platform, ensuring secure access, interactive discussions with Markdown support, a robust backend powered by Node.js and MySQL, a sleek UI crafted with React and Tailwind CSS, and responsive content delivery. The result is a dependable and effortless platform for seamless collaboration and knowledge sharing within the tech community."
    },
    {
        name: "netflix",
        title: "Project: Netflix Clone ",
        TheGoal: "Create a Netflix-like web app, featuring dynamic movie data from an external API, user authentication, and the ability for users to save favorite movies. ",

        TheChallenge: [
            "API Integration: Seamlessly integrate with a movie database API, mastering asynchronous requests and dynamic UI updates.",

            " User Authentication: Implement secure user sign-up, login, and logout using Firebase Authentication.",

            "Firebase Integration: Overcome challenges in setting up Firebase, configuring authentication, and using Firestore for data storage"
        ],
        TheSolution:
            [
                "API Integration: Thoroughly explore API documentation, make asynchronous requests, and dynamically update the UI with fetched movie details.",

                "User Authentication: Leverage Firebase Authentication for secure user management and association of user-specific data.",

                " Firebase Integration: Seamlessly integrate Firebase to handle user authentication and utilize Firestore for storing and retrieving user-specific information.",
            ],
        youtube: `<iframe width="100%" height="345"  src="https://www.youtube.com/embed/ecyKKZr-32A?si=lFQf55f3OIhtUsnw" title="YouTube video player" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        Outcome: "The Netflix Clone project successfully replicated the Netflix experience while providing practical insights into API integration, user authentication, and Firebase utilization."
    },
]

export { services, technologies, experiences, testimonials, projects, ProjectDetailData, profiles };