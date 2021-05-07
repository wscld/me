import React from 'react';
import { Container } from './styles';

const ListItem = ({ title, link }) => {

    return (
        <Container href={link} target='_blank'>
            {title}
        </Container>
    )
}
export default ListItem;