import { JOIN_LISTS_END, SELECT_LIST_ITEM } from '../actions/app.actions';

export default function appReducers(state = {}, action) {
  switch (action.type) {
    case JOIN_LISTS_END:
      return { ...state, list: action.payload };
    case SELECT_LIST_ITEM: {
      const newList = state.list.map((item, index) => {
        if (!Array.isArray(item)) {
          return { ...item, selected: index === action.payload && !item.selected };
        }
        if (index !== action.payload) {
          return [{ ...item[0], selected: false }, ...item.slice(1, item.length)];
        }
        return [{ ...item[0], selected: !item[0].selected }, ...item.slice(1, item.length)];
      });
      return { ...state, list: newList };
    }
    default:
      return state;
  }
}
