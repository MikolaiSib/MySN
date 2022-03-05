import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"
import axios from "axios";//import  * as axios from "axios"
import avatar from "../../image/allAva.jpg"

export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt="No ava"
                             style={{height: "50px"}}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
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
                    {/*<span>*/}
                    {/*    <div>*/}
                    {/*        {u.location.country}*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        {u.location.city}*/}
                    {/*    </div>*/}
                    {/*</span>*/}
                </span>
            </div>)}
        </div>
    );
};

