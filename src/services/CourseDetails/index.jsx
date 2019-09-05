import Axios from 'axios';

const getCourseDetails = () => {
    return new Promise(resolve => {
        Axios.get('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/dept/sem/course')
            .then(res => {
                console.log('res API: ');
                console.log(res);
                resolve({
                    CourseDetails: res.data,
                })
                console.log('course');
                console.log(res.data);
            })
            .catch(err => {
                console.log('err API: ');
                console.log(err);
                resolve({
                    CourseDetails: err
                })
            })
    })
};

export default getCourseDetails;
