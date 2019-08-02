import Axios from 'axios';

export const getStudentDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/student', { type: 'Student' })
            .then(res => {
                resolve({
                    studentDetails: res.data.res,
                })
            })
            .catch(err => {
                resolve({
                    studentDetails: err
                })
            })
    })
};

export const getLecturerDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/faculty', { type: 'lecturer' })
            .then(res => {
                console.log("lecturer details")
                console.log(res.data);
                resolve({
                    lecturerDetails: res.data.res,
                })
            })
            .catch(err => {
                resolve({
                    lecturerDetails: err
                })
            })
    })
};

export const getDeptDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/dept', { type: 'Department' })
            .then(res => {
                resolve({
                    deptDetails: res.data.res,
                })
            })
            .catch(err => {
                resolve({
                    deptDetails: err
                })
            })
    })
};

export const getAdminDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/admin', { type: 'Admin' })
            .then(res => {
                resolve({
                    adminDetails: res.data.res,
                })
            })
            .catch(err => {
                resolve({
                    adminDetails: err
                })
            })
    })
};
