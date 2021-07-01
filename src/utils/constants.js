import cardImagePath from '../images/cards/card.jpg';
import savedCardImagePath from '../images/cards/2.jpg';

export const {
  REACT_APP_SERVER_URL = 'https://api.nomoreparties.co',
} = process.env;

export const {
  REACT_APP_MOVIE_API_URL = 'https://api.nomoreparties.co/beatfilm-movies',
} = process.env;

export const { REACT_APP_API_URL = 'https://pob.di.nomoredomains.icu/' } =
  process.env;

export const movieListAge = 7 * 24 * 60 * 60 * 1000;

export const cardNumber = {
  desktop: {
    renderCardRows: 3,
    rowCardNumber: 4,
    addCardNumber: 4
  },
  tabletLandscape: {
    resolution: 1024,
    renderCardRows: 3,
    rowCardNumber: 3,
    addCardNumber: 3,
  },
  tabletPortrait: {
    resolution: 802,
    renderCardRows: 4,
    rowCardNumber: 2,
    addCardNumber: 2,
  },
  mobile: {
    resolution: 557,
    renderCardRows: 1,
    rowCardNumber: 5,
    addCardNumber: 2,
  },
}

export const footerLinks = [
  {
    title: 'Яндекс.Практикум',
    link: 'https://praktikum.yandex.ru/',
  },
  {
    title: 'Github',
    link: 'https://github.com/Powenga',
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/rakhmanin.dm/',
  },
];

export const aboutMeLinks = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/rakhmanin.dm/',
  },
  {
    title: 'Github',
    link: 'https://github.com/Powenga',
  },
];

export const portfolio = [
  {
    title: 'Статичный сайт',
    link: 'https://github.com/Powenga/how-to-learn',
  },
  {
    title: 'Адаптивный сайт',
    link: 'https://github.com/Powenga/russian-travel',
  },
  {
    title: 'Одностраничное приложение',
    link: 'https://github.com/Powenga/react-mesto-api-full',
  },
];

export const initCards = [
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title:
      'Осуждение и убийство Жана Поля Марата, осуществленные пациентами Чарентонской психбольницы под руководством маркиза де Сада',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
];

export const savedCards = [
  {
    title: '33 слова о дизайне',
    imageLink: savedCardImagePath,
    duration: '1ч42м',
  },
  {
    title:
      'Осуждение и убийство Жана Поля Марата, осуществленные пациентами Чарентонской психбольницы под руководством маркиза де Сада',
    imageLink: cardImagePath,
    duration: '1ч42м',
  },
  {
    title: '33 слова о дизайне',
    imageLink: savedCardImagePath,
    duration: '1ч42м',
  },
];
