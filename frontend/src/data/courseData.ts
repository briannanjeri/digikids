import { ICourse } from '@digikids/types'

interface IRawCourseData extends Omit<ICourse, 'short_desc' | 'id' | 'meta_desc'> {}

export const rawCourseData: IRawCourseData[] = [
  {
    title: 'Creative Computing with Scratch',
    ageGroup: '6-8 Years',
    img: 'scratchDev.png',
    isAvailable: true,
    duration: '11 Sessions',
    course_outline: 'Online',
    level: 'Beginner',
    course_price: '7000',
    lesson: 11,
    language: 'Scratch',
    certificate: 'Yes',
    course_desc:
      'Our Creative Computing with Scratch course is designed to spark creativity and innovation in young minds. Through this course, students learn the basics of coding by creating interactive stories, animations, and games using Scratch, a beginner-friendly programming language. Students explore key concepts such as loops, conditionals, variables, and events, as they bring their ideas to life in a fun and engaging way. Our experienced tutors guide students through the process, providing personalized feedback and support to help them build confidence and develop essential problem-solving skills.',
    course_desc_2:
      'The course is suitable for students of all levels, from beginners with no coding experience to those with some prior knowledge. Our curriculum is structured to meet the needs of different age groups, with age-appropriate projects that challenge and inspire young learners. By the end of the course, students will have gained a solid foundation in coding, computational thinking, and creative problem-solving. They will have created their own portfolio of projects that demonstrate their skills and creativity, and they will have a strong foundation for further study in computer science and technology',
    whyThisCourse:
      'Creative Computing with Scratch is an excellent course for anyone looking to develop their coding skills and explore their creativity. By learning how to code and design interactive animations, games, and stories, students can improve their problem-solving, logic, and critical thinking skills. In addition, Scratch programming language is a beginner-friendly language that can be used to introduce anyone to the world of coding.',
    learn_list: [
      'How to use Scratch programming language to create interactive stories, animations, and games.',
      'Basic programming concepts such as sequencing, loops, conditionals, and variables.',
      'Computational thinking skills such as problem-solving, logical reasoning, and abstraction.',
      'How to collaborate with others to design and develop projects, receive feedback, and iterate on their work.',
    ],
    curriculum_desc:
      'With the increasing demand for digital skills in the workforce, this course can help students gain valuable skills that can set them apart in their future careers. By taking this course, students can gain a solid foundation in coding and digital literacy, which can be applied in a variety of fields. This course is an excellent opportunity for anyone looking to gain practical skills in coding, storytelling, and design thinking, and to become a more confident digital citizen',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'In this lessons, you will learn the basics of Scratch programming by creating your first project. You will explore the Scratch interface, create and manipulate sprites, and add simple animations and sounds to your project.',
        lessons: [
          { title: 'Introduction to Scratch', icon: 'icon-68' },
          { title: 'Sprites and the Scratch UI', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'In this lessons, you will learn how to use motion and control blocks to make your sprites move and interact with the user. You will also learn how to use variables and loops to create more complex animations and games.',
        lessons: [
          { title: 'Scratch Motion and Control', icon: 'icon-68' },
          { title: 'Variables and Loops', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'In this lessons, you will learn how to use events and sensing blocks to trigger actions in your Scratch project. You will also learn how to use conditionals and operators to make your project respond to user input.',
        lessons: [
          { title: 'Scratch Events', icon: 'icon-68' },
          { title: 'Sensing in scratch', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: 'In this lesson, you will learn how to use costumes and sound blocks to enhance the visuals and audio of your Scratch project. You will also learn how to use pen blocks to draw shapes and lines on the stage.',
        lessons: [
          { title: 'Scratch Costumes', icon: 'icon-68' },
          { title: 'Scratch Sound', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'In this lesson, you will learn how to debug and troubleshoot common errors and problems in your Scratch projects. You will also learn how to use the Scratch community and resources to improve your skills and create more complex projects.',
        lessons: [
          { title: 'The Scratch community', icon: 'icon-68' },
          { title: 'Scratch Debugging and Troubleshooting', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'You do your assessment and final project and present it to the class.',
        lessons: [{ title: 'Assessment & final project', icon: 'icon-68' }],
      },
    ],
  },
  {
    title: 'HTML and CSS Basics',
    ageGroup: '6-8 Years',
    img: 'htmlCssDev.png',
    isAvailable: false,
    duration: '11 Sessions',
    course_outline: 'Online',
    level: 'Intermediate',
    course_price: '7000',
    lesson: 11,
    language: 'HTML, CSS',
    certificate: 'Yes',
    course_desc:
      'This course is designed to introduce young learners to the basics of HTML and CSS, the building blocks of the internet. Through hands-on projects and interactive activities, students will learn how to create and style web pages. By the end of the course, students will have the skills to build their own websites and share them with the world.',
    course_desc_2:
      'This course is perfect for beginners who are interested in learning how to create websites. No prior coding experience is required, and all necessary software will be provided.',
    learn_list: [
      'Create and style web pages using HTML and CSS',
      'Use different HTML tags and CSS properties',
      'Add images, links, and other elements to web pages',
      'Publish and share your own website',
    ],
    whyThisCourse:
      "In today's digital age, having even a basic understanding of web development can be an incredibly useful skill. By learning HTML and CSS, young learners can gain a foundational understanding of how websites work and how they can be customized and personalized. Additionally, creating their own websites can be a fun and rewarding way for kids to express themselves and share their ideas with others.",
    curriculum_desc:
      'Throughout the course, students will learn the basics of HTML and CSS through a series of hands-on projects and activities. Topics covered include:',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'Introduction to HTML',
        lessons: [
          { title: 'Getting Started with HTML', icon: 'icon-68' },
          { title: 'HTML Elements and Tags', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'Styling with CSS',
        lessons: [
          { title: 'Getting Started with CSS', icon: 'icon-68' },
          { title: 'CSS Properties and Selectors', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'Adding Images and Links',
        lessons: [
          { title: 'Adding Images to Web Pages', icon: 'icon-68' },
          { title: 'Adding Links to Web Pages', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: 'Building a Web Page',
        lessons: [
          { title: 'Planning and Designing Your Web Page', icon: 'icon-68' },
          { title: 'Putting It All Together: Building Your Web Page', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'Publishing and Sharing Your Web Page',
        lessons: [
          { title: 'Publishing Your Web Page Online', icon: 'icon-68' },
          { title: 'Sharing Your Web Page with Others', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'Final Project',
        lessons: [{ title: 'Create Your Own Web Page', icon: 'icon-68' }],
      },
    ],
  },
  {
    title: 'Introduction to Javascript',
    ageGroup: '9-12 Years',
    img: 'jsDev.png',
    isAvailable: false,
    duration: '11 Sessions',
    course_outline: 'Online',
    level: 'Beginner',
    course_price: '7000',
    lesson: 11,
    language: 'Javascript',
    certificate: 'Yes',
    course_desc:
      'This course is designed for beginners who want to learn how to program with Javascript. Over the course of 11 sessions, you will learn the fundamentals of programming and gain hands-on experience by building your own projects.',
    course_desc_2:
      'By the end of this course, you will have a solid understanding of the Javascript programming language and be able to apply your skills to real-world projects.',
    learn_list: [
      'Fundamentals of programming with Javascript',
      'How to use Javascript to manipulate web page content',
      'How to build interactive web applications with Javascript',
      'Best practices for programming with Javascript',
    ],
    whyThisCourse:
      'Javascript is one of the most popular programming languages used for web development. By learning Javascript, you will be able to build dynamic and interactive web applications that can be used on any device.',
    curriculum_desc:
      'This course is divided into 11 sessions, each covering a different topic in Javascript programming. You will start by learning the basics of programming, including variables, data types, and functions. From there, you will learn how to use Javascript to manipulate web page content and build interactive web applications. Finally, you will learn best practices for programming with Javascript.',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'Introduction to programming with Javascript',
        lessons: [
          { title: 'Variables and data types', icon: 'icon-68' },
          { title: 'Functions', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'Manipulating web page content with Javascript',
        lessons: [
          { title: 'DOM manipulation', icon: 'icon-68' },
          { title: 'Events and event listeners', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'Building interactive web applications with Javascript',
        lessons: [
          { title: 'Creating and manipulating arrays', icon: 'icon-68' },
          { title: 'Conditional statements and loops', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: 'Advanced Javascript programming',
        lessons: [
          { title: 'Object-oriented programming with Javascript', icon: 'icon-68' },
          { title: 'Asynchronous programming with callbacks and promises', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'Best practices for programming with Javascript',
        lessons: [
          { title: 'Debugging techniques', icon: 'icon-68' },
          { title: 'Code optimization', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'Final project and course wrap-up',
        lessons: [{ title: 'Final project', icon: 'icon-68' }],
      },
    ],
  },
  {
    title: 'Game development with Roblox Studio',
    ageGroup: '9-12 Years',
    img: 'robloxDev.png',
    isAvailable: true,
    duration: '11 Sessions',
    course_outline: 'Online',
    level: 'Advanced',
    course_price: '7000',
    lesson: 11,
    certificate: 'Yes',
    language: 'Lua',
    course_desc:
      'This course teaches you how to use Roblox Studio to create your own games from scratch. You will learn Lua programming, 3D modeling, game design principles and much more.',
    course_desc_2: '',
    learn_list: ['Learn Lua programming', 'Create 3D models', 'Design game mechanics', 'Publish and share your games'],
    whyThisCourse:
      'If you love playing games and want to learn how to create your own, this course is for you. Roblox Studio is a great tool for beginners to get started with game development, and Lua is an easy-to-learn programming language.',
    curriculum_desc: 'This course covers the following topics:',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'Introduction to Roblox Studio and Lua programming',
        lessons: [
          { title: 'Getting started with Roblox Studio', icon: 'icon-68' },
          { title: 'Lua basics', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'Creating 3D models and designing game mechanics',
        lessons: [
          { title: 'Introduction to 3D modeling', icon: 'icon-68' },
          { title: 'Building game environments', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'Building game assets and scripting game behavior',
        lessons: [
          { title: 'Creating game assets', icon: 'icon-68' },
          { title: 'Scripting game behavior', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: 'Testing and refining your game',
        lessons: [
          { title: 'Testing and debugging', icon: 'icon-68' },
          { title: 'Refining game mechanics', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'Publishing and sharing your game',
        lessons: [
          { title: 'Publishing your game', icon: 'icon-68' },
          { title: 'Sharing and promoting your game', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'Final project and graduation',
        lessons: [{ title: 'Create and present your own game', icon: 'icon-68' }],
      },
    ],
  },
  {
    title: 'Game development with Python',
    ageGroup: '13-17 Years',
    img: 'pythonGameDev.png',
    duration: '11 Sessions',
    isAvailable: true,
    course_outline: 'Online',
    level: 'Intermediate',
    course_price: '7000',
    lesson: 11,
    language: 'Python',
    certificate: 'Yes',
    course_desc:
      'In this course, you will learn the basics of game development using Python, including how to create game graphics, implement game logic, and add sound effects. By the end of the course, you will have created your own fully functional game using the Pygame library.',
    course_desc_2:
      'This course is ideal for students who already have some programming experience and want to explore game development. By the end of the course, you will have a solid understanding of the Python programming language and be able to create your own games.',
    learn_list: [
      'Learn the basics of Python programming',
      'Create game graphics and implement game logic',
      'Add sound effects to your game',
      'Use the Pygame library to create fully functional games',
    ],
    whyThisCourse:
      'Game development is a fun and engaging way to learn programming. By creating your own games, you will gain a deeper understanding of programming concepts and be able to apply your skills to other projects.',
    curriculum_desc:
      'The course curriculum is divided into 11 sessions, each lasting one hour. The sessions cover the following topics:',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'Introduction to Python programming and game development',
        lessons: [
          { title: 'Introduction to Python programming', icon: 'icon-68' },
          { title: 'Introduction to game development', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'Creating game graphics',
        lessons: [
          { title: 'Creating game graphics using Pygame', icon: 'icon-68' },
          { title: 'Adding images and animations to your game', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'Implementing game logic',
        lessons: [
          { title: 'Adding game logic using Python', icon: 'icon-68' },
          { title: 'Creating game objects and interactions', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: "In week 7-8, you will learn how to add sound effects to your game, using the Pygame library. You will also learn how to optimize your game's performance to ensure that it runs smoothly on different devices",
        lessons: [
          { title: 'Adding sound effects to your game', icon: 'icon-68' },
          { title: 'Optimizing game performance', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'In week 9-10, you will focus on polishing your game by refining the graphics, sound, and gameplay mechanics. You will also learn how to test and debug your game to identify and fix any issues.',
        lessons: [
          { title: 'Polishing your game', icon: 'icon-68' },
          { title: 'Testing and debugging', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'Final project presentation',
        lessons: [
          {
            title:
              'In the final week of the course, you will have the opportunity to showcase the game you have developed over the previous 10 weeks. You will present your game to the instructor and other students, and receive feedback on your work.',
            icon: 'icon-68',
          },
        ],
      },
    ],
  },
  {
    title: 'Advanced web development',
    ageGroup: '13-17 Years',
    img: 'advancedWebDev.png',
    duration: '11 Sessions',
    isAvailable: false,
    course_outline: 'Online',
    level: 'Advanced',
    course_price: '7000',
    lesson: 11,
    language: 'Javascript',
    certificate: 'Yes',
    course_desc:
      'In this course, you will learn advanced web development techniques using Javascript, including working with frameworks like React and Angular, and building complex web applications with Node.js. By the end of the course, you will have a solid understanding of advanced web development concepts and be able to build your own sophisticated web applications.',
    course_desc_2:
      'This course is ideal for students who already have experience with web development and want to take their skills to the next level. Whether you want to build your own web applications or pursue a career in web development, this course will provide you with the advanced skills and knowledge you need.',
    learn_list: [
      'Advanced web development techniques using Javascript',
      'Working with popular web development frameworks like React and Angular',
      'Building complex web applications with Node.js',
      'Best practices for web application development',
    ],
    whyThisCourse:
      'Web development is one of the most in-demand skills in the tech industry, and this course will provide you with the advanced skills and knowledge you need to excel in this field. Whether you want to build your own web applications or pursue a career in web development, this course will provide you with the skills and experience you need to succeed.',
    curriculum_desc:
      'The course curriculum is divided into 11 sessions, each lasting one hour. The sessions cover the following topics:',
    course_lessons: [
      {
        title: 'Week 1-2',
        text: 'Introduction to advanced web development with Javascript',
        lessons: [
          { title: 'Introduction to React', icon: 'icon-68' },
          { title: 'Building web applications with React', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 3-4',
        text: 'Building sophisticated web applications with React',
        lessons: [
          { title: 'Introduction to React', icon: 'icon-68' },
          { title: 'Building web applications with React', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 5-6',
        text: 'Introduction to Node.js and server-side web development',
        lessons: [
          { title: 'Introduction to Node.js', icon: 'icon-68' },
          { title: 'Building server-side web applications with Node.js', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 7-8',
        text: 'Working with databases and APIs',
        lessons: [
          { title: 'Introduction to databases', icon: 'icon-68' },
          { title: 'Working with web APIs', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 9-10',
        text: 'Working with authentication and authorization in web applications',
        lessons: [
          { title: 'Authentication and authorization basics', icon: 'icon-68' },
          { title: 'Implementing authentication and authorization in React and Node.js', icon: 'icon-68' },
        ],
      },
      {
        title: 'Week 11',
        text: 'Final project and course wrap-up',
        lessons: [{ title: 'Final project', icon: 'icon-68' }],
      },
    ],
  },
]

export const courseData: ICourse[] = rawCourseData.map(course => {
  const shortDesc = course.course_desc.substring(0, 70) + '...'
  const metaDesc = course.course_desc.substring(0, 120)
  const id = course.title.replace(/\s/g, '-').toLowerCase()

  return {
    ...course,
    id,
    short_desc: shortDesc,
    meta_desc: metaDesc,
  }
})
