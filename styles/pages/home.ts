import styled from "styled-components";

export const Container = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    display: flex;

    >.sidebarClose{
        position: absolute;
        height: 30px;
        width: 30px;
        display: flex;
        border: none;
        
        align-items: center;
        justify-content: center;
        top: 10px;
        left: 10px;
        transition: 0.47s;
        background: none;
        z-index: 5;
        background: none;
        /* border: solid 2px white; */
        border-radius: 15px;

        &:hover{
            cursor: pointer;
            background: rgba(255, 255, 255, 0.2);
        }
    }

    >.sidebarOpen{
        position: absolute;
        height: 30px;
        width: 30px;
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        top: 10px;
        left: 10px;
        transition: 0.47s;
        background: none;
        /* border: solid 2px white; */
        z-index: 5;
        border-radius: 15px;
        transform: rotate(180deg);

         &:hover{
            cursor: pointer;
            background: rgba(255, 255, 255, 0.2);
        }
    }
`