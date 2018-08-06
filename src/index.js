const css = require('../styles/stylesheet.css');
const {getTheCourses, getOneCourse, getLocation} = require('./API');

(function() {
    getTheCourses().then(courses => {
        Object.keys(courses).forEach((key) => {
            let courseDiv = document.createElement('div');
            courseDiv.setAttribute("class", "course");
            courseDiv.setAttribute("id", key);
            courseDiv.innerHTML = courses[key].title;
            courseDiv.addEventListener("click", (e) => {
                if(e.target.childNodes.length == 1) {
                    let courseName = e.target.id;
                    getLocation().then(res => {
                        var geoLocation;
                        res.country_code === "UK"
                            ? geoLocation = "UK"
                            : res.continent_code === "EU"
                                ? geoLocation = "EU"
                                : geoLocation = "NA";
                        getOneCourse(courseName).then(courseData => {
                            let infoDiv = document.createElement('div');
                            infoDiv.setAttribute("class", "courseInfo");
                            let priceTag = document.createElement('p');
                            infoDiv.innerHTML = `<p> Price: ${courseData.price[geoLocation].total}</p>
                        <p> Next Start: ${courseData.start_dates[0]}</p>
                        <p>And then: ${courseData.start_dates[1]} </p>
                        <p>And then: ${courseData.start_dates[2]}</p>`
                            e.target.append(infoDiv);
                        });
                    })
                }
                else {
                    e.target.lastChild.classList.toggle("noDisplay");
                }
            })
            document.body.appendChild(courseDiv);
        });
    });
})();
