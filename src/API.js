module.exports = {
    getTheCourses() {
        return new Promise((resolve, reject) => {
            fetch("https://careerfoundry.com/en/api/courses").then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data.courses);
                    });
                } else
                    alert("There is a problem. Please try again later");
                }
            )
        })
    },
    getCourseDetails(courseName) {
        return new Promise((resolve, reject) => {
            fetch(`https://careerfoundry.com/en/api/courses/${courseName}`).then(response => {
                if (response.status === 200) {
                    response.json().then(data => {
                        resolve(data);
                    });
                } else
                    alert("There was a problem processing your request. Please try again later")
            })
        })
    },
    getLocation() {
        return new Promise((resolve, reject) => {
            fetch("https://api.ipify.org?format=json").then(response => {
                response.json().then(data => {
                    fetch(`http://api.ipstack.com/${data.ip}?access_key=d16ca4195ef1a7171a0bea3b3a767fa6`).then(response => {
                        response.json().then(data => {
                            resolve(data);
                        })
                    });
                });
            });
        })
    }
}
