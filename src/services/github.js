import axios from "axios";

export const getRepos = async (username) => {
    const response = await axios.get('https://api.github.com/users/' + username + '/repos');
    return response;
}

export const getAvatar = async (username) => {
    const response = await axios.get('https://api.github.com/users/' + username);
    return response.data.avatar_url;
}