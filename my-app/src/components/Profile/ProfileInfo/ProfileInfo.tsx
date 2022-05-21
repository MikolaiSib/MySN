import React, {ChangeEvent, useRef} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import avatar from './../../../image/allAva.jpg'

export const ProfileInfo = (props: any) => {

    const inRef = useRef<HTMLInputElement>(null);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descr}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <img src={props.profile.photos.small || props.profile.photos.large || avatar} alt="no photo"/>
                </div>
                <input ref={inRef} type={'file'} onChange={onMainPhotoSelected} style={{display: "none"}}/>
                {props.isOwner &&<button onClick={() => inRef && inRef.current && inRef.current.click()} >add file</button>}
                <div>{props.profile.fullName} </div>
                ava+descr
            </div>
        </div>
    );
}


