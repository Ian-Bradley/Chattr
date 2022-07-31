import React from 'react';
import Message from '../Message/Message.jsx';
import './MessageList.scss';

/**
 * @props messages (array)      List of all messages
 * @props preferences (object)  App+Display info
 * @props click_name (function) Clicking on a user name
 */

export default function MessageList ( props )
{

    /*======================================
        RENDER FUNCTIONS - Interactions
    ========================================*/


    /*======================================
        RENDER FUNCTIONS - Displaying
    ========================================*/

    const display_messages = () =>
    {
        if ( !( props.messages === undefined ) && ( props.messages.length ) )
        {
            let messageArray = [];
            for (let i = 0; i < props.messages.length; i++)
            {
                messageArray.push(
                    <Message
                        key={i}
                        message={props.messages[i]}
                        preferences={props.preferences}
                        click_name={props.click_name}
                    />
                );
            }
            return messageArray;
        }
    }

    /*======================================
        COMPONENTS
    ========================================*/

    return (
        <main className='message-list'>
            {display_messages()}
        </main>
    );
}