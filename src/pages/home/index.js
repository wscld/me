import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ListItem from '../../components/list-item';
import { getRepos } from '../../services/github';
import { getMediumPosts } from '../../services/medium';
import { Container, List, Link, Title } from './styles';

const Home = () => {
    const [repos, setRepos] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getRepos('wscld').then(res => {
            setRepos(res.data);
        })

        getMediumPosts('wscld').then(res => {
            setPosts(res.data.items);
        })
    }, []);

    return (
        <>
            <Header></Header>
            <Container>
                <Link href='https://github.com/wscld' target='_blank'>
                    Github
                </Link> /
                <Link href='https://medium.com/@wscld' target='_blank'>
                    Medium
                </Link> /
                <Link href='https://linkedin.com/in/wscld' target='_blank'>
                    Linkedin
                </Link > /
                <Link href='https://wscld.github.io/portfolio/' target='_blank'>
                    Portfolio
                </Link>
            </Container>

            <Container>
                <List>
                    <Title>📓 Posts ({posts.length})</Title>
                    {posts.map((post, i) => (<ListItem title={post.title} link={post.link} key={i}></ListItem>))}
                </List>
            </Container>

            <Container>
                <List>
                    <Title>💻 Repositorios ({repos.length})</Title>
                    {repos.map((repo, i) => (<ListItem title={repo.name} link={repo.html_url} key={i}></ListItem>))}
                </List>
            </Container>
        </>
    )
}
export default Home;