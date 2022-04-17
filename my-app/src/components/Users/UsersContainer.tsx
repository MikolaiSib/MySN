import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUsers, setDisabledBtn,
    setPage, UsersType,
    follow, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/user-selectors";


class UsersContainerComponent extends React.Component<UsersPropsType, any> {

    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setPage(pageNumber);
        // this.props.setFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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
    follow: any
    unfollow: any
    setPage: (currentPage: number) => void
    // getUsers: (currentPage: number, pageSize: number) => (dispatch: any) => void
    getUsers: any
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

// const mapStateToProps = (state: AppStateType): mapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setPage,
        getUsers,
    })
)(UsersContainerComponent)

// export const UsersContainer = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setPage,
//     getUsers,
// })(UsersContainerComponent)

