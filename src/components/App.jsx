import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const WS = new WebSocket(WS_URL); // TODO: move to context layer provider

// COMPONENETS
import NavBar from './NavBar/NavBar.jsx';
import ChatBar from './ChatBar/ChatBar.jsx';
import UserList from './UserList/UserList.jsx';
import ChannelList from './ChannelList/ChannelList.jsx';
import MessageList from './MessageList/MessageList.jsx';

// CSS COMPONENTS
import {
    MainApp,
    ContainerApp,
    ContainerBody,
    ContainerChat,
    ContainerSidebar,
    Dev,
    DevInfo,
    DevTools,
    DevList,
    DevListItem,
    DevTitle,
} from './styles.js';

// GLOBAL CONSTANTS + UTILS
import { WS_URL } from '../util/constants.js';
import { generateRandomName, generateRandomColor } from '../util/functions.js';

/*================================================
    BLOCK: REDUX ACTIONS
==================================================*/

import {
    setUserTotal,
    incrementUserTotal,
    decrementUserTotal,
} from '../redux/features/userTotal.feature.js';
/*======================================*/
import { setID, setName, setNickname, setColor } from '../redux/features/user.feature.js';
/*======================================*/
import {
    addUser,
    removeUser,
    setUsers,
    setUserName,
    setUserNickname,
    setUserColor,
} from '../redux/features/users.feature.js';
/*======================================*/
import { toggleTimestamps, toggle24HourTime } from '../redux/features/preferences.feature.js';
/*======================================*/
import {
    setChannel,
    // setName,
    setPublic,
    setPrivate,
    setPassword,
} from '../redux/features/channel.feature.js';
/*======================================*/
import {
    addChannel,
    deleteChannel,
    deleteAllChannels,
    setChannels,
    setChannelActive,
    setChannelInctive,
    setChannelPrivate,
    setChannelPublic,
    setChannelPassword,
} from '../redux/features/channels.feature.js';
/*======================================*/
import {
    addMessage,
    deleteMessage,
    deleteAllMessages,
    setMessages,
} from '../redux/features/messages.feature.js';
/*======================================*/
import { addLogItem, deleteLogItem, deleteAllLogItems } from '../redux/features/log.feature.js';
/*======================================*/

export default function App() {
    /*================================================
        BLOCK: STATE
    ==================================================*/

    // Redux
    const dispatch = useDispatch();

    const user = useSelector((state) => {
        return state['user'].user;
    });
    const prefs = useSelector((state) => {
        return state['preferences'].preferences;
    });

    // Hooks
    const [WSReady, setWSReady] = useState(false);

    /*================================================
        BLOCK: HOOKS - USER INFO
    ==================================================*/

    useEffect(() => {
        console.log('---------- USE-EFFECT - User Info ----------');
        // TODO: Cookies
        // Get current userID (and maybe name/team/color) from cookies
        // If ID is not present, auth page has failed to store cookie
        // let userID = this.getCookie('user-id')
        // this.set_user_ID( userID )
    });

    /*================================================
        BLOCK: HOOKS - WEBSOCKET COMMUNICATION
    ==================================================*/

    useEffect(() => {
        console.log('---------- USE-EFFECT - WebSocket ----------');

        /*================================================
            INNERBLOCK: > WS - ON OPEN
        ==================================================*/

        WS.onopen = (e) => {
            console.log('>>>>>>>>> WebSocket Client Connected >>>>>>>>>');
            // setWSReady(true);
        };

        /*================================================
            INNERBLOCK: > WS - ON MESSAGE
        ==================================================*/

        WS.onmessage = (messageData) => {
            const updateData = JSON.parse(messageData.data);
            console.log('>>>>>>>>> MESSAGE RECIEVED - ' + updateData.type + ' >>>>>>>>>');

            switch (updateData.type) {
                /*================================================*/
                /*================================================*/

                // HANDLER: => clientConnected
                case 'clientConnected': {
                    // This handler is only fired ONCE when the CURRENT user joins
                    console.log('======= START - MESSAGE - clientConnected =======');

                    // ==> Set current user ID
                    // TODO: returning users will not do this
                    // they will get id/name from cookies/localStorage OR from here on "return check" (create a new variable)
                    if (updateData.userID) {
                        dispatch(setID(updateData.userID));
                    }

                    // ==> Set messages
                    if (!(updateData.messages === undefined) && updateData.messages.length) {
                        dispatch(setMessages(updateData.messages));
                    }

                    // ==> Set users
                    if (!(updateData.users === undefined) && updateData.users.length) {
                        dispatch(setUsers(updateData.users));
                        dispatch(setUserTotal(updateData.users.length + 1)); // + 1 for current user
                    }

                    // TODO: =>>>>> MOVE USER ID AND USERCONNECTD TO NON-WS SERVER CODE
                    // ==> Send current user (with new user message) information to server
                    let newUpdate = {
                        type: 'userConnected',
                        user: user,
                        message: {
                            type: 'notification-connect',
                            name: user.name,
                            time: new Date().toGMTString(),
                            color: user.color,
                        },
                    };
                    WS.send(JSON.stringify(newUpdate));
                    console.log('>>>>>>>>> MESSAGE SENT - userConnected >>>>>>>>>');
                    console.log('======= END - MESSAGE - clientConnected =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => userConnected
                case 'userConnected': {
                    // This handler is only fired when OTHER users join
                    console.log('======= START - MESSAGE - userConnected =======');
                    dispatch(addUser(updateData.user));
                    dispatch(addLogItem(updateData.message));
                    dispatch(incrementUserTotal());
                    console.log('======= END - MESSAGE - userConnected =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => userDisconnected
                case 'userDisconnected': {
                    // This handler is only fired when OTHER users leave
                    console.log('======= START - MESSAGE - userDisconnected =======');
                    dispatch(removeUser(updateData.userID));
                    dispatch(addLogItem(updateData.message));
                    dispatch(decrementUserTotal());
                    console.log('======= END - MESSAGE - userDisconnected =======');
                    // break
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateUserName
                case 'updateUserName': {
                    console.log('======= START - MESSAGE - updateUserName =======');
                    if (updateData.user.id === user.id) {
                        dispatch(setName(updateData.newName));
                    } else {
                        dispatch(setUserName({ id: updateData.user, name: updateData.newName }));
                    }
                    dispatch(addLogItem(updateData.message));
                    console.log('======= END - MESSAGE - updateUserName =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateUserNickame
                case 'updateUserNickame': {
                    console.log('======= START - MESSAGE - updateUserNickname =======');
                    if (updateData.user.id === user.id) {
                        dispatch(setNickname(updateData.newNickname));
                    } else {
                        dispatch(
                            setUserNickname({
                                id: updateData.user,
                                nickname: updateData.newNickname,
                            })
                        );
                    }
                    dispatch(addLogItem(updateData.message));
                    console.log('======= END - MESSAGE - updateUserNickname =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateUserColor
                case 'updateUserColor': {
                    console.log('======= START - MESSAGE - updateUserColor =======');
                    if (updateData.user.id === user.id) {
                        dispatch(setColor(updateData.newColor));
                    } else {
                        dispatch(setUserColor({ id: updateData.user, color: updateData.newColor }));
                    }
                    dispatch(addLogItem(updateData.message));
                    console.log('======= END - MESSAGE - updateUserColor =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateAddChannel
                case 'updateAddChannel': {
                    console.log('======= START - MESSAGE - updateAddChannel =======');
                    updateData.id = uuidv4();
                    // dispatch(  )
                    // serverData.addChannel( updateData.channel )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateAddChannel >>>>>>>>>');
                    console.log('======= END MESSAGE - updateAddChannel =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateDeleteChannel
                case 'updateDeleteChannel': {
                    console.log('======= START - MESSAGE - updateDeleteChannel =======');
                    updateData.id = uuidv4();
                    // serverData.deleteChannel( updateData.channelID )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateDeleteChannel >>>>>>>>>');
                    console.log('======= END MESSAGE - updateDeleteChannel =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateChannelName
                case 'updateChannelName': {
                    console.log('======= START - MESSAGE - updateChannelName =======');
                    updateData.id = uuidv4();
                    // serverData.setChannelName( updateData.channel, updateData.newName )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateChannelName >>>>>>>>>');
                    console.log('======= END MESSAGE - updateChannelName =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateChannelPublic
                case 'updateChannelPublic': {
                    console.log('======= START - MESSAGE - updateChannelPublic =======');
                    updateData.id = uuidv4();
                    // serverData.setChannelPublic( updateData.channel )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateChannelPublic >>>>>>>>>');
                    console.log('======= END MESSAGE - updateChannelPublic =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateChannelPrivate
                case 'updateChannelPrivate': {
                    console.log('======= START - MESSAGE - updateChannelPrivate =======');
                    updateData.id = uuidv4();
                    // serverData.setChannelPrivate( updateData.channel )
                    // serverData.setChannelPassword( updateData.channel, updateData.password )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateChannelPrivate >>>>>>>>>');
                    console.log('======= END MESSAGE - updateChannelPrivate =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => updateChannelPassword
                case 'updateChannelPassword': {
                    console.log('======= START - MESSAGE - updateChannelPassword =======');
                    updateData.id = uuidv4();
                    // serverData.setChannelPassword( updateData.channel, updateData.password )
                    dispatch(addLogItem(updateData.message));
                    console.log('>>>>>>>>> MESSAGE SENT - updateChannelPassword >>>>>>>>>');
                    console.log('======= END MESSAGE - updateChannelPassword =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                // HANDLER: => newMessage
                case 'newMessage': {
                    console.log('======= START - MESSAGE - newMessage =======');
                    dispatch(addMessage(updateData.message));
                    console.log('======= END - MESSAGE - newMessage =======');
                    break;
                }

                /*================================================*/
                /*================================================*/

                default:
            }
        };

        /*================================================
            INNERBLOCK: > WS - ON CLOSE
        ==================================================*/

        WS.onclose = (e) => {
            // setWSReady(false);
            // TODO: check if neeeded
            // setTimeout(() => {
            //     setWS(new WebSocket(WS_URL));
            // }, 1000);
        };

        /*================================================
            INNERBLOCK: > WS - ON ERROR
        ==================================================*/

        WS.onerror = (err) => {
            console.log('WebSocket encountered error: ', err.message, ' --> Closing socket');
            setWSReady(false);
            WS.close();
        };

        /*================================================
            INNERBLOCK: > WS - COMPONENT UNMOUNTING
        ==================================================*/

        return () => {
            WS.close();
        };
    }, [WS]);

    /*================================================
        BLOCK: WS SENDERS - USER INFO
    ==================================================*/

    // FUNCTION: => sendUserName
    const sendUserName = (newName) => {
        console.log('===> sendUserName');
        let newUpdate = {
            type: 'updateUserName',
            userID: user.id,
            newName: newName,
            message: {
                type: 'notification-name',
                name: newName,
                namePrev: user.name,
                time: new Date().toGMTString(),
                color: user.color,
            },
        };
        WS.send(JSON.stringify(newUpdate));
        console.log('>>>>>>>>> MESSAGE SENT - updateUserName >>>>>>>>>');
        console.log('===> END - sendUserName');
    };

    /*======================================*/
    /*======================================*/

    // FUNCTION: => sendUserNickname
    const sendUserNickname = (newNickname) => {
        console.log('===> sendUserNickname');
        let newUpdate = {
            type: 'updateUserNickname',
            userID: user.id,
            newNickname: newNickname,
            message: {
                type: 'notification-nickname',
                nickname: newNickname,
                nicknamePrev: user.nickname,
                time: new Date().toGMTString(),
                color: user.color,
            },
        };
        WS.send(JSON.stringify(newUpdate));
        console.log('>>>>>>>>> MESSAGE SENT - updateUserNickname >>>>>>>>>');
        console.log('===> END - sendUserNickname');
    };

    /*======================================*/
    /*======================================*/

    // FUNCTION: => sendUserColor
    const sendUserColor = (newColor) => {
        console.log('===> sendUserColor');
        let newUpdate = {
            type: 'updateUserColor',
            userID: user.id,
            newColor: newColor,
            message: {
                type: 'notification-color',
                name: user.name,
                time: new Date().toGMTString(),
                color: newColor,
                colorPrev: user.color,
            },
        };
        WS.send(JSON.stringify(newUpdate));
        console.log('>>>>>>>>> MESSAGE SENT - updateUserColor >>>>>>>>>');
        console.log('===> END - sendUserColor');
    };

    /*================================================
        BLOCK: WS SENDERS - EVENTS
    ==================================================*/

    // FUNCTION: => sendMessage
    const sendMessage = (newMessage) => {
        console.log('===> sendMessage');
        let newUpdate = {
            type: 'newMessage',
            message: newMessage,
        };
        WS.send(JSON.stringify(newUpdate));
        console.log('>>>>>>>>> MESSAGE SENT - newMessage >>>>>>>>>');
        console.log('===> END - sendMessage');
    };

    /*======================================*/
    /*======================================*/

    // FUNCTION: => clickName
    const clickName = (data) => {
        console.log('===> clickName');
        console.log('data: ', data);
        // TODO: name clicking
        // --> open DM + Info sidebar (OVER player list)
        // --> this sidebar will have a button to swap to DM Chat (new window, don't overwrite MessageList, just make a new one on top)
        // --> 'return to main chat' button
        // --> maybe have a 'close chat' option to reduce open windows
        console.log('===> END - clickName');
    };

    /*======================================*/
    /*======================================*/

    // FUNCTION: => clickChannel
    const clickChannel = (data) => {
        console.log('===> clickChannel');
        console.log('data: ', data);
        // TODO: channel clicking
        console.log('===> END - clickChannel');
    };

    /*================================================
        BLOCK: DEV TOOLS
    ==================================================*/

    const onDevuser = () => {
        dispatch(
            addUser({
                id: generateRandomName(),
                name: generateRandomName(true),
                nickname: generateRandomName(false),
                color: generateRandomColor(),
            })
        );
    };
    const onDevcolor = () => {
        sendUserColor(generateRandomColor());
    };
    const onDevname = (e) => {
        if (e.keyCode === 13) {
            sendUserNickname(e.target.value);
            e.target.value = '';
        }
    };
    const onDevname3 = (e) => {
        if (e.keyCode === 13) {
            sendUserName(e.target.value);
            e.target.value = '';
        }
    };
    const onDevname2 = () => {
        sendUserNickname(generateRandomName());
    };
    const onDevpref4 = () => {
        dispatch(toggleTimestamps());
    };
    const onDevpref5 = () => {
        dispatch(toggle24HourTime());
    };

    /*================================================
        BLOCK: COMPONENTS
    ==================================================*/

    return (
        <MainApp>
            <ContainerApp>
                <NavBar />
                <ContainerBody>
                    <ContainerSidebar>
                        <ChannelList clickChannel={clickChannel} />
                    </ContainerSidebar>
                    <ContainerChat>
                        <MessageList clickName={clickName} />
                        <ChatBar sendMessage={sendMessage} />
                    </ContainerChat>
                    <ContainerSidebar>
                        <UserList clickName={clickName} />
                    </ContainerSidebar>
                </ContainerBody>
            </ContainerApp>

            <Dev>
                <DevInfo>
                    <DevList>
                        <DevListItem>
                            <DevTitle>Current User: </DevTitle>
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>ID</DevTitle>
                            {user.id + ' '}
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>Name</DevTitle>
                            {user.name + ' '}
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>Nickname</DevTitle>
                            {user.nickname + ' '}
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>Color</DevTitle>
                            {user.color + ' '}
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>Timestamps</DevTitle>
                            {prefs.showTimestamps + ' '}
                        </DevListItem>
                        <DevListItem>
                            <DevTitle>24HourTime</DevTitle>
                            {prefs.show24HourTime + ' '}
                        </DevListItem>
                    </DevList>
                </DevInfo>
                <DevTools>
                    <input
                        type='text'
                        className='name-input'
                        placeholder='Specific name'
                        defaultValue=''
                        onKeyDown={onDevname3}
                    />
                    <input
                        type='text'
                        className='name-input'
                        placeholder='Specific nickname'
                        defaultValue=''
                        onKeyDown={onDevname}
                    />
                    <button onClick={onDevname2}>Name</button>
                    <button onClick={onDevcolor}>Color</button>
                    <button onClick={onDevuser}>Fake User</button>
                    <div>
                        <input type='checkbox' id='dev-time' onClick={onDevpref4} />
                        <label htmlFor='dev-time'>Timestamps</label>
                    </div>
                    <div>
                        <input type='checkbox' id='dev-hour' onClick={onDevpref5} />
                        <label htmlFor='dev-hour'>24 hour time</label>
                    </div>
                </DevTools>
            </Dev>
        </MainApp>
    );
}
