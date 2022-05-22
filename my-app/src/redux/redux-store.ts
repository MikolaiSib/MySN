import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunk, { ThunkDispatch } from 'redux-thunk'
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

export type AppActionType = ProfileActionsTypes


export type TypedDispatch = ThunkDispatch<AppStateType, any, AppActionType>;

//@ts-ignore
window.store = store
