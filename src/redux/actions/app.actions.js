import store from '../store';

export const JOIN_LISTS_START = 'JOIN_LISTS_START';
export const JOIN_LISTS_END = 'JOIN_LISTS_END';

export const SELECT_LIST_ITEM = 'SELECT_LIST_ITEM';

export const joinListsAction = payload => ({
  type: JOIN_LISTS_START,
  payload,
});

export const joinListsCreator = payload => store.dispatch(
  joinListsAction(payload)
);

export const selectListItemAction = payload => ({
  type: SELECT_LIST_ITEM,
  payload,
});

export const selectListItemCreator = payload => store.dispatch(
  selectListItemAction(payload)
);
