import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


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
                        <Route path={'/profile/'} element={<ProfileContainer/>}/>
                        <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users/*'} element={<UsersContainer/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                        <Route path={'/login/*'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
