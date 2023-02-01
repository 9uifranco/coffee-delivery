import styled from "styled-components";

export const CoffeeCardContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F3F2F2;
    width: 16rem;
    //height: 19.375rem;
    margin-bottom: 2.5rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-family: 'Baloo 2', cursive;
        color: #403937;
    }

    p {
        font-size: 0.875rem;
        color: #8D8686;
        margin: 0 1.5rem;
        margin-top: 0.5rem;
        text-align: center;
    }

    img {
        width: 7.5rem;
        margin-top: -1.5rem;
    }

    .categoryContainer {
        display: flex;
        flex-direction: row;
    }

    .categoryContainer > span {
        font-size: 0.625rem;
        font-weight: 700;
        background-color: #F1E9C9;
        color: #C47F17;
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        margin: 0 0.25rem;
        margin-top: 0.75rem;
        margin-bottom: 1rem;
    }

    footer {
        padding: 0 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 1.25rem;
        justify-content: space-between;
        width: 100%;
    }

    footer > div {
        display: flex;
        align-items: center;
    }

    .currency {
        color: #574F4D;
        font-size: 0.875rem;
        margin-right: 0.25rem;
    }

    .price {
        color: #574F4D;
        font-size: 1.5rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .amountContainer {
        background-color: #E6E5E5;
        width: 4.5rem;
        height: 2.375rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 6px;
        margin-right: 0.5rem;
    }

    .amountContainer > button {
        border: none;
        background-color: #E6E5E5;
        cursor: pointer;
        width: 1rem;
        font-size: 1rem;
        color: #4B2995;
        margin: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .amountContainer > button:hover {
        border: none;
        color: #8047F8;
        cursor: pointer;
    }
`

const IconContainer = styled.button`
    height: 2.375rem;
    width: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: relative;
    border: none;
    color: #F3F2F2;
`

export const IconContainerPurpleDark = styled(IconContainer)`
    background-color: #4B2995;
    cursor: pointer;

    :hover {
        background-color: #8047F8;
    }
`

export const IconContainerYellow = styled(IconContainer)`
    background-color: #DBAC2C;
`