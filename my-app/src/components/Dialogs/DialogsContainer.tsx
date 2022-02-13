import React from 'react';
import {addMessAC, updateNewMessTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";
import {StoreType} from "../../redux/store";


type DialogsPagePropsType = {
    store: any
}

export const DialogsContainer = () => {

    // let state = props.store.getState()
    //
    // let addMess = () => {
    //     props.store.dispatch(addMessAC())
    // }
    //
    // let onMessChange = (mess: any) => {
    //     props.store.dispatch(updateNewMessTextAC(mess))
    // }

    // return (
    //     <Dialogs
    //         addMess={addMess}
    //         onMessChange={onMessChange}
    //         messages={state.dialogsPage.messages}
    //         newMessText={state.dialogsPage.newMessText}
    //         dialogs={state.dialogsPage.dialogs}
    //     />
    // );

    return (
        <StoreContext.Consumer>
            {
            (store: StoreType ) => {
                let addMess = () => {
                    store.dispatch(addMessAC())
                }

                let onMessChange = (mess: any) => {
                    store.dispatch(updateNewMessTextAC(mess))
                }
                return <Dialogs
                    addMess={addMess}
                    onMessChange={onMessChange}
                    messages={store.getState().dialogsPage.messages}
                    newMessText={store.getState().dialogsPage.newMessText}
                    dialogs={store.getState().dialogsPage.dialogs}
                />
            }
        }
        </StoreContext.Consumer>
    );
}


