import {RedCarImage} from '../assets/images';

export const ACCOUNT_TYPE = {
  RENTER: 'RENTER',
  OWNER: 'OWNER',
};

export const ONBOARDINGS = [
  {
    title: 'Best Rating 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
  },
  {
    title: 'Best Rating 2',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
  },
  {
    title: 'Best Rating 3',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras in eget enim diam. Faucibus purus maecenas faucibus.',
  },
];

export const EXPLORE_POSTS = [
  {images: [RedCarImage], title: 'Audi E-Tron GT', fee: '$50/hr', address: 'Johar town,Lahore', timestamp: '4 days ago', rating: '4.5'},
  {images: [RedCarImage], title: 'Audi E-Tron GT', fee: '$50/hr', address: 'Johar town,Lahore', timestamp: '4 days ago', rating: '4.5'},
  {images: [RedCarImage], title: 'Audi E-Tron GT', fee: '$50/hr', address: 'Johar town,Lahore', timestamp: '4 days ago', rating: '4.5'},
  {images: [RedCarImage], title: 'Audi E-Tron GT', fee: '$50/hr', address: 'Johar town,Lahore', timestamp: '4 days ago', rating: '4.5'},
  {images: [RedCarImage], title: 'Audi E-Tron GT', fee: '$50/hr', address: 'Johar town,Lahore', timestamp: '4 days ago', rating: '4.5'},
];

export const POSTS = [
  {title: 'Audi E-Tron GT', image: RedCarImage, location: 'Johar town,Lahore', timestamp: '4 days ago', price: '$50/Hr'},
  {title: 'Audi E-Tron GT', image: RedCarImage, location: 'Johar town,Lahore', timestamp: '4 days ago', price: '$50/Hr'},
  {title: 'Audi E-Tron GT', image: RedCarImage, location: 'Johar town,Lahore', timestamp: '4 days ago', price: '$50/Hr'},
  {title: 'Audi E-Tron GT', image: RedCarImage, location: 'Johar town,Lahore', timestamp: '4 days ago', price: '$50/Hr'},
];

export const CHAT_HEADS = [
  {title: 'Sarah Jhonson', image: RedCarImage, description: 'Hi good afternoon Sarah', timestamp: '4 days ago', isActive: true},
  {title: 'Sarah Jhonson', image: RedCarImage, description: 'Hi good afternoon Sarah', timestamp: '4 days ago', isActive: true},
  {title: 'Sarah Jhonson', image: RedCarImage, description: 'Hi good afternoon Sarah', timestamp: '4 days ago', isActive: false},
  {title: 'Sarah Jhonson', image: RedCarImage, description: 'Hi good afternoon Sarah', timestamp: '4 days ago', isActive: false},
];

export const TRANSACTIONS = [
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
  {title: 'User Name', description: '0817239419528913', timestamp: '9:07 AM', amount: '+500$'},
];

export const REVIEWS = [
  {
    title: 'Sarah Jhonson',
    image: RedCarImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    timestamp: '4 days ago',
    isActive: true,
  },
  {
    title: 'Sarah Jhonson',
    image: RedCarImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    timestamp: '4 days ago',
    isActive: true,
  },
  {
    title: 'Sarah Jhonson',
    image: RedCarImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    timestamp: '4 days ago',
    isActive: false,
  },
  {
    title: 'Sarah Jhonson',
    image: RedCarImage,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    timestamp: '4 days ago',
    isActive: false,
  },
];

export const CHATS = [
  {
    title: 'May 29',
    data: [
      {msg: 'What’s up, dude?', timestamp: '12:01', isMe: false, type: 'TEXT'},
      {
        msg: 'Good, i finally finished this work, starting to work on the next one',
        timestamp: '12:01',
        isMe: true,
        type: 'TEXT',
      },
      {msg: 'Hey,guys,all is good😊', timestamp: '12:01', isMe: false, type: 'TEXT'},
      {msg: 'Nice👌🏻', timestamp: '12:01', isMe: true, type: 'TEXT'},
      {msg: 'Hey,guys,all is good😊', timestamp: '12:01', isMe: false, type: 'TEXT'},
      {msg: 'Hey,guys,all is good😊', timestamp: '12:01', isMe: false, type: 'IMAGE'},
    ],
  },
  {
    title: 'Today',
    data: [
      {msg: 'Hey,guys,all is good😊', timestamp: '12:01', isMe: false, type: 'TEXT'},
      {msg: 'Hey,guys,all is good😊', timestamp: '12:01', isMe: false, type: 'TEXT'},
    ],
  },
];
