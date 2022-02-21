import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"

export const Users = (props: UsersPropsType) => {

    if(props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg",
                fullName: "Dim",
                status: "Boss",
                location: {city: "Minsk", country: "RB"},
                followed: false
            },
            {
                id: 2,
                photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg",
                fullName: "Dic",
                status: "Boss2",
                location: {city: "Msk", country: "RF"},
                followed: true
            },
            {
                id: 3,
                photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg",
                fullName: "One",
                status: "Boss3",
                location: {city: "Sib", country: "RF"},
                followed: true
            },
            {
                id: 4,
                photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg",
                fullName: "Two",
                status: "Boss4",
                location: {city: "Spb", country: "RF"},
                followed: false
            },
            {
                id: 5,
                photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg",
                fullName: "Free",
                status: "Boss5",
                location: {city: "Vlad", country: "RF"},
                followed: false
            }
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="No ava"
                             style={{height: "50px"}}/>
                    </div>
                    <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

