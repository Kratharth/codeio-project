import Axios from 'axios';
import { api } from '../api';

const getUserDetails = () => {
    return new Promise(resolve => {
        Axios.get(`${api}/user`)
            .then(res => {
                console.log('res API: ');
                console.log(res);
                resolve({
                    userDetails: res.data,
                })
                console.log('department');
                console.log(res.data);
            })
            .catch(err => {
                console.log('err API: ');
                console.log(err);
                resolve({
                    userDetails: err
                })
            })
    })
};

export default getUserDetails;