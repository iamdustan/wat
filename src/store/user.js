// @flow

type Action<T, P> = { type: T, payload: P };
type ChangeUser = Action<
  'CHANGE_USER',
  { username: string }
>;

type NotOurAction = Action<string, any>;

type Actions =
  | ChangeUser
  | NotOurAction;

type State = {
  username: string
};

const user = (state: State = { username: 'none' }, action: Actions) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        username: action.payload.username,
      };
    default:
      return state;
  }
}

export default user;
