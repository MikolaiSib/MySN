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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (mumberPage: number) => {
        this.props.setPage(mumberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${mumberPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
                                this.onPageChanged(p)
                            }} className={this.props.currentPage === p ? s.selectedPage : ''}>{p} </span> //className={this.props.currentPage === p && s.selectedPage}
                        )
                    })}
                </div>
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
