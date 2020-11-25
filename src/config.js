module.exports = {
  siteTitle: 'Hans Zhang | Future Software Engineer',
  siteDescription:
    'Hans Zhang is a current student at Univeristy of Washington studying computer science.',
  siteKeywords:
    'Hans Zhang, hanszhang, hans, computer science, uw cse, software engineer, nothwestern, seattle, university of Washington, UW',
  siteUrl: 'https://hansomo.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Hans Zhang',
  location: 'Seattle, WA',
  email: 'hans00@cs.washington.edu',
  github: 'https://github.com/hanszhang00',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hanszhang00',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hanszhang00/',
    },

    // {
    //   name: 'Instagram',
    //   url: '',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/HansZha43692126',
    // },
    // {
    //   name: 'StackOverFlow',
    //   url: '',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
