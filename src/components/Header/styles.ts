import styled from "styled-components";

export const NavContainer = styled.nav`
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10rem;

    @media (max-width: 768px) {
        margin: 0 0rem;
        padding: 0 1rem;
    }
`

export const IconContainer = styled.div`
    height: 2.375rem;
    width: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #F1E9C9;
    position: relative;

    span {
        background-color: #C47F17;
        width: 1.25rem;
        height: 1.25rem;
        color: white;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -0.5rem;
        margin-right: -0.5rem;
        font-size: 0.75rem;
        text-align: center;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
`