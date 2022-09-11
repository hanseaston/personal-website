module.exports = {
  siteTitle: 'Hans Easton | UW CSE',
  siteDescription: `Hans' personal website`,
  siteKeywords:
    'Hans Easton, hanseaston, hans, computer science, uw cse, software engineer, seattle, University of Washington, UW',
  siteUrl: 'https://hanseaston.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Hans Easton',
  location: 'Seattle, WA',
  email: 'hansreaston@gmail.com',
  github: 'https://github.com/hanseaston',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hanseaston',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hanseaston/',
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
    {
      name: 'Experience',
      url: '/#jobs',
    },
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
