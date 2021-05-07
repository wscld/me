import styled from 'styled-components';

export const Container = styled.div`
  max-width:500px;
  margin:auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Title = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom:5px;
  font-weight:bolder;
  color:#2f3542;
`;

export const Subtitle = styled.div`
  font-size: 1em;
  text-align: center;
  margin-bottom:20px;
  font-weight:normal;
  color:#2f3542;
`;

export const Image = styled.img`
  border-radius:50%;
  width:100px;
  height:100px;
  margin:20px;
`;