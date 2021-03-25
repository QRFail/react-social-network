const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initial_state = {
    users: [
    ],
    countUsersInPage: 5,
    totalUsersCount: 1,
    currentPage: 1
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

        default:
            return state;
    }
}

export let follow = (id) => {
    return {type: FOLLOW, id:id}
}

export let unfollow = (id) => {
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



export default usersReduser;