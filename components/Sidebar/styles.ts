import styled from 'styled-components';

type Props = {
    isOpen?: boolean;
}

export const Container = styled.div<Props>`
    width: 300px;
    height:  80%;
    position: absolute;
    top: 15px;
    left: ${props => (props.isOpen ? '55px' : '-300px')};
    border: solid 2px white;
    border-radius: 9px;
    background-color:  #cecece;
    transition: 0.2s;
    z-index: 1;
`;
