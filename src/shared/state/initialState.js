const Posts = [
  {
    id: 1,
    test: ['Elliot Evans', 'Web App Developer at Codeweavers'],
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
      '🏑 Hockey website for information, activities and membership',
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
  },
  {
    id: 5,
    title: 'Presentation Framework',
    icon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9-U4O8OAIXC8DeUAM97q0eGSheIlkwoElB6iFu-Y3TX0_oYs',
    short_description:
      'A Presentation Framework created to make presenations easy',
    long_description:
      'A Presentation Framework created to make presenations easy',
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
    'https://scontent-lht6-1.cdninstagram.com/vp/ea65a425d35503499a7e008eeec55ec5/5D5A13C9/t51.2885-15/sh0.08/e35/s640x640/44685702_1433408640124379_1589696544278879017_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com',
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

const Skills = [
  {
    id: 1,
    name: 'HTML 5',
    imageUrl: 'https://storage.googleapis.com/elliot-evans-website/html.svg',
    years: 5
  },
  {
    id: 2,
    name: 'CSS 3',
    imageUrl: 'https://storage.googleapis.com/elliot-evans-website/css.svg',
    years: 5
  },
  {
    id: 3,
    name: 'Javascript',
    imageUrl:
      'https://storage.googleapis.com/elliot-evans-website/javascript.svg',
    years: 5
  },
  {
    id: 4,
    name: 'Typescript',
    imageUrl:
      'https://storage.googleapis.com/elliot-evans-website/typescript.svg',
    years: 3
  },
  {
    id: 5,
    name: 'Angular',
    imageUrl: 'https://storage.googleapis.com/elliot-evans-website/angular.svg',
    years: 3
  },
  {
    id: 6,
    name: 'React',
    imageUrl: 'https://storage.googleapis.com/elliot-evans-website/react.svg',
    years: 1
  },
  {
    id: 7,
    name: 'Node',
    imageUrl: 'https://storage.googleapis.com/elliot-evans-website/node.svg',
    years: 1
  },
  {
    id: 8,
    name: 'Firebase',
    imageUrl:
      'https://storage.googleapis.com/elliot-evans-website/firebase.svg',
    years: 1
  }
];

export const initialState = {
  Projects,
  Posts,
  About,
  Skills
};
