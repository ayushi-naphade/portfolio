const header = {

  // all the properties are optional - can be left empty or deleted

  // homepage: 'https://rjshkhr.github.io/cleanfolio',

  title: 'AN.',

}

 

const about = {

  // all the properties are optional - can be left empty or deleted

  name: 'Ayushi Naphade',

  role: 'Software Engineer',

  description:

    'Passionate about building engaging, user-centric digital experiences. ',
  

  resume: 'https://example.com',

  social: {

    linkedin: 'https://linkedin.com/in/ayushi-naphade-07190415b',

    github: 'https://github.com/ayushi-naphade',

  },

}

 

const projects = [

  // projects can be added an removed

  // if there are no projects, Projects section won't show up

  {

    name: 'Open Miner',

    description: 

      'Unified AI-powered search tool using React, Python, and Web Speech API to aggregate and summarize data from 3+ sources, improving research efficiency with optional voice output.',

    stack: ['React Ant Design', 'Web Speech API', 'Python', 'SQL'],

    sourceCode: 'https://github.com',

  },

  {

    name: 'Portowise: Portfolio Reporting',

    description:

      'Web application to analyze the security holdings, add transactions, view summaries and download reports for the client.',

    stack: ['React Ant Design', 'Django Rest Framework', 'SQLite'],

    sourceCode: 'https://github.com',

 

  },

  {

    name: 'Bebras',

    description:

      'Admin application for CS Pathshala (ACM India) to conduct computational thinking tests, analyze results and generate student certificates across 60+ schools in India.',

    stack: ['React Material UI', 'Django Rest Framework', 'Metabase', 'SQL'],

    sourceCode: 'https://github.com',

  },

  {

    name: 'Karmadaan',

    description:

      'Android app for CSR event Management which facilitates users to view CSR events, register for them based on their interests and provide feedback.',

    stack: ['Android', 'Firebase'],

    sourceCode: 'https://github.com',

 

  },

]

 

const certificates = [

  {

    name: 'AI-900: Microsoft AI Fundamentals',

    date: 'Oct 2024',

    img: 'ai900'

  },

  {

    name: 'Meta Front-End Developer Professional Certificate',

    date: 'Aug 2024',

    img: 'meta'
 

  },

  {

    name: 'AZ-900: Microsoft Azure Fundamentals',

    date: 'Mar 2021',

    img: 'az900'
  },

]

 

const skills = [

  // skills can be added or removed

  // if there are no skills, Skills section won't show up

  'React',

  'Redux',

  'HTML',

  'CSS',

  'JavaScript',

  'Jest',

  'Material UI',

    'Ant Design',

    'Leaflet',

    'Ag Grid',

    'React Data Table',

    'Java',

  'Spring Boot',

  'Junit',

  'Python',

  'Django REST Framework',

  'SQL',

    'Git',

  'Github',

  'Gitlab',

  'JIRA',

  'Confluence',

  'Azure',

  'Agile',

  'Scrum',

]


const experience = [{

  name: 'Authorized Officer',

  firm: 'UBS Business Solutions',

  location: 'Pune',

  date:'Feb 2023 - Present',

  description: ['Designed and developed reusable UI components using React Hooks, Redux, and AG Grid, reducing duplicate code and improving rendering performance across critical workflows',
    'Optimized performance through virtualized components, applying memoization and state management improvements.',
  'Actively shaped UI architecture decisions to ensure modularity and maintainability.',
'Spearheaded migration of Spring Boot microservices to Azure Kubernetes, enhancing scalability and orchestration; built 4+ Grafana dashboards for real-time performance monitoring.',
'Led end-to-end delivery of 5+ product artifacts, overseeing change management,managing CI/CD pipelines, and Agile ceremonies such as daily standups (scrums), sprint planning and retrospectives using GitLab and JIRA.']

},

{

  name: 'Software Engineer',
  firm: 'UBS Business Solutions',

  location: 'Pune',

  date:'Aug 2020 - Jan 2023',

  description: ['Developed responsive, enterprise-grade user interfaces in React.js for a critical regulatory reporting application used for the supervision of investment activities serving 6000+ users across APAC, EMEA, AMER.',
    'Designed and developed key dashboards using ReactJS and Redux to facilitate the creation, review, and management of over 450+ supervisory procedures and 220+ regulatory compliance documents.',
  'Leveraged microservices architecture to develop and integrate Spring Boot RESTful APIs with React components while delivering high-quality, pixel-perfect experiences in collaboration with design teams using Figma.',
'Ensured high-quality deployments through code linting, optimized bundling, testing and version control best practices.']

},

{

  name: 'Software Intern',
  firm: 'UBS Business Solutions',

  location: 'Pune',

  date:'May 2019 - Jul 2019',

  description: ['Developed features of a web application by using HTML5, Javascript and CSS.','Contributed to code reviews, retrospectives, and debugging sessions while enhancing code quality through industry best practices.']

},

]


const contact = {

  // email is optional - if left empty Contact section won't show up

  email: 'ayushinaphade@gmail.com',

  linkedin: 'https://linkedin.com',

  github: 'https://github.com',

}

 

export { header, about, projects, skills, contact, experience, certificates }