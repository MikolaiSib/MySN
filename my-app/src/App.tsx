import React, {Suspense, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

// const DialogsContainer = React.lazy(()=> import("./components/Dialogs/DialogsContainer"))
// const ProfileContainer = React.lazy(()=> import("./components/Profile/ProfileContainer"))


// class App extends React.Component {
//
//     componentDidMount() {
//         console.log(this.props.getAuth)
//         // this.props.getAuth()
//     }
//
//     render() {
//
//         return (
//             <BrowserRouter>
//                 <div className='app_wrapper'>
//                     <HeaderContainer/>
//                     <Navbar/>
//                     <div className='app_wrapper_content'>
//                         <Routes>
//                             <Route path={'/profile/'} element={<ProfileContainer/>}/>
//                             <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
//                             <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
//                             <Route path={'/users/*'} element={<UsersContainer/>}/>
//                             <Route path={'/news/*'} element={<News/>}/>
//                             <Route path={'/music/*'} element={<Music/>}/>
//                             <Route path={'/settings/*'} element={<Settings/>}/>
//                             <Route path={'/login/*'} element={<Login/>}/>
//                         </Routes>
//                     </div>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }
//
// export default connect(null, {getAuth})(App);

const App = () => {

    const dispatch = useDispatch()
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)

    useEffect(() => {
            dispatch(initializeApp())
        }
        , [])
    if(!initialized){
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        {/*<Route path={'/profile/*'} element={<Suspense fallback={<div>loading...</div>}>*/}
                        {/*    <ProfileContainer/>*/}
                        {/*</Suspense>}/>*/}
                        <Route path={'/profile/*'} element={<ProfileContainer/>}/>
                        <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                        {/*<Route path={'/dialogs/*'} element={<Suspense fallback={<div>loading...</div>}>*/}
                        {/*    <DialogsContainer/>*/}
                        {/*</Suspense>}/>*/}
                        <Route path='/' element={<Navigate to={'/profile'}/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users/*'} element={<UsersContainer/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/login/*'} element={<Login/>}/>
                        <Route path={'*'} element={<div>404</div>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


