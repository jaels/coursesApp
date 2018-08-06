module.exports = {
    getTheCourses() {
        return new Promise((resolve, reject) => {
            fetch("https://careerfoundry.com/en/api/courses").then(response => {
                response.json().then(data => {
                    resolve(data.courses);
                });
            })
        })
    },
    getOneCourse(courseName) {
        return new Promise((resolve, reject) => {
            fetch(`https://careerfoundry.com/en/api/courses/${courseName}`).then(response => {
                response.json().then(data => {
                    resolve(data);
                });
            })
        })
    },
    getLocation() {
        return new Promise((resolve, reject) => {
            fetch("https://api.ipify.org?format=json").then(res => {
                res.json().then(data => {
                    console.log(data);
                    fetch(`http://api.ipstack.com/${data.ip}?access_key=d16ca4195ef1a7171a0bea3b3a767fa6`).then(res => {
                        res.json().then(data => {
                            console.log(data);
                            resolve(data);
                        })
                    });
                });
            });
        })
    }
}
