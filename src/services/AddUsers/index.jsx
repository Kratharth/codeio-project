import Axios from 'axios';

const getUserDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://mcs678ks83.execute-api.us-east-2.amazonaws.com/Test/user')
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