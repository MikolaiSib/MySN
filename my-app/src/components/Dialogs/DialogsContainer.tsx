import React from 'react';
import {addMessAC, DialogType, MessageType, updateNewMessTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


// type DialogsPagePropsType = {
//     store: any
// }
//
// export const DialogsContainer1 = () => {

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
//
//     return (
//         <>
//             {
//             (store: StoreType ) => {
//                 let addMess = () => {
//                     store.dispatch(addMessAC())
//                 }
//
//                 let onMessChange = (mess: any) => {
//                     store.dispatch(updateNewMessTextAC(mess))
//                 }
//                 return <Dialogs
//                     addMess={addMess}
//                     onMessChange={onMessChange}
//                     messages={store.getState().dialogsPage.messages}
//                     newMessText={store.getState().dialogsPage.newMessText}
//                     dialogs={store.getState().dialogsPage.dialogs}
//                 />
//             }
//         }
//         </>
//     );
// }

type mapStatePropsType = {
    messages: MessageType[]
    newMessText: string
    dialogs: DialogType[]
}

type mapDispatchPropsType = {
    addMess: ()=>void
    onMessChange: (mess: any)=>void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType  => {
    return {
        messages: state.dialogsPage.messages,
        newMessText: state.dialogsPage.newMessText,
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMess: () => {dispatch(addMessAC())},
        onMessChange: (mess: any) => {dispatch(updateNewMessTextAC(mess))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


