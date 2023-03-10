import styled from "styled-components";

import background from '../../assets/background-home.png'

export const HomeContainer = styled.main`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;

    header {
        padding: 6rem 0;
        width: 40%;
        margin: 0 10rem;
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

    header > div {
        margin-top: 4.125rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 37rem;
    }

    header > div > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: #574F4D;
        margin-bottom: 1.5rem;
    }

    section {
        margin: 0 10rem;
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

    @media (max-width: 768px) {
        background-size: auto;

        header {
            margin: 0 0rem;
            width: 100%;
            padding: 1rem;
            padding-top: 3rem;
        }

        header > div {
            grid-template-columns: 1fr;
            width: 100%;
        }

        section {
            margin: 0 0rem;
        }
        
        section > strong {
            padding-left: 1rem;
        }

        section > div {
            grid-template-columns: 1fr;
            margin: 0 0rem;
            margin-top: 3.375rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
        header {
            width: 60%;
        }

        header > div {
            grid-template-columns: 1fr;
            width: 100%;
        }

        section > div {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 1100px) and (max-width: 1300px) {
        section > div {
            grid-template-columns: 1fr 1fr 1fr;
        }
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

