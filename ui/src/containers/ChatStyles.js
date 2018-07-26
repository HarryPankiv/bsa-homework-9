import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(20deg,rgb(219,112,147),#daa357)
`

export const MessageInput = styled.input`
    margin-left: 20px;
    width: 80%;
    border: none;
    outline: none;
    color: white;
    background: transparent;
    &::placeholder {
        color: white
    }
`

export const Button = styled.button`
    /* Adapt the colours based on primary prop */
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    &:focus {
        outline: none;
    }
`