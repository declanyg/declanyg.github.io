import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    swift,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    python,
    java,
    tensorflow,
    meta,
    starbucks,
    tesla,
    shopify,
    cdnis,
    bostonUniversity,
    adtende,
    mahjongTileRecognizer,
    jobit,
    tripguide,
    threejs,
    mahjongTileScorer,
    appStore,
    calendarScraper,
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
      id: "assignments",
      title: "Assignments",
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
      title: "IOS App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
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
      name: "Swift",
      icon: swift,
    },
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
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
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
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    }
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Highschool",
      company_name: "Candian International School of Hong Kong",
      icon: cdnis,
      iconBg: "#383E56",
      date: "August 2008 - May 2022",
      points: [
        "MYP and IB",
        "Took HL Math AA, Physics, Computer Science",
        "3D printed and coded electric piano with woodwork and arduino for personal project",
        "Learnt swift and java",
      ],
    },
    {
      title: "University",
      company_name: "Boston University",
      icon: bostonUniversity,
      iconBg: "#E6DEDD",
      date: "September 2022 - May 2026",
      points: [
        "BA in Computer Science",
        "Minor in Data Science",
        "Part of BostonHacks tech team",
        "Projected to graduate a year early"
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Adtende",
      description:
        "IOS application that helps users take attendance through the creation and scanning of QR codes. Integrated with Google Sheets.",
      tags: [
        {
          name: "Swift",
          color: "orange-text-gradient",
        },
        {
          name: "Google REST API",
          color: "green-text-gradient",
        },
        {
          name: "CocoaPods",
          color: "pink-text-gradient",
        },
      ],
      image: adtende,
      source_code_link: "https://apps.apple.com/us/app/adtende/id1584822471",
      project_link_image: appStore,
    },
    {
      name: "Mahjong Tile Scorer",
      description:
        "IOS application for scoring mahjong tile hands. Input mahjong tiles and it'll be scored based on the taiwanese scoring method. English and Chinese version.",
      tags: [
        {
          name: "Swift",
          color: "orange-text-gradient",
        },
        {
          name: "CocoaPods",
          color: "pink-text-gradient",
        },
      ],
      image: mahjongTileScorer,
      source_code_link: "https://github.com/declanyg/MahjongTileScorer",
      project_link_image: github,
    },
    {
      name: "Mahjong Tile Recognizer",
      description:
        "A mahjong tile image recognizer created using tensorflow. Part of a experiment to test the difference between activation functions relu and sigmoid.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "orange-text-gradient",
        },
        {
          name: "numpy",
          color: "blue-text-gradient",
        },
      ],
      image: mahjongTileRecognizer,
      source_code_link: "https://github.com/declanyg/MahjongTileRecognition",
      project_link_image: github,
    },
    {
      name: "Boston University Calendar Scraper",
      description:
        "Web app that automatically scrapes the user's MyBU current schedule with Pupeteer into a Google Calendar of their choice",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Pupeteer",
          color: "orange-text-gradient",
        },
      ],
      image: calendarScraper,
      source_code_link: "https://github.com/declanyg/calendar-automater-api",
      project_link_image: github,
    },
  ];

  const assignments = [
    {
      name: "Assignment 0",
      description:
        "Dummy assignment to add 2 numbers",
      source_code_link: "https://github.com/declanyg/declanyg-assignment-0",
      project_link_image: github,
    },
    {
      name: "Assignment 1: CDS Best Elevator Wait Location",
      description:
        "Assignment to determine the best possible wait location for the elevators in the CDS building in Boston University. Based on data recorded by students, analyzed and calculated in Python with matplotlib, numpy and pandas.",
      source_code_link: "https://github.com/declanyg/declanyg-assignment-1",
      project_link_image: github,
    },
    {
      name: "Assignment 2: KMeans Visualizer",
      description:
        "Assignment to demonstrate and visualize KMeans with varying centroids and initialization methods. ",
      video: "https://drive.google.com/file/d/1Mj0w9Y4x9jUGjMLnUkGqg4BlcGVrNJNG/preview",
      source_code_link: "https://github.com/declanyg/declanyg-assignment-2",
      project_link_image: github,
    },
    {
      name: "Assignment 3: SVD MNIST",
      description:
        "Assignment to apply SVD on the MNIST dataset to find the ideal number of components in the dataset to maximize the testing accuracy",
      source_code_link: "https://github.com/declanyg/declanyg-assignment-3",
      project_link_image: github,
    },
    {
      name: "Assignment 4: Latent Semantic Analysis Search Engine",
      description:
        "Assignment to create a search engine that searches run the SKlearn 20 news group dataset for the most similar articles. Achieved through the use of lsa and SVD.",
        video: "https://drive.google.com/file/d/1e5FL8F9S0UIKcZxpJe2Wqvo94oaOO6kS/preview",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-4",
      project_link_image: github,
    },
    {
      name: "Assignment 5: K-Nearest Neighbors",
      description:
        "Assignment to create a KNearestNeighbors classifer and the cross validation function from scratch.",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-5",
      project_link_image: github,
    },
    {
      name: "Midterm: CS506 Midterm Fall 2024",
      description:
        "CS506 midterm to predict predict the star rating associated with user reviews from Amazon Movie Reviews",
        source_code_link: "https://github.com/declanyg/declanyg-cs506-midterm",
      project_link_image: github,
    },
    {
      name: "Assignment 6: Linear Regression",
      description:
        "Assignment to create an interactive linear regression model that generates data and graphs.",
        video: "https://drive.google.com/file/d/11TeD2kAzW88UbioVy5O4WoO5AmRWs7DF/preview",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-6",
      project_link_image: github,
    },
    {
      name: "Assignment 7: Linear Regression Hypothesis Testing and Confidence Intervals",
      description:
        "Assignment to create an interactive linear regression model that generates data and graphs with hypothesis and confidence interval testing. An addition to the previous assignment 6",
        video: "https://drive.google.com/file/d/1lJtSG-QCndRRlAGP7v3NaN7-xL8J4OsM/preview",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-7",
      project_link_image: github,
    },
    {
      name: "Assignment 8: Logistic Regression Interactive Cluster Shift Experiment",
      description:
        "Assignment to create an interactive logistic regression cluster shift experiment that generates data and graphs based on a given cluster shift start, end and steps. It demonstrates how increasing the cluster width between the 2 given values affects logistic regression's performance on classifying clusters.",
        video: "https://drive.google.com/file/d/1mnB6p_uN6U-CSF7JXoSvpGd0uZnJR-3x/preview",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-8",
      project_link_image: github,
    },
    {
      name: "Assignment 9: Simple Neural Network Interactive Visualizer",
      description:
        "Assignment to create an interactive simple neural network visualizer that generates data and shows a training animation based on a given activation function, learning rate, and training steps.",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-9",
      project_link_image: github,
    },
    {
      name: "Assignment 10: Image Search",
      description:
        "Assignment to implement a simplified version of Google Image Search.",
        source_code_link: "https://github.com/declanyg/declanyg-assignment-10",
      project_link_image: github,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, assignments };