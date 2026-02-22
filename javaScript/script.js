
/* ==============================
   1️. ALL SECTION ACCESS
============================== */

// job count access position
const totalJOb = document.getElementById("total");
const interviewJOb = document.getElementById("interview");
const rejectedJOb = document.getElementById("rejected");

// job length required  || // interview section card access
const allCardSection = document.getElementById("all-card");
const interviewFilterSection = document.getElementById("interview-card");
const rejectedFilterSection = document.getElementById("rejected-card");

// filter job available button access
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// main section access and delegation
const mainContainer = document.getElementById("main");


/*========================
   2. ARRAY CREATE AND STORE VALUE Interview & Rejected  
========================*/

let interviewList = [];
let rejectedList = [];

/*========================
   3. FUNCTION ALL 
========================*/

// access length job count
function calculateJobCount() {
    totalJOb.innerText = allCardSection.children.length;
    interviewJOb.innerText = interviewList.length;
    rejectedJOb.innerText = rejectedList.length;
};


// filter  job button toggle 
function showFilterBtn(id) {

    allFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");
    interviewFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");
    rejectedFilterBtn.classList.remove("bg-[#3b82f6]", "text-white");

    const selectedId = document.getElementById(id);
    selectedId.classList.add("bg-[#3b82f6]", "text-white");

    // toggle button interview and rejected section show & hide
    if (id === "interview-filter-btn") {
        interviewFilterSection.classList.remove("hidden");
        allCardSection.classList.add("hidden");
        rejectedFilterSection.classList.add("hidden");
    } else if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        interviewFilterSection.classList.add("hidden");
        rejectedFilterSection.classList.add("hidden");

    } else if (id === "rejected-filter-btn") {
        rejectedFilterSection.classList.remove("hidden");
        allCardSection.classList.add("hidden");
        interviewFilterSection.classList.add("hidden");
    }

};


// 2 render/show hide function interview/rejected RENDER ALL
function renderAll() {
    showRenderInterview();
    showRenderReject();
}






// interview section show / create card
function showRenderInterview() {

    interviewFilterSection.innerHTML = "";

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

};




// rejected section show / create card
function showRenderReject() {

    rejectedFilterSection.innerHTML = "";

    for (let reject of rejectedList) {

        let div = document.createElement("div");
        div.className = "card flex justify-between p-5 shadow bg-white rounded-xs";
        div.innerHTML = `
               <div class="space-y-4">

                    <div>
                        <p class="company-name text-xl font-semibold mb-2">${reject.companyName}</p>
                        <p class="skill-name opacity-50">${reject.skillName}</p>
                    </div>

                    <div class="flex gap-3 items-center">
                        <p class="job-location opacity-50">${reject.jobLocation}</p>

                    </div>

                    <p class="status p-2 shadow inline-block bg-[#eef4ff]">${reject.status}</p>
                    <p class="notes opacity-60">${reject.notes}</p>

                    <div class="flex gap-5">

                        <button
                            class="interview-btn border-2 border-green-500 text-green-500 p-2 px-4 rounded font-semibold">Interview</button>

                        <button
                            class="rejected-btn border-2 border-red-500 text-red-500 p-2 px-4 rounded font-semibold">Rejected</button>

                    </div>
                </div>
    
              `;

        rejectedFilterSection.appendChild(div);

    }

}










/* ==============================
   4️. MAIN EVENT LISTENERS
============================== */

// mainContainer event delegation run and access children;
mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("interview-btn")) {
        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;
        let skillName = parentNode.querySelector(".skill-name").innerText;
        let jobLocation = parentNode.querySelector(".job-location").innerText;
        let notes = parentNode.querySelector(".notes").innerText;
        let statusEle = parentNode.querySelector(".status");
        statusEle.innerText = "Interview";
        let status = "Interview";

        const cardInfo = {
            companyName,
            skillName,
            jobLocation,
            status,
            notes
        }

        let interViewCancel = interviewList.find(item => item.companyName === cardInfo.companyName);

        if (!interViewCancel) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)

        calculateJobCount();
        renderAll();
    }

    else if (event.target.classList.contains("rejected-btn")) {

        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;
        let skillName = parentNode.querySelector(".skill-name").innerText;
        let jobLocation = parentNode.querySelector(".job-location").innerText;
        let notes = parentNode.querySelector(".notes").innerText;
        let statusEle = parentNode.querySelector(".status");
        statusEle.innerText = "Rejected";
        let status = "Rejected";

        const cardInfo = {
            companyName,
            skillName,
            jobLocation,
            status,
            notes
        }

        let rejectedCancel = rejectedList.find(item => item.companyName === cardInfo.companyName);

        if (!rejectedCancel) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);

        calculateJobCount();
        renderAll();
    }


});










// all time active button  load
document.addEventListener("DOMContentLoaded", function () {
    // show total job count
    calculateJobCount();
    // all time active btn
    showFilterBtn("all-filter-btn");
});