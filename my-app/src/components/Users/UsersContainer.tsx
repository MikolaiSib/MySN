import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    follow, setDisabledBtn, setFetching,
    setPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersPageType,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainerComponent extends React.Component<UsersPropsType, any> {

    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.setFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        this.props.setFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                // isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setDisabledBtn={this.props.setDisabledBtn}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type mapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

type mapDispatchPropsType = {
    follow: (userId: any) => void
    unfollow: (userId: any) => void
    setUsers: (users: any) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
    setDisabledBtn: (isFetching: boolean, userId: any) => void
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         follow: (userId: any) => {
//             dispatch(followAC(userId)) //{type: FOLLOW, userId}
//         },
//         unfollow: (userId: any) => {
//             dispatch(unfollowAC(userId)) //{type: UNFOLLOW, userId}
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (currentPage: number) => {
//             dispatch(setPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         setFetching: (isFetching: boolean) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalUsersCount,
    setFetching,
    setDisabledBtn,
})(UsersContainerComponent)

