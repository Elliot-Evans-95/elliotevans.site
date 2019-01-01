import * as actions from '.';
import * as types from '../constants/action-types';

describe('actions', () => {
  it('should create an action to add an article', () => {
    const payload = 'Finish docs';
    const expectedAction = {
      type: types.ADD_ARTICLE,
      payload
    };

    expect(actions.addArticle(payload)).toEqual(expectedAction);
  });
});
