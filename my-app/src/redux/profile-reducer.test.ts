import {addPost, deletePost, ProfilePageType, profileReducer} from "./profile-reducer";

let initialState: ProfilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, post: "Hi one", likeCount: 33},
            {id: 2, post: "Hello one", likeCount: 7},
            {id: 3, post: "Good one", likeCount: 16},
        ],
        profile: {},
        status: '',
    }
})


it('addPost', () => {
    let action = addPost('myTest')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].post).toBe('myTest')
})

it('deletePost', () => {
    let action = deletePost(3)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
    expect(newState.posts[1].post).toBe('Hello one')
})
