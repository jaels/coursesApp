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
    }
}
