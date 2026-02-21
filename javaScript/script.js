
// job count access position
const totalJOb = document.getElementById("total");
const interviewJOb = document.getElementById("interview");
const rejectedJOb = document.getElementById("rejected");

const allCard = document.getElementById("all-card");


// filter job available button access
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


// main section access and delegation
const mainContainer = document.getElementById("main");



let interviewList = [];
let rejectedList = [];
// access length job count
function calculateJobCount() {
    totalJOb.innerText = allCard.children.length;
    interviewJOb.innerText = interviewList.length;
    rejectedJOb.innerText = rejectedList.length;
}
calculateJobCount();


// filter available job button toggle
function showFilterBtn(id) {

    allFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");
    interviewFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");
    rejectedFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");

    const selectedId = document.getElementById(id);
    selectedId.classList.add("bg-[#3b82f6]", "text-white");

};



// mainContainer event delegation run and access children;
mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("interview-btn")) {
        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;
        let skillName = parentNode.querySelector(".skill-name").innerText;
        let jobLocation = parentNode.querySelector(".job-location ").innerText;
        let status = parentNode.querySelector(".status").innerText;
        let notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText = "Interview";

        const cardInfo = {
            companyName,
            skillName,
            jobLocation,
            status,
            notes
        }

        interViewCancel = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!interViewCancel) {
            interviewList.push(cardInfo);
        }

        calculateJobCount();
    }

    if (event.target.classList.contains("rejected-btn")) {

        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;
        let skillName = parentNode.querySelector(".skill-name").innerText;
        let jobLocation = parentNode.querySelector(".job-location ").innerText;
        let status = parentNode.querySelector(".status").innerText;
        let notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText = "Rejected";

        const cardInfo = {
            companyName,
            skillName,
            jobLocation,
            status,
            notes
        }

        rejectedCancel = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!rejectedCancel) {
            rejectedList.push(cardInfo);
        }

        calculateJobCount();
    }


});













































// all time active button 
document.addEventListener("DOMContentLoaded", function () {
    showFilterBtn("all-filter-btn");
});