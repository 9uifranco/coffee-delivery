import styled from "styled-components";

export const HomeContainer = styled.main`

    header {
        height: 34rem;
        padding: 6rem 0;
        width: 50%;
    }

    header > h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        color: #272221;
        line-height: 130%;
        margin-bottom: 1rem;
    }

    header > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        color: #403937;
        line-height: 130%;    
    }

    section > strong {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        margin-top: 2rem;
        color: #403937;
        font-size: 2rem
    }

    section > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        margin: 0 -3rem;
        margin-top: 3.375rem;
    }

    .benefits {
        margin-top: 4.125rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .benefits > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: #574F4D;
        margin-bottom: 1.5rem;
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

export const IconContainerGray = styled(IconContainer)`
    background-color: #574F4D;
`

export const IconContainerPurple = styled(IconContainer)`
    background-color: #8047F8;
`
