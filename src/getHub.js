import axios from 'axios';

const getHub = () => {
    return axios.get(`https://api.github.com/users/nickcabuno`)
        .then(res => {
            return(res.data);
        });
}

export default getHub;