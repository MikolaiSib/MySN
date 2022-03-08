import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersContainerComponent extends React.Component<any, any> {

    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}


type mapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchPropsType = {
    follow: (userId: any) => void
    unfollow: (userId: any) => void
    setUsers: (users: any) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId)) //{type: FOLLOW, userId}
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId)) //{type: UNFOLLOW, userId}
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage: number) => {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent)

