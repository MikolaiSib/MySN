import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import avatar from './../../../image/allAva.jpg'
import {useFormik} from "formik";

export const ProfileInfo = (props: any) => {

    const inRef = useRef<HTMLInputElement>(null);

    const [editMode, setEditMode] = useState(false)

    const editProfile = (value: boolean) => {
        setEditMode(value)
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
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
                    <img
                        src={props.profile.photos && (props.profile.photos.small || props.profile.photos.large || avatar)}
                        alt="no photo"/>
                </div>
                <input ref={inRef} type={'file'} onChange={onMainPhotoSelected} style={{display: "none"}}/>
                {props.isOwner &&
                    <div>
                        <button onClick={() => inRef && inRef.current && inRef.current.click()}>add file</button>
                        {!editMode && <button onClick={() => editProfile(true)}>edit profile</button>}
                    </div>
                }
                {editMode ? <ProfileDataForm profile={props.profile} editProfile={editProfile} updateProfile={props.updateProfile}/> :
                    <ProfileData profile={props.profile}/>}


            </div>
        </div>
    );
}


const ProfileData = (props: any) => {
    return (
        <div>
            <div>I {props.profile.fullName} </div>
            <div>Jod: {props.profile.lookingForAJob ? 'yes' : 'no'} </div>
            <div>About: {props.profile.aboutMe} </div>
            {Object.keys(props.profile.contacts).map(contact => {
                return <Contact key={contact} contactTitle={contact} contactValue={props.profile.contacts[contact]}/>
            })}
        </div>
    );
};


const ProfileDataForm = (props: any) => {


    const formik = useFormik({
        initialValues: {
            // ...props.profile,
            ...props.profile.contacts,
            // fullName: props.profile['fullName'],
            // aboutMe: props.profile['aboutMe'],
            // lookingForAJobDescription: props.profile['lookingForAJobDescription'],
        },
        onSubmit: values => {
            props.updateProfile({
                // userId: 18443,
                // lookingForAJob: true,
                // lookingForAJobDescription: 'descr',
                // fullName: 'Mikolai',
                // aboutMe: 'Mikolai',
                // contacts: {
                    github: values.github,
                    vk: values.vk,
                    facebook: values.facebook,
                    instagram: values.instagram,
                    twitter: values.twitter,
                    website: values.website,
                    youtube: values.youtube,
                    mainLink: values.mainLink,
                // }
            })
            formik.resetForm()
            props.editProfile(false)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            {Object.keys(props.profile.contacts).map(e => {
                return <div key={e}>
                    <label htmlFor={e}>{e}</label>
                    <input
                        id={e}
                        name={e}
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values[e]}
                    />
                </div>
            })}
            <button type="submit">Save</button>
            <button onClick={()=>props.editProfile(false)}>Cancel</button>
        </form>
    );
};


const Contact = ({contactTitle, contactValue}: any) => {
    return (
        <div>
            <b>{contactTitle}: </b>
            {contactValue}
        </div>
    );
};

