const answers = {

    company:
        "🏢 Our placement database contains companies such as TCS, Infosys, Wipro, Accenture, Cognizant and Capgemini.",

    eligibility:
        "📋 Eligibility usually depends on company requirements. Common requirements include minimum academic percentage, no active backlogs and relevant technical skills.",

    process:
        "🔄 The placement process generally includes registration → pre-placement talk → aptitude test → technical interview → HR interview → final selection.",

    skills:
        "💻 Important skills include Java, Python, SQL, HTML, CSS, JavaScript, problem solving, aptitude and communication skills.",

    package:
        "💰 According to the sample placement data, the highest package is ₹8 LPA and the average package is ₹4.2 LPA.",

    mca:
        "🎓 MCA students can apply for roles such as Software Developer, Web Developer, Tester, Database Administrator and Technical Support Engineer."
};


function getAnswer(question) {

    const q = question.toLowerCase();

    if (
        q.includes("company") ||
        q.includes("companies")
    ) {
        return answers.company;
    }

    if (
        q.includes("eligibility") ||
        q.includes("eligible") ||
        q.includes("criteria")
    ) {
        return answers.eligibility;
    }

    if (
        q.includes("process") ||
        q.includes("placement process")
    ) {
        return answers.process;
    }

    if (
        q.includes("skill") ||
        q.includes("learn")
    ) {
        return answers.skills;
    }

    if (
        q.includes("package") ||
        q.includes("salary") ||
        q.includes("lpa")
    ) {
        return answers.package;
    }

    if (
        q.includes("mca") ||
        q.includes("role") ||
        q.includes("job")
    ) {
        return answers.mca;
    }

    return "🤖 I couldn't find that information in the placement knowledge base. Try asking about companies, eligibility, placement process, skills, packages or MCA jobs.";
}


function sendMessage() {

    const input = document.getElementById("userInput");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addUserMessage(question);

    input.value = "";

    setTimeout(() => {

        const answer = getAnswer(question);

        addBotMessage(answer);

    }, 500);
}


function addUserMessage(text) {

    const chatBox = document.getElementById("chatBox");

    const message = document.createElement("div");

    message.className = "user-message";

    message.innerHTML = `
        <div class="user-bubble">
            ${text}
        </div>
    `;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function addBotMessage(text) {

    const chatBox = document.getElementById("chatBox");

    const message = document.createElement("div");

    message.className = "bot-message";

    message.innerHTML = `
        <div class="avatar">🤖</div>

        <div class="bubble">

            <strong>AI Assistant</strong>

            <p>${text}</p>

        </div>
    `;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function quickQuestion(question) {

    document.getElementById("userInput").value = question;

    sendMessage();
}


/* Press Enter to send */

document.getElementById("userInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);
