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

    'Passionate about building responsive, user friendly web applications. ',

  resume: 'https://example.com',

  social: {

    linkedin: 'https://linkedin.com/in/ayushi-naphade-07190415b',

    github: 'https://github.com/ANaphade',

  },

}

 

const projects = [

  // projects can be added an removed

  // if there are no projects, Projects section won't show up

  {

    name: 'Open Miner',

    description:

      'Developed a unified AI-powered search tool to aggregate and summarize data from 3+ sources with optional voice output.',

    stack: ['React Ant Design', 'Web Speech API', 'Python', 'SQL'],

    sourceCode: 'https://github.com',

  },

  {

    name: 'Portowise: Portfolio Reporting',

    description:

      'Developed an application to analyze the security holdings, add transactions, view summaries and download reports for the client.',

    stack: ['React Ant Design', 'Django Rest Framework, SQLite'],

    sourceCode: 'https://github.com',

 

  },

  {

    name: 'Bebras',

    description:

      'Developed an admin application for CS Pathshala (ACM India) to conduct computational thinking tests, analyze results and generate student certificates across schools in India.',

    stack: ['React Material UI', 'Django Rest Framework', 'Metabase', 'SQL'],

    sourceCode: 'https://github.com',

  },

  {

    name: 'Karmadaan',

    description:

      'Developed an alpha version of an Android app for CSR event Management which facilitated users to view CSR events, register for them and provide feedback.',

    stack: ['Android', 'Firebase'],

    sourceCode: 'https://github.com',

 

  },

]

 

const certifications = [

  // projects can be added an removed

  // if there are no projects, Projects section won't show up

 

  {

    name: 'AI-900 Microsoft AI Fundamentals',

    date: 'Oct 2024',

  },

  {

    name: 'Meta Front-End Developer Professional Certificate',

    date: 'Aug 2024',

 

  },

  {

    name: 'AZ-900 Microsoft Azure Fundamentals',

    date: 'Mar 2021',

  },

]

 

const experience = [{

  name: 'Authorized Officer | UBS Business Solutions | Pune',

  date:'Feb 2023 - Present',

  description: []

},

{

  name: 'Software Engineer | UBS Business Solutions | Pune',

  date:'Aug 2020 - Jan 2023',

  description: []

},

{

  name: 'Intern | UBS Business Solutions | Pune',

  date:'May 2019 - Jul 2019',

  description: []

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

 

const contact = {

  // email is optional - if left empty Contact section won't show up

  email: 'ayushinaphade@gmail.com',

  linkedin: 'https://linkedin.com',

  github: 'https://github.com',

}

 

export { header, about, projects, skills, contact }