import React from 'react';
import s from "./users.module.css";
import avatar from "../../image/allAva.jpg";
import {UsersPageType, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    // isFetching: boolean
    onPageChanged: (numberPage: number) => void
    users: UsersType[]
    follow: (userId: any) => void
    unfollow: (userId: any) => void
}

let Users = (props: UsersTypeProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, i) => {
                    return (
                        <span key={i} onClick={() => {
                            props.onPageChanged(p);
                        }} className={props.currentPage === p ? s.selectedPage : ''}>{p} </span> //className={this.props.currentPage === p && s.selectedPage}
                    )
                })}
            </div>
            {props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt="No ava"
                                 style={{height: "50px"}}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "512df9e6-af0a-402c-bd78-3d8951a152e2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "api-key": "512df9e6-af0a-402c-bd78-3d8951a152e2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;