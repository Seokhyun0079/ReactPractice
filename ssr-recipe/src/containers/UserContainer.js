import React, { useEffect } from "react";
import { Preloader, usePreloader } from "../lib/PreloadContext";
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../modules/users';
import User from '../components/User';

const UserContainer = ({id}) => {
    console.dir("userContainer.js");
    const user = useSelector(state => {
        return state.users.user;
    });
    const dispatch = useDispatch();

    usePreloader(()=> dispatch(getUser(id)));
    
    useEffect(() => {
        if(user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    }, [dispatch, id, user]);

    if(!user) return null;
    
    return <User user={user}/>;
}

export default UserContainer;