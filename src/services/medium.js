import axios from "axios"

export const getMediumPosts = async (username) => {
    const response = axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@'+username);
    return response;
}