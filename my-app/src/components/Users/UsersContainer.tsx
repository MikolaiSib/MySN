import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UsersType} from "../../redux/users-reducer";

type mapStatePropsType = {
    users: UsersType[]
}

type mapDispatchPropsType = {
    follow: (userId: any) => void
    unfollow: (userId: any) => void
    setUsers: (users: any) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

