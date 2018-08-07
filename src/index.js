import '../styles/stylesheet.css';
const { getTheCourses, getCourseDetails, getLocation } = require('./API');

(function() {
    getTheCourses().then(courses => {
        Object.keys(courses).forEach((key) => {
            let courseDiv = document.createElement('div');
            courseDiv.setAttribute("class", "course");
            courseDiv.setAttribute("id", "course-" + key);
            courseDiv.innerHTML = `<h4>${courses[key].title}</h4>`;
            courseDiv.addEventListener("click", (e) => {
                let courseName = courseDiv.id.slice(courseDiv.id.indexOf("-") + 1);
                //makes sure a double click won't initiate another call
                if(!courseDiv.classList.contains("request-sent")) {
                    //checks that the data wasn't fetched already
                    if(courseDiv.childNodes.length == 1) {
                        courseDiv.classList.add("request-sent");
                        getLocation().then(res => {
                            // If there was a problem with the location request, the currency will default to dollar
                            var geoLocation;
                            res.country_code === "GB"
                                ? geoLocation = "UK"
                                : res.continent_code === "EU"
                                    ? geoLocation = "EU"
                                    : geoLocation = "NA";
                            getCourseDetails(courseName).then(courseData => {
                                let infoDiv = document.createElement('div');
                                infoDiv.setAttribute("class", "courseInfo");
                                infoDiv.setAttribute("id", "info-" + key);
                                // moving the currency sign from the left to the right of the number
                                let price = courseData.price[geoLocation].total.slice(1) + courseData.price[geoLocation].total[0];
                                infoDiv.innerHTML = `<p> Price: ${price}</p>
                            <p> Next start: ${courseData.start_dates[0]}</p>
                            <p>And then: ${courseData.start_dates[1]} </p>
                            <p>And then: ${courseData.start_dates[2]}</p>`
                                courseDiv.append(infoDiv);
                                courseDiv.classList.remove("request-sent")
                            });
                        })
                    }
                    // clicking on each course after data is fetched will toggle the course info
                    else {
                        document.getElementById("info-" + courseName).classList.toggle("noDisplay");
                    }
                }
            });
            document.body.appendChild(courseDiv);
        });
    });
})();
