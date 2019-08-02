import Axios from 'axios';

const getUserDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/student',{type : "Student"})
            .then(res => {
                console.log('res API: ');
                console.log(res);
                resolve({
                    userDetails: res.data.res,
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
