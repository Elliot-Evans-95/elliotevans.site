const Posts = [
  {
    id: 1,
    test: ['Elliot', 'Developer'],
    markdown: []
  }
];

const Projects = [
  {
    id: 1,
    title: 'Elk',
    icon: 'https://storage.googleapis.com/elliot-evans-website/elk-logo.png',
    short_description: '🦌 JS Framework',
    long_description: 'functional Javascript framework',
    main_image:
      'https://storage.googleapis.com/elliot-evans-website/elk-screenshot.png',
    is_selected: false
  },
  {
    id: 2,
    title: 'Throughout',
    icon: 'https://storage.googleapis.com/elliot-evans-website/roundabout.svg',
    short_description:
      '🎪 End-to-end testing made simple (using Jest and Puppeteer)',
    long_description: 'lots of stuff',
    main_image:
      'https://storage.googleapis.com/elliot-evans-website/throughout-screenshot.png',
    is_selected: false
  },
  {
    id: 3,
    title: 'North Stafford Hockey Club Website',
    icon: 'https://storage.googleapis.com/elliot-evans-website/nshc-logo.png',
    short_description:
      '🏑 Hockey website for information, activities and membership',
    long_description:
      'Hockey website for information, activities and membership',
    main_image:
      'https://storage.googleapis.com/elliot-evans-website/nshc-site.png',
    is_selected: true
  },
  {
    id: 4,
    title: 'AR Test',
    icon: 'https://storage.googleapis.com/elliot-evans-website/ar-logo.png',
    short_description: 'Testing out AR for Codeweavers',
    long_description:
      'Creating a car in Augmented Reality and the ability to change its appearance',
    main_image:
      'https://storage.googleapis.com/elliot-evans-website/ar-screenshot.png',
    is_selected: false
  }
];

const About = {
  banner: [
    'Elliot Evans',
    'About me...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ],
  image:
    'https://scontent-lhr3-1.cdninstagram.com/vp/b691590e0594c7da4f35279a740277a1/5C592199/t51.2885-15/e35/39486080_552390368527718_6619736830222794752_n.jpg',
  card: [
    'Hello, Elliot here. Thanks for checking out my website. I will hopefully be updating the site bit by bit over ' +
      'the next few months. In the meantime please checkout some of the blog posts I have made and if you need to' +
      'contact me then feel free.',
    'I am currently a web application (fancy way of saying frontend) developer at Codeweavers. I have been at the' +
      'company for over 2 years crafting great solutions for the motor industry. I have been writing mainly javascript' +
      'and typescript at the company and using AngularJS and Angular 2+ respectively. Despite this, this website was' +
      'written in react (I like both frameworks).',
    'I do fall into the category of trying the new stuff when I can on my personal projects. I also play football and ' +
      'hockey in my spare time and make music when I feel bored'
  ]
};

export const initialState = {
  Projects,
  Posts,
  About
};
