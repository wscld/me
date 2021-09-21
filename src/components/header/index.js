import React, { useEffect, useState } from 'react';
import { getAvatar } from '../../services/github';
import { Title, Subtitle, Image, Container } from './styles';

const Header = () => {
    const [image, setImage] = useState('');
    useEffect(() => {
        getAvatar('wscld').then(res => {
            setImage(res);
        })
    }, []);

    return (
        <Container>
            <Image src={image} />
            <Title>Wesley Caldas</Title>
            <Subtitle>🧑🏻‍💻 Desenvolvedor Front-End / Mobile (Angular | Typescript | JS | React Native)</Subtitle>
        </Container>
    )
}
export default Header;
