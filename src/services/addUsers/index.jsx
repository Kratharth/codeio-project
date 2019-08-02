import Axios from 'axios';
import { api } from '../api';

export const getStudentDetails = () => {
    return new Promise(resolve => {
        Axios.get(`${api}/user`)
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
        Axios.get(`${api}/faculty`, { type: 'Lecturer' })
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
        Axios.get(`${api}/dept`, { type: 'Department' })
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
        Axios.get(`${api}/admin`, { type: 'Admin' })
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
