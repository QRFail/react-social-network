import Users from "./Users";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFollowing, getUsers
} from "../../redux/users_reduser";
import React from "react";
import {getUserSuperSelector} from "../../redux/selectors";
const {connect} = require("react-redux");

class UsersApiComponent extends React.Component{

    componentDidMount() {
        this.props.getUsers(1);
    }

    onPageChanged = (p) =>{
        this.props.getUsers(p);
    }

    render() {
        return (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                countUsersInPage={this.props.countUsersInPage}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleIsFollowing={this.props.toggleIsFollowing}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserSuperSelector(state),
        countUsersInPage: state.usersPage.countUsersInPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        toggleIsFollowing: state.usersPage.toggleIsFollowing,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFollowing,
    getUsers

})(UsersApiComponent);