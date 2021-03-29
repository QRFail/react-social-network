import {UserApi} from "../api/apiSamurai";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initial_state = {
    users: [
    ],
    countUsersInPage: 5,
    totalUsersCount: 1,
    currentPage: 1,
    toggleIsFollowing: []
};

let usersReduser = (state = initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if(u.id === action.id){
                        return {...u, followed:true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u) => {
                    if(u.id === action.id){
                        return {...u, followed:false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                toggleIsFollowing: action.toggleIsFollowing
                    ? [...state.toggleIsFollowing, action.id]
                    : state.toggleIsFollowing.filter( (id) => {
                        return id != action.id
                    })
            }

        default:
            return state;
    }
}

export let followSuccess = (id) => {
    return {type: FOLLOW, id:id}
}

export let unfollowSuccess = (id) => {
    return {type: UNFOLLOW, id:id}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users:users}
}
export let setCurrentPage = (p) => {
    return {type: SET_CURRENT_PAGE, page:p}
}
export let setTotalUsersCount = (count) => {
    return {type: SET_TOTAL_USERS_COUNT, count:count}
}
export let setToggleIsFollowing = (toggleIsFollowing, id) => {
    return {type: TOGGLE_IS_FOLLOWING, toggleIsFollowing, id}
}

export const getUsers = (page) =>{
    return (
        (dispatch) => {
            UserApi.getUsers(page).then(
                data => {
                    console.log(data);
                    dispatch(setCurrentPage(page));
                    dispatch(setUsers(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
                }
            );
        }
    )
}

export const follow = (userId) => {
    return(
        (dispatch) => {
            dispatch(setToggleIsFollowing(true, userId));
            UserApi.follow(userId).then(
                data => {
                    if(data.resultCode === 0){
                        dispatch(followSuccess(userId));
                    }
                    dispatch(setToggleIsFollowing(false, userId));
                }
            );
        }
    )
}

export const unfollow = (userId) => {
    return(
        (dispatch) => {
            dispatch(setToggleIsFollowing(true, userId));
            UserApi.unfollow(userId).then(
                data => {
                    if(data.resultCode === 0){
                        dispatch(unfollowSuccess(userId));
                    }
                    dispatch(setToggleIsFollowing(false, userId));
                }
            );
        }
    )
}


export default usersReduser;