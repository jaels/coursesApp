const css = require('../styles/stylesheet.css');
const { getTheCourses, getOneCourse, getLocation } = require('./API');

(function() {
    getTheCourses().then(courses => {
        Object.keys(courses).forEach((key) => {
            let courseDiv = document.createElement('div');
            courseDiv.setAttribute("class", "course");
            courseDiv.setAttribute("id", key);
            courseDiv.innerHTML = courses[key].title;
            courseDiv.addEventListener("click", (e) => {
                let courseName = e.target.id;
                getLocation().then(res => {
                    var geoLocation;
                    res.country_code === "UK" ? geoLocation = "UK" : res.continent_code === "EU" ? geoLocation = "EU" : geoLocation = "NA";
                    getOneCourse(courseName).then(courseData => {
                        console.log(courseData);
                        let infoDiv = document.createElement('div');
                        infoDiv.setAttribute("class", "courseInfo");
                        infoDiv.innerHTML = courseData.price[geoLocation].total;
                        e.target.appendChild(infoDiv);
                    });
                })
            })
            document.body.appendChild(courseDiv);
        });
    });
})();
