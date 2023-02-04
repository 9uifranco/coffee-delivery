import styled from "styled-components";

export const CheckoutContainer = styled.main`
    margin: 5rem 10rem;
    
    > h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        color: #272221;
        line-height: 130%;
    }

    form {
        display: flex;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        margin: 1rem 0;
        padding: 1rem;

        form {
            flex-direction: column;
        }
    }
`