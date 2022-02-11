import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";


type AppPagePropsType = {
    store: StoreType
}

const App = (props: AppPagePropsType) => {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path={'/profile/*'} element={<Profile profilePage={props.store._state.profilePage}
                                                                     dispatch={props.store.dispatch.bind(props.store)}
                                                                     newPostText={props.store._state.profilePage.newPostText}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogsPage={props.store._state.dialogsPage}
                                                                     dispatch={props.store.dispatch.bind(props.store)}
                                                                     newMessText={props.store._state.dialogsPage.newMessText}/>}/>
                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
