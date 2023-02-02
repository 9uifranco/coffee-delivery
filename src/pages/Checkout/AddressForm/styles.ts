import styled from "styled-components";

export const OrderInfoContainer = styled.section`
    div {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row; 
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.125rem;
        color: #272221;
        line-height: 130%;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }
`

const InfoSectionContainer = styled.section`
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-radius: 6px;
    width: 49rem;
    font-family: 'Roboto', sans-serif;

    header {
        display: flex;
        margin-bottom: 2rem;

        svg {
            margin-right: 0.5rem;
        }

        div > span:nth-child(1) {
            font-size: 1rem;
            color: #403937;
            margin-bottom: 0.125rem;
        }

        div > span:nth-child(2) {
            font-size: 0.875rem;
            color: #574F4D;
        }
    }

    input {
        height: 2.875rem;
        font-size: 0.875rem;
        border-radius: 4px;
        padding: 0.75rem;
        margin-bottom: 1rem;
        outline: none;
        border: 1px solid #E6E5E5;
        background-color: #EDEDED;
        color: #574F4D;
    }

    input::placeholder {
        color: #8D8686
    }

    input:focus {
        border-color: #C47F17;
    }
`

export const AddressFormContainer = styled(InfoSectionContainer)`
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: column;

    .row > input + input {
        margin-left: 0.75rem;
    }

    .cep, .numero, .bairro {
        width: 12.5rem;
    }

    .complemento {
        display: flex;
        flex-grow: 1;
    }

    .cidade {
        flex-grow: 1;
    }

    .uf {
        width: 3.75rem;
    }
`

export const PaymentMethodContainer = styled(InfoSectionContainer)`
`

type CustomCheckboxType = {
    option: string
    selected: string
}

export const CustomCheckbox = styled.button<CustomCheckboxType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    background-color: red;
    margin-right: 0.75rem;
    background-color: #E6E5E5;
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    color: #574F4D;
    cursor: pointer;
    outline: none;
    border: 1px solid #E6E5E5;

    input {
        display: none;
    }

    :hover {
        color: #403937;
        background-color: ${props => (props.option == props.selected) ? "#EBE5F9" : "#D7D5D5"};
    }

    background-color: ${props => (props.option == props.selected) ? "#EBE5F9" : "#E6E5E5"};
    border-color: ${props => (props.option == props.selected) ? "#8047F8" : "#E6E5E5"};

`