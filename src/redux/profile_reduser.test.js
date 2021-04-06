import { render, screen } from '@testing-library/react';
import profileReduser, {addPostActionCreator} from "./profile_reduser";

let state = {
    posts: [
        {id: 1, message: 'Post 1', likeCount: 1},
        {id: 2, message: 'Post 2', likeCount: 4},
        {id: 3, message: 'Post 3', likeCount: 8},
        {id: 4, message: 'Post 4', likeCount: 1}
    ],
    newPostText: '',
    profileInfo: null,
    status: ''
};

test('renders learn react link', () => {

    let action = addPostActionCreator('new message');
    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(5);
});
