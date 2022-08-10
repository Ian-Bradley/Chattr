import styled from 'styled-components';
import { APP_HEIGHT_MESSAGES } from '../../styles/constants.js';
/*======================================*/
export const MessageListContainer = styled.div`
    display: flex;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    justify-content: initial;

    width: 100%;
    height: ${APP_HEIGHT_MESSAGES};
    overflow-y: scroll;
`;
/*======================================*/
