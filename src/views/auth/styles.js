import { sizes, transition } from 'Styles/common.js';
import styled from 'styled-components';
/*======================================*/
/*======================================*/
export const Container = styled.div`
    position: relative;
    box-sizing: initial;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    width: ${window.innerWidth < 400 ? window.innerWidth : '400px'};
    height: auto;
    overflow: hidden;

    padding: 80px ${sizes.spacing.app};

    background: ${({ theme }) => theme.bg.main_2};
    border: ${(props) => props.borderWidth}px solid ${({ theme }) => theme.border.highlight};
    border-radius: 0;
`;
/*======================================*/
/*======================================*/
export const Forms = styled.div`
    position: relative;
    width: 60%;

    display: grid;

    transition: padding linear ${transition.transform};

    & form:first-child {
        transform: translateX(calc(400px * ${(props) => (props.form === 'login' ? 0 : -1)}));
    }

    & form:last-child {
        transform: translateX(calc(400px * ${(props) => (props.form === 'register' ? 0 : 1)}));
    }
`;
/*======================================*/
/*======================================*/
export const Error = styled.div`
    height: 0;
    color: ${({ theme }) => theme.text.error};

    transition: padding linear ${transition.transform};
    padding: ${(props) => (props.error ? sizes.spacing.app : 0)} 0
        ${(props) => (props.error ? '1rem' : 0)} 0;
`;
