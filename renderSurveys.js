
function renderSurveys(surveys) {
    let renderSurvey = surveys.map(survey => {
        return `<div class="card color-black bg-light py-3 px-3" style="width: 500px">
            ${survey.title}
            <hr>
            ${survey.fields.map(field =>{
                // how do I create a radio object from this array?
                if (field.options) {
                    var options = field.options.map(option => {
                        return `
                        <input type="radio"> ${option} </input>
                        `
                    }).join("")}
                
                return `
                    <div>
                        ${field.label}
                        ${options}
                    </div>`
                }).join("")}
                <div>
                    <button style="width: auto">${survey.submitButtonText}</button>
                </div>
        </div>
        `
    }).join("")
    return renderSurvey;
};


function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}