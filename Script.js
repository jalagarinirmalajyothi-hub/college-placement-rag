const companies = {

TCS:{
roles:[
"Software Engineer",
"System Engineer",
"Software Developer",
"Data Analyst",
"Testing Engineer",
"Application Developer"
],

responsibilities:[
"Develop software applications",
"Write and test programs",
"Debug and fix software",
"Understand project requirements",
"Work with development teams",
"Maintain applications"
],

technical:[
"Java",
"Python",
"C/C++",
"Data Structures and Algorithms",
"Object Oriented Programming",
"DBMS",
"SQL",
"Operating Systems",
"Computer Networks",
"Git and GitHub"
],

soft:[
"Communication",
"Teamwork",
"Problem Solving",
"Logical Thinking",
"Adaptability",
"Time Management"
],

percentage:
"Current TCS NQT example: 60% or equivalent CGPA in the specified academic qualifications.",

cgpa:
"Equivalent CGPA depends on the institution's percentage-to-CGPA conversion.",

backlog:
"No pending backlog at the relevant selection stage under the current TCS NQT example.",

qualification:
"MCA and other specified qualifications can be eligible depending on the recruitment drive.",

interview:[
"What is OOP?",
"What is inheritance?",
"What is polymorphism?",
"What is DBMS?",
"What is normalization?",
"What is SQL JOIN?",
"Explain your MCA project.",
"What is an array?",
"What is the difference between stack and queue?",
"Why should we hire you?"
]
},


Infosys:{
roles:[
"Systems Engineer",
"Software Developer",
"Technology Analyst",
"Test Engineer",
"Application Developer",
"Associate Consultant"
],

responsibilities:[
"Develop software applications",
"Write and test programs",
"Understand software requirements",
"Debug technical problems",
"Work with project teams",
"Support applications"
],

technical:[
"Java",
"Python",
"C/C++",
"SQL",
"DBMS",
"Data Structures",
"OOP",
"HTML",
"CSS",
"JavaScript",
"Computer Networks"
],

soft:[
"Communication",
"Teamwork",
"Problem Solving",
"Logical Thinking",
"Adaptability",
"Time Management"
],

percentage:
"Infosys requirements are recruitment-drive specific. Check the current placement notification for the exact percentage.",

cgpa:
"CGPA requirements can vary between Infosys recruitment programs.",

backlog:
"Backlog requirements depend on the particular recruitment drive.",

qualification:
"MCA and other relevant computer/IT qualifications may be eligible depending on the role.",

interview:[
"Tell me about yourself.",
"Explain your MCA project.",
"What is OOP?",
"What is DBMS?",
"What is normalization?",
"What is a primary key?",
"What is a foreign key?",
"Write an SQL query.",
"What are your strengths?",
"Why do you want to join Infosys?"
]
},


Wipro:{
roles:[
"Project Engineer",
"Software Developer",
"System Engineer",
"Test Engineer",
"Support Engineer",
"Application Developer"
],

responsibilities:[
"Develop applications",
"Write and test code",
"Fix software defects",
"Understand project requirements",
"Perform software testing",
"Provide application support"
],

technical:[
"Java",
"Python",
"C/C++",
"SQL",
"DBMS",
"Data Structures",
"OOP",
"Testing",
"Web Development",
"Git/GitHub"
],

soft:[
"Communication",
"Teamwork",
"Problem Solving",
"Leadership",
"Adaptability",
"Time Management"
],

percentage:
"Wipro percentage requirements vary according to the specific recruitment drive and job role.",

cgpa:
"CGPA requirements depend on the current Wipro recruitment notification.",

backlog:
"Backlog requirements vary by recruitment drive.",

qualification:
"Qualification depends on the specific Wipro fresher job.",

interview:[
"Tell me about yourself.",
"Explain your project.",
"What is OOP?",
"What is DBMS?",
"What is a primary key?",
"What is normalization?",
"What is an array?",
"Explain inheritance.",
"Why should we hire you?",
"Where do you see yourself in five years?"
]
},


Capgemini:{
roles:[
"Software Engineer",
"Associate Software Engineer",
"Application Developer",
"Test Engineer",
"Analyst",
"Cloud/Technology Associate"
],

responsibilities:[
"Develop software applications",
"Understand technical requirements",
"Write and test programs",
"Debug applications",
"Work with project teams",
"Support application development"
],

technical:[
"Java",
"Python",
"C/C++",
"SQL",
"DBMS",
"Data Structures",
"OOP",
"HTML",
"CSS",
"JavaScript",
"Software Testing"
],

soft:[
"Communication",
"Teamwork",
"Problem Solving",
"Leadership",
"Adaptability",
"Analytical Thinking"
],

percentage:
"A published Capgemini India recruitment example used 50% or above for specified academic qualifications. Requirements can vary by drive.",

cgpa:
"CGPA equivalence depends on the conversion rule specified by the institution/company notification.",

backlog:
"Some Capgemini recruitment drives require no active backlog.",

qualification:
"MCA, BE/BTech and other specified qualifications may be eligible depending on the drive.",

interview:[
"Tell me about yourself.",
"Explain your project.",
"What is inheritance?",
"What is polymorphism?",
"What is DBMS?",
"What is normalization?",
"What is SQL JOIN?",
"Write a simple Java or Python program.",
"What are your strengths?",
"Why do you want to join Capgemini?"
]
}

};


/* =====================================================
   DISPLAY COMPANY DETAILS
===================================================== */

function displayCompany(companyName){

    const company = companies[companyName];

    const details = document.getElementById("details");

    if(!company){
        return;
    }

    let roles = "";

    company.roles.forEach(function(role){
        roles += "<li>" + role + "</li>";
    });

    let responsibilities = "";

    company.responsibilities.forEach(function(item){
        responsibilities += "<li>" + item + "</li>";
    });

    let technical = "";

    company.technical.forEach(function(item){
        technical += "<li>" + item + "</li>";
    });

    let soft = "";

    company.soft.forEach(function(item){
        soft += "<li>" + item + "</li>";
    });

    let questions = "";

    company.interview.forEach(function(item){
        questions += "<li>" + item + "</li>";
    });


    details.innerHTML = `

        <h2>🏢 ${companyName} - Placement Details</h2>

        <h3>💼 Job Roles</h3>
        <ul>
            ${roles}
        </ul>

        <h3>📌 Job Responsibilities</h3>
        <ul>
            ${responsibilities}
        </ul>

        <h3>💻 Required Technical Skills</h3>
        <ul>
            ${technical}
        </ul>

        <h3>🤝 Required Soft Skills</h3>
        <ul>
            ${soft}
        </ul>

        <h3>📊 Eligibility</h3>

        <div class="info">
            <b>Academic Percentage:</b><br>
            ${company.percentage}
        </div>

        <div class="info">
            <b>CGPA:</b><br>
            ${company.cgpa}
        </div>

        <div class="info">
            <b>Backlogs:</b><br>
            ${company.backlog}
        </div>

        <div class="info">
            <b>Qualification:</b><br>
            ${company.qualification}
        </div>

        <h3>🧠 10 Interview Questions</h3>

        <ol>
            ${questions}
        </ol>

        <div class="resume">

            <h3>📄 Resume Upload</h3>

            <p>
            Upload your resume for this placement:
            </p>

            <input
                type="file"
                id="resumeFile"
                accept=".pdf,.doc,.docx"
            >

            <div id="uploaded"></div>

        </div>

        <button class="close" id="closeButton">
            ✖ Close Details
        </button>
    `;


    details.style.display = "block";

    details.scrollIntoView({
        behavior:"smooth"
    });


    /* Resume upload */

    document.getElementById("resumeFile")
    .addEventListener("change",function(){

        if(this.files.length > 0){

            document.getElementById("uploaded").innerHTML =
            "✅ Resume selected: " + this.files[0].name;

        }

    });


    /* Close button */

    document.getElementById("closeButton")
    .addEventListener("click",function(){

        details.style.display = "none";

    });

}


/* =====================================================
   COMPANY CARD CLICK
===================================================== */

document.querySelectorAll(".company-card").forEach(function(card){

    card.addEventListener("click",function(){

        const companyName =
        this.getAttribute("data-company");

        displayCompany(companyName);

    });

});


/* =====================================================
   QUESTION ANSWER
===================================================== */

document.getElementById("askButton")
.addEventListener("click",function(){

    answerQuestion();

});


function answerQuestion(){

    const q =
    document.getElementById("question")
    .value
    .toLowerCase()
    .trim();

    const answer =
    document.getElementById("answer");


    if(q === ""){

        answer.style.display="block";

        answer.innerHTML =
        "<b>⚠️ Please enter a question.</b>";

        return;
    }


    let companyName = "";


    if(q.includes("infosys")){
        companyName="Infosys";
    }

    else if(q.includes("wipro")){
        companyName="Wipro";
    }

    else if(q.includes("capgemini")){
        companyName="Capgemini";
    }

    else if(q.includes("tcs")){
        companyName="TCS";
    }


    /* COMPANY QUESTIONS */

    if(companyName !== ""){

        const c = companies[companyName];


        if(q.includes("role") || q.includes("job")){

            answer.innerHTML =
            "<h3>💼 " + companyName + " Job Roles</h3><ul>" +
            c.roles.map(function(x){
                return "<li>"+x+"</li>";
            }).join("") +
            "</ul>";

        }


        else if(q.includes("skill")){

            answer.innerHTML =
            "<h3>💻 " + companyName + " Required Skills</h3>" +

            "<b>Technical Skills:</b><ul>" +

            c.technical.map(function(x){
                return "<li>"+x+"</li>";
            }).join("") +

            "</ul>" +

            "<b>Soft Skills:</b><ul>" +

            c.soft.map(function(x){
                return "<li>"+x+"</li>";
            }).join("") +

            "</ul>";

        }


        else if(
            q.includes("eligibility") ||
            q.includes("percentage") ||
            q.includes("percent") ||
            q.includes("cgpa") ||
            q.includes("backlog")
        ){

            answer.innerHTML =
            "<h3>📊 " + companyName + " Eligibility</h3>" +

            "<div class='info'>" +
            "<b>Percentage:</b><br>" +
            c.percentage +
            "</div>" +

            "<div class='info'>" +
            "<b>CGPA:</b><br>" +
            c.cgpa +
            "</div>" +

            "<div class='info'>" +
            "<b>Backlogs:</b><br>" +
            c.backlog +
            "</div>" +

            "<div class='info'>" +
            "<b>Qualification:</b><br>" +
            c.qualification +
            "</div>";

        }


        else if(q.includes("interview") || q.includes("question")){

            answer.innerHTML =
            "<h3>🧠 " + companyName + " Interview Questions</h3><ol>" +

            c.interview.map(function(x){
                return "<li>"+x+"</li>";
            }).join("") +

            "</ol>";

        }


        else{

            answer.innerHTML =
            "<h3>🤖 " + companyName + "</h3>" +

            "<p>You can ask:</p>" +

            "<ul>" +
            "<li>What are the job roles?</li>" +
            "<li>What are the responsibilities?</li>" +
            "<li>What skills are required?</li>" +
            "<li>What is the eligibility?</li>" +
            "<li>How much percentage is required?</li>" +
            "<li>What is the CGPA requirement?</li>" +
            "<li>Are backlogs allowed?</li>" +
            "<li>What interview questions are asked?</li>" +
            "</ul>";

        }

    }


    /* GENERAL QUESTIONS */

    else if(q.includes("placement")){

        answer.innerHTML =
        "<h3>🎯 College Placement Process</h3>" +

        "<ol>" +
        "<li>Student registration</li>" +
        "<li>Eligibility verification</li>" +
        "<li>Company introduction / pre-placement talk</li>" +
        "<li>Aptitude test</li>" +
        "<li>Coding or technical test</li>" +
        "<li>Technical interview</li>" +
        "<li>HR interview</li>" +
        "<li>Final selection</li>" +
        "<li>Offer letter</li>" +
        "</ol>";

    }


    else if(q.includes("resume")){

        answer.innerHTML =
        "<h3>📄 Resume Information</h3>" +

        "<ul>" +
        "<li>Contact details</li>" +
        "<li>Career objective / summary</li>" +
        "<li>Education</li>" +
        "<li>Technical skills</li>" +
        "<li>Projects</li>" +
        "<li>Internships</li>" +
        "<li>Certifications</li>" +
        "<li>Achievements</li>" +
        "<li>GitHub / LinkedIn</li>" +
        "</ul>" +

        "<p><b>Tip:</b> Keep your placement resume clear and preferably one page for a fresher.</p>";

    }


    else if(q.includes("skill")){

        answer.innerHTML =
        "<h3>💻 Placement Skills</h3>" +

        "<p><b>Technical Skills:</b></p>" +

        "<ul>" +
        "<li>Java</li>" +
        "<li>Python</li>" +
        "<li>C/C++</li>" +
        "<li>DSA</li>" +
        "<li>OOP</li>" +
        "<li>DBMS</li>" +
        "<li>SQL</li>" +
        "<li>HTML/CSS/JavaScript</li>" +
        "<li>Git/GitHub</li>" +
        "</ul>" +

        "<p><b>Soft Skills:</b></p>" +

        "<ul>" +
        "<li>Communication</li>" +
        "<li>Teamwork</li>" +
        "<li>Problem Solving</li>" +
        "<li>Leadership</li>" +
        "<li>Adaptability</li>" +
        "</ul>";

    }


    else{

        answer.innerHTML =
        "<h3>🤖 AI Placement Assistant</h3>" +

        "<p>I can answer questions about:</p>" +

        "<ul>" +
        "<li>Company job roles</li>" +
        "<li>Job responsibilities</li>" +
        "<li>Technical skills</li>" +
        "<li>Soft skills</li>" +
        "<li>Eligibility</li>" +
        "<li>Percentage / CGPA</li>" +
        "<li>Backlogs</li>" +
        "<li>Resume</li>" +
        "<li>Placement process</li>" +
        "<li>Interview questions</li>" +
        "</ul>";

    }


    answer.style.display="block";

}

</script>
          
