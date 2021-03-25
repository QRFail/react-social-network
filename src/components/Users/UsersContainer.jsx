import Users from "./Users";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount} from "../../redux/users_reduser";
import React from "react";
import axios from "axios";
const {connect} = require("react-redux");

class UsersApiComponent extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChanged = (p) =>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + p).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(p);
            }
        );
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

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersInPage: state.usersPage.countUsersInPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,

})(UsersApiComponent);