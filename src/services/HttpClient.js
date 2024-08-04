import axios from 'axios';

export const getRequest = (url) => {
return axios.get(url).then((response) =>response.data );
}