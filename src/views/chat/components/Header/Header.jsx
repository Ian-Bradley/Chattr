import { useSelector, useDispatch } from 'react-redux';
import { useSocket } from 'Util/api/websocket.js';
import React from 'react';

// COMPONENTS
import { Container, Brand, Logo, Nav, Name } from './styles.js';
import MenuButton from 'Common/Buttons/MenuButton.jsx';
import UserSVG from 'Assets/icons/user-circle.svg.js';
import LogoutSVG from 'Assets/icons/logout.svg.js';
import GearSVG from 'Assets/icons/gear.svg.js';
import LogoSrc from 'Assets/logos/logo_1a.png';
import Menu from 'Common/Dropdowns/Menu.jsx';
import Title from 'Common/Title/Title.jsx';

// REDUX
import { setModalActive } from 'Redux/slices/modals.slice.js';
import { clearUserData } from 'Redux/slices/user.slice.js';
import { setLoggedOut } from 'Redux/slices/app.slice.js';

// UTIL
import { getCookie, deleteCookie } from 'Util/helpers/functions.js';

/**
 * @props
 */

export default function Header(props) {
    /*================================================
        BLOCK: STATES
    ==================================================*/

    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state['user'].user;
    });

    // Hooks
    const socket = useSocket();

    /*================================================
        BLOCK: EVENTS
    ==================================================*/

    const onLogout = () => {
        console.log('===> onLogout');
        // ==> Socket
        const newUpdate = {
            type: 'userDisconnected',
            userID: user.id,
            log: {
                type: 'disconnect',
                user: user,
                time: Date.now(),
            },
        };
        socket.send(JSON.stringify(newUpdate));

        // ==> Redux
        dispatch(clearUserData());
        dispatch(setLoggedOut());

        // ==> JWT session
        // TODO: check and fix
        console.log('sessionid: ', getCookie('sessionid'));
        if (getCookie('sessionid')) {
            deleteCookie('sessionid');
        }
        console.log('===> END - onLogout');
    };

    /*================================================*/
    /*================================================*/

    const onPreferences = () => {
        dispatch(setModalActive('preferences'));
    };

    /*================================================
        BLOCK: COMPONENTS
    ==================================================*/

    return (
        <>
            <Container>
                <Brand>
                    <Logo src={LogoSrc} alt={'logo'} />
                    <Title />
                </Brand>
                <Nav>
                    <Name>{user.name}</Name>
                    <Menu icon={UserSVG}>
                        <MenuButton onClick={onLogout} icon={LogoutSVG} text={'Logout'} />
                        <MenuButton onClick={onPreferences} icon={GearSVG} text={'Preferences'} />
                    </Menu>
                </Nav>
            </Container>
        </>
    );
}
