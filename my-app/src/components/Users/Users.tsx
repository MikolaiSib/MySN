import React from 'react';
// import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: any[]
    // isFetching: boolean
    onPageChanged: (numberPage: number) => void
    users: UsersType[]
    follow: any
    unfollow: any
}

const Users = (props: UsersTypeProps) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>

            {props.users.map((u: UsersType) => <User key={u.id} name={u.name} id={u.id}
                                                     uniqueUrlName={u.uniqueUrlName}
                                                     photos={u.photos} status={u.status}
                                                     followed={u.followed}
                                                     followingInProgress={props.followingInProgress}
                                                     follow={props.follow} unfollow={props.unfollow}
            />)}
        </div>
    );
};

export default Users;
