import { put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { joinListsCreator, JOIN_LISTS_END } from '../actions/app.actions';
import joinListsMiddleware from './app.middlewares';
import joinLists from '../../services/joinLists';
import { SEARCH_END } from '../actions/api.actions';

const data = {
  foursquareSearchResults: [{
    id: '50f686b7e4b0137aecdcfe4a',
    name: 'Пчдпчлечдебп!',
    location: {
      lat: 50.01539611816406,
      lng: 36.220130920410156,
      distance: 27,
      address: 'Україна',
    },
    categories: [
      'Beer Garden',
    ],
    contact: {},
    cover: null,
    about: null,
    rating: null,
    sourceType: 'foursquare',
    selected: false,
  }],
  googleSearchResults: [{
    id: '46121b98d87be93c66b55006e7075a8c7a67a013',
    name: 'Fat Goose',
    location: {
      lat: 50.01465959999999,
      lng: 36.2199872,
      distance: null,
      address: 'ул. Космическая, вулиця Космічна, 21, Харків',
    },
    categories: [
      'Bar',
      'Point of interest',
      'Establishment',
    ],
    url: null,
    contact: {},
    cover: {
      height: 2988,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/113570881191540541004/photos">Антон Кузнецов</a>',
      ],
      photo_reference: 'CmRaAAAAC1G9jGL888F_jasl2dLF9KXJXCLB7ZN1_dP_UibCIPbNRWc4pD8vMIIkjpjF1yeYNSY9-L4E8T6Huwr2zykl7z6PpETaGf4glvaqlt7dx4HWyDn9bUvUF1hiCk_KIILnEhAcC_nzRi8U9GAKUk4N-RueGhT5QJxg9SNM39YN10-cy0WktUN1Mg',
      width: 5312,
    },
    rating: 4.5,
    sourceType: 'google',
    selected: false,
  }],
  facebookSearchResults: [{
    id: '303614593128431',
    name: 'Villaggio',
    location: {
      lat: 50.015958982335,
      lng: 36.21620953083,
      distance: null,
      address: 'Kharkov, Ukraine',
    },
    categories: [
      'Italian Restaurant',
    ],
    url: 'http://www.villaggio.in.ua',
    contact: {
      phone: '0974971071',
      facebook: 'https://www.facebook.com/villaggio.in.ua/',
    },
    cover: {
      cover_id: '656338454522708',
      offset_x: 0,
      offset_y: 22,
      source: 'https://scontent.xx.fbcdn.net/v/t31.0-8/q81/s720x720/14500565_656338454522708_5223017771639219464_o.jpg?oh=5f6fc2bc4e124e16a5d0737654a9aa7b&oe=5B05DB73',
      id: '656338454522708',
    },
    rating: 4.6,
    sourceType: 'facebook',
    selected: false,
  }],
};
const joinListsAction = joinListsCreator(data);

describe('app middleware', () => {
  const generator = cloneableGenerator(joinListsMiddleware)(joinListsAction);

  it('should try to fetch data', () => {
    expect(generator.next().value).toEqual(put({ type: JOIN_LISTS_END, payload: joinLists(data) }));
  });

  it('should end search', () => {
    expect(generator.next().value).toEqual(put({ type: SEARCH_END }));
    expect(generator.next().done).toEqual(true);
  });
});
