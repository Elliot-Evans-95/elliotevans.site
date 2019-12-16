const Projects = [
  {
    id: 1,
    title: 'Elk',
    icon: 'https://storage.googleapis.com/elliot-evans-website/elk-logo.png',
    short_description: '🦌 JS Framework',
    long_description: 'functional Javascript framework',
    main_image:
      'https://storage.googleapis.com/elliot-evans-website/elk-screenshot.png',
    is_selected: false,
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
    is_selected: false,
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
    is_selected: true,
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
    is_selected: false,
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
      'https://storage.googleapis.com/elliot-evans-website/presentation.png',
    is_selected: false,
  },
];

export const initialState = {
  Projects,
  Posts,
  About,
  Skills,
};
