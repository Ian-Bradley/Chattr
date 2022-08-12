import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AuthContainer,
    AuthFormContainer,
    AuthImage,
    AuthForm,
    AuthInput,
    AuthLabel,
    AuthChecbox,
    AuthTitleContainer,
    AuthTitle,
} from './styles.js';

export default function Auth(props) {
    /*================================================
        BLOCK: STATE
    ==================================================*/

    // Redux
    // const dispatch = useDispatch();
    // const user = useSelector((state) => {
    //     return state['user'].user;
    // });

    // Hooks
    const [checked, setChecked] = useState('');

    /*================================================
        BLOCK: HOOK - USER INFO
    ==================================================*/
    // TODO: only do AUTH if 'remember me' is checked (stored in cookies/local)
    // TODO: Cookies

    useEffect(() => {
        console.log('---------- USE-EFFECT - User Info ----------');
        // Get current userID (and maybe name/team/color) from cookies
        // If ID is not present, auth page has failed to store cookie
        // let userID = this.getCookie('user-id')
        // this.set_user_ID( userID )
    });

    /*================================================
        BLOCK: EVENTS
    ==================================================*/

    const onUserName = (e) => {
        console.log('===> onUserName');
        console.log('===> END - onUserName');
    };

    /*================================================*/

    const onPassword = (e) => {
        console.log('===> onPassword');
        console.log('===> END - onPassword');
    };

    /*================================================*/

    const onRememberMe = (e) => {
        console.log('===> onRememberMe');
        console.log('===> END - onRememberMe');
    };
    
    /*=================================================
        BLOCK: RENDERING
    ===================================================*/

    /*================================================
        BLOCK: COMPONENTS
    ==================================================*/

    return (
        <AuthContainer>
            <AuthFormContainer>
                <AuthImage src='' alt='logo'/>
                <AuthForm>
                    <AuthTitleContainer>
                        <AuthTitle>Sign In</AuthTitle>
                    </AuthTitleContainer>
                    <AuthInput type='text' onKeyUp={onUserName} placeholder='User name' />
                    <AuthInput type='text' onKeyUp={onPassword} placeholder='Passworde' />
                    <div>
                        <AuthChecbox id='remember-me' type='checkbox' onKeyUp={onRememberMe} />
                        <AuthLabel htmlFor='remember-me'></AuthLabel>
                    </div>
                    <Link to='/room'>test</Link>
                </AuthForm>
            </AuthFormContainer>
        </AuthContainer>
    );
}