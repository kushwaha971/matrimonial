import axios from 'axios';
export default axios.create({
    baseURL: 'https://vtu-shaadi-default-rtdb.firebaseio.com/'
})