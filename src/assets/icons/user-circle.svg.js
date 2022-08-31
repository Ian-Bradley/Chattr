import styled from 'styled-components';
import React from 'react';

export default function UserCircleSVG(props) {
    return (
        <>
            <SVG viewBox='0 0 512 512'>
                <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='square'
                    strokeLinejoin='10'
                    strokeWidth='48'
                    d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z'
                />
            </SVG>
        </>
    );
}

const SVG = styled.svg`
    height: 100%;
    width: 100%;
`;
