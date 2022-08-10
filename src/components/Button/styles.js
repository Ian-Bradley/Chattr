import styled from 'styled-components';
import {
    APP_FONT_SIZE,

} from '../../styles/constants.js';
/*======================================*/
export const Button = styled.div`
    position: relative;
    cursor: pointer;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    width: auto;
    height: $button-height;

    padding: 0.4rem 1rem 0.3rem;
    border-radius: $button-border-radius;

    font-size: $button-font-size;
    font-weight: $button-weight;
    line-height: $button-line-height;

    background: #fff;
    border-color: #fff;

    &:hover {
        background: #fff;
        border-color: #fff;
    }

    &:active {

    }

    &.btn-icon-only {
        max-width: $button-height;
    }
`;
/*======================================*/
export const ButtonIcon = styled.div`
    width: $button-icon-size;
    height: $button-icon-size;
    min-width: $button-icon-size;
    min-height: $button-icon-size;
    pointer-events: none;

    &.btn-m-left {
        margin-left: 4px;
    }

    &.btn-m-right {
        margin-right: 4px;
    }
`;
/*======================================*/