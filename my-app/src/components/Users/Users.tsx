import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"
import axios from "axios";//import  * as axios from "axios"
import avatar from "../../image/allAva.jpg"
import App from "../../App";

class Users extends React.Component<any, any> {

    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt="No ava"
                             style={{height: "50px"}}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
    }
}

export default Users;
