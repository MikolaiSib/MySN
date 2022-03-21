import React from 'react';
import s from "./users.module.css";
import avatar from "../../image/allAva.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
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