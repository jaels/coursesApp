const css = require('../styles/stylesheet.css');
const { getTheCourses, getOneCourse, getLocation } = require('./API');

(function() {
    getTheCourses().then(courses => {
        console.log(courses);
        Object.keys(courses).forEach((key) => {
            let courseDiv = document.createElement('div');
            courseDiv.setAttribute("class", "course");
            courseDiv.setAttribute("id", key);
            courseDiv.innerHTML = courses[key].title;
            courseDiv.addEventListener("click", (e) => {
                let courseName = e.target.id;
                getOneCourse(courseName).then(courseData => {
                    console.log(courseData);
                    let infoDiv = document.createElement('div');
                    let price = document.createElement('div');
                    let startingDates = document.createElement('div');
                    infoDiv.setAttribute("class", "courseInfo");
                });
            })
            document.body.appendChild(courseDiv);
        });
    });
})();
