import Axios from 'axios';

const getUserDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/student', { type: 'Student' })
            .then(res => {
                resolve({
                    userDetails: res.data.res,
                })
            })
            .catch(err => {
                resolve({
                    userDetails: err
                })
            })
    })
};

export default getUserDetails;