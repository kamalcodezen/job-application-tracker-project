
// job count access position
const totalJOb = document.getElementById("total");
const interviewJOb = document.getElementById("interview");
const rejectedJOb = document.getElementById("rejected");

const allCard = document.getElementById("all-card");


// filter job available button access
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


// interview section card access
const interviewFilterSection = document.getElementById("interview-card");


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
        showRenderInterview();
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



// interview section show / create card
function showRenderInterview() {

    interviewFilterSection.innerHtml = "";

    for (let interView of interviewList) {
        let div = document.createElement("div");
        div.className = "card flex justify-between p-5 shadow bg-white rounded-xs";
        div.innerHTML = `
               <div class="space-y-4">

                    <div>
                        <p class="company-name text-xl font-semibold mb-2">${interView.companyName}</p>
                        <p class="skill-name opacity-50">${interView.skillName}</p>
                    </div>

                    <div class="flex gap-3 items-center">
                        <p class="job-location opacity-50">${interView.jobLocation}</p>

                    </div>

                    <p class="status p-2 shadow inline-block bg-[#eef4ff]">${interView.status}</p>
                    <p class="notes opacity-60">${interView.notes}</p>

                    <div class="flex gap-5">

                        <button
                            class="interview-btn border-2 border-green-500 text-green-500 p-2 px-4 rounded font-semibold">Interview</button>

                        <button
                            class="rejected-btn border-2 border-red-500 text-red-500 p-2 px-4 rounded font-semibold">Rejected</button>

                    </div>
                </div>
    
              `;
              
        interviewFilterSection.appendChild(div);

    }

}










































// all time active button 
document.addEventListener("DOMContentLoaded", function () {
    showFilterBtn("all-filter-btn");
});