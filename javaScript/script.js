
// job count access position
const totalJOb = document.getElementById("total");
const interviewJOb = document.getElementById("interview");
const rejectedJOb = document.getElementById("rejected");

const allCard = document.getElementById("all-card");


// filter job available button access
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");




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
















































// all time active button 
document.addEventListener("DOMContentLoaded", function () {
    showFilterBtn("all-filter-btn");
});