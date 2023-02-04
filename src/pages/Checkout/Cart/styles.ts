import styled from "styled-components";

export const CartContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.125rem;
        color: #272221;
        line-height: 130%;
        margin-bottom: 1rem;
    }
`

export const SelectedCoffeesContainer = styled.section`
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    width: 28rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;

    .totalPrice {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    }

    .totalPrice > div {
        display: flex;
        justify-content: space-between;
    }

    .totalPrice > div + div {
        margin-top: 0.75rem;
    }

    .totalPrice > div:nth-child(1), .totalPrice > div:nth-child(2) {
        color: #574F4D;
        
        span:nth-child(1) {
            font-size: 0.875rem;
        }

        span:nth-child(2) {
            font-size: 1rem;
        }
    }

    .totalPrice > div:nth-child(3) {
        font-size: 1.25rem;
        color: #403937
    } 

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const CoffeeContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
    border-bottom: 1px solid #E6E5E5;
    margin-bottom: 1.5rem;

    
    img {
        width: 4rem;
        margin-right: 1.25rem;
    }

    div {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        
    }

    div > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div > div:nth-child(1) {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        span:nth-child(1) {
            color: #403937;
        }

        span:nth-child(2) {
            font-weight: 700;
            color: #574F4D;
            white-space: nowrap;
        }
    }

    div > div:nth-child(2) {
        gap: 0.5rem;
        width: fit-content;
    }

    div > div {
        .amountContainer {
            background-color: #E6E5E5;
            width: 5rem;
            max-width: fit-content;
            height: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-radius: 6px;
            margin-right: 0.5rem;
        }

        .amountContainer > span {
            font-weight: 400;
            color: #272221;
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
    }

    @media (max-width: 768px) {
        div > div:nth-child(2) {
            justify-content: space-between;
            width: 100%;
        }    
    }
`

export const ConfirmButton = styled.button`
    width: 100%;
    height: 2.875rem;
    border: none;
    border-radius: 6px;
    background-color: #DBAC2C;
    color: white;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        background-color: #C47F17;
    }
`

export const RemoveButton = styled.button`
    background-color: #E6E5E5;
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    color: #574F4D;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
    gap: 0.25rem;
    padding: 0.5rem;

    :hover {
        background-color: #D7D5D5;
        color: #403937;

        svg {
            color: #4B2995;
        }
    }
`