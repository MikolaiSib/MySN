import React from 'react';
// import s from "./Users.module.css";
import avatar from "../../image/allAva.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";



export const User:  React.FC<UsersType&{followingInProgress: any[], follow: any, unfollow: any}> = ({ photos, followed, name,status, ...props}) => {

    return (
        <div key={props.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.id}>
                            <img src={photos.small != null ? photos.small : avatar} alt="No ava"
                                 style={{height: "50px"}}/>
                        </NavLink>
                    </div>
                    <div>
                        {followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                                      onClick={() => {
                                          props.unfollow(props.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.id)}
                                      onClick={() => {
                                          props.follow(props.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {name}
                        </div>
                        <div>
                            {status}
                        </div>
                    </span>
                </span>
            </div>
    );
};

