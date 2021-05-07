import styled from 'styled-components';

export const Container = styled.div`
    background-color:white;
    max-width:500px;
    margin:auto;
    padding:20px;
    border-radius:10px;
    margin-bottom:10px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    -webkit-box-shadow: 4px 4px 18px -5px rgb(179 179 179 / 72%);
    -moz-box-shadow: 4px 4px 18px -5px rgba(179, 179, 179, 0.72);
    box-shadow: 4px 4px 18px -5px rgb(179 179 179 / 72%);
`;

export const List = styled.div`
  width:100%;
`;

export const Title = styled.div`
  font-size: 1em;
  text-align: left;
  margin-bottom:20px;
  font-weight:bolder;
  color:#2f3542;
`;

export const Link = styled.a`
    color:#1abc9c;
    font-weight:bold;
    border-bottom:1px dashed black;
    margin:10px;
    transition:.2s;
    cursor: pointer;
    text-decoration:none;
    &:hover{
        border-bottom:1px dashed #1abc9c;
    }
`;
