import styled from 'styled-components';

export const Container = styled.a`
    padding:15px;
    margin: 10px auto;
    display: flex;
    justify-content: left;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition:.2s;
    &:hover{
        background-color:#1abc9c;
        color:white;
    }
`;