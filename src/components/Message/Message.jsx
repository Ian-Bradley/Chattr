import React from 'react';
import './Message.scss';

/**
 * @props message (object)      Message info
 * @props preferences (object)  App+Display info
 * @props click_name (function) Clicking on a user name
 */

export default function Message ( props )
{
    /*======================================
        RENDER FUNCTIONS - Interactions
    ========================================*/

    const on_click_name = e =>
    {
        props.click_name( e );
    }

    /*======================================
        RENDER FUNCTIONS - Displaying
    ========================================*/

    // > Regular expression for image extensions
    const imageExtensionRegex = ( /\.( gif|jp?g|png|svg|bmp|tiff|bat )$/i );

    const display_timestamp = () =>
    {

        // TODO: convert date string back to object (parse JSON)

        if ( props.message.time instanceof Object || props.message.time instanceof Date )
        {
            console.log('Message.jsx - Error: Timestamp is Object --> has not passed to server')
            return null;
        }

        console.log( typeof props.message.time );
        return ('[' + props.message.time + ']');
    }
    
    /*======================================
        COMPONENTS
    ========================================*/

    switch ( props.message.type )
    {
        case 'message':
            {
                if( !( imageExtensionRegex.test( props.message.content ) ) )
                {
                    /*======================================
                        MESSAGE - Regular
                    ========================================*/

                    return (
                        <main className='container-message'>
                            <div className='message'>
                                <span className='message-time'>
                                    {display_timestamp()}
                                </span>
                                <span className={'message-name'}  style={{color: props.message.color}}>
                                    {props.message.name}
                                </span>
                                <span className='message-content'>
                                    {props.message.content}
                                </span>
                            </div>
                        </main>
                    );
                }
                else
                {
                    /*======================================
                        MESSAGE - Image
                    ========================================*/

                    return (
                        <main className='container-message'>
                            <div className='message'>
                                <span className='message-time'>
                                    {display_timestamp()}
                                </span>
                                <span className={'message-name'}  style={{color: props.message.color}} onClick={on_click_name}>
                                    {props.message.name}
                                </span>
                                <div className='message-image-container'>
                                    <img className='message-image' src={props.message.content} alt='Image'/>
                                    <span className='message-content image-caption'>
                                        {props.message.content}
                                    </span>
                                </div>
                            </div>
                        </main>
                    );
                }
            }

        /*======================================
            NOTIFICATION - Connection
        ========================================*/

        case 'notification-connect':
            {
                return (
                    <main className='container-message'>
                        <div className='message notification'>
                            <span className='message-time'>
                                {display_timestamp()}
                            </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.name}
                            </span>
                            <span className='message-text'> connected</span>
                        </div>
                    </main>
                );
            }

        /*======================================
            NOTIFICATION - Disconnection
        ========================================*/

         case 'notification-disconnect':
            {
                return (
                    <main className='container-message'>
                        <div className='message notification'>
                            <span className='message-time'>
                                {display_timestamp()}
                            </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.name}
                            </span>
                            <span className='message-text'> disconnected</span>
                        </div>
                    </main>
                );
            }

        /*======================================
            NOTIFICATION - Name change
        ========================================*/

         case 'notification-name':
            {
                return (
                    <main className='container-message'>
                        <div className='message notification'>
                            <span className='message-time'>
                                {display_timestamp()}
                            </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.namePrev}
                            </span>
                            <span className='message-text'> changed their name to </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.name}
                            </span>
                        </div>
                    </main>
                );
            }

        /*======================================
            NOTIFICATION - Color change
        ========================================*/

         case 'notification-color':
            {
                return (
                    <main className='container-message'>
                        <div className='message notification'>
                            <span className='message-time'>
                                {display_timestamp()}
                            </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.name}
                            </span>
                            <span className='message-text'> changed their color from </span>
                            <span className={'message-name'} style={{color: props.message.colorPrev}}>
                                {props.message.colorPrev}
                            </span>
                            <span className='message-text'> to </span>
                            <span className={'message-name'}  style={{color: props.message.color}}>
                                {props.message.color}
                            </span>
                        </div>
                    </main>
                );
            }

        /*======================================*/
        /*======================================*/

        default:
        {  
            console.log('Message.jsx - Error: Unrecognized message type');
            return null;
        }
    }
}