import store from '../store';

export const JOIN_LISTS_START = 'JOIN_LISTS_START';
export const JOIN_LISTS_END = 'JOIN_LISTS_END';

export const joinListsAction = payload => ({
  type: JOIN_LISTS_START,
  payload,
});

export const joinListsCreator = payload => store.dispatch(
  joinListsAction(payload)
);
