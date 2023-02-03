import styled from "styled-components";

export const SuccessContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    gap: 6.375rem;
    margin-top: 5rem;
    margin-bottom: 2rem;

    .wrapper-for-custom-border {
        background: linear-gradient(to right, #DBAC2C, #8047F8);
        border-top-left-radius: 6px;
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
        border-bottom-right-radius: 6px;
        padding: 1px;
    }

    > div {
        display: flex;
        flex-direction: column;

        > h1 {
            font-family: 'Baloo 2', cursive;
            font-weight: 700;
            font-size: 2rem;
            color: #C47F17;
            line-height: 130%;
            margin-bottom: 0.25rem;
        }

        > span {
            font-size: 1.25rem;
            color: #403937;
            margin-bottom: 2.5rem;
        }
    }

    img {
        width: 100%;
    }

    @media (max-width: 768px) {
        margin-top: 1rem;
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 6px;
    width: 100%;
    background: #FAFAFA;

    > div + div {
        margin-top: 2rem;
    }
`

export const OrderInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 2.625rem;
    color: #574F4D;

    > div {
        display: flex;
        flex-direction: column;
    }
`

const IconContainer = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 0.75rem;
`

export const IconContainerYellowDark = styled(IconContainer)`
    background-color: #C47F17;
`

export const IconContainerYellow = styled(IconContainer)`
    background-color: #DBAC2C;
`

export const IconContainerPurple = styled(IconContainer)`
    background-color: #8047F8;
`