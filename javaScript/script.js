
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

// all card section access
const allCard = document.querySelectorAll("#all-card .card");

// available job section access
const availableJobCount = document.getElementById("available-job-total");
let availableInterViewCount = document.getElementById("interview-available");
let availableRejectedCount = document.getElementById("rejected-available");


// mode color change
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;


/*========================
   2. ARRAY CREATE AND STORE VALUE allCard & Interview & Rejected  
========================*/

let interviewList = [];
let rejectedList = [];
let allCardList = [];



/*========================
   3. FUNCTION ALL 
========================*/

// access length job count
function calculateJobCount() {
    // totalJOb.innerText = allCardSection.children.length;
    totalJOb.innerText = allCardList.length;
    interviewJOb.innerText = interviewList.length;
    rejectedJOb.innerText = rejectedList.length;

    availableJobCount.innerText = allCardList.length;
    availableInterViewCount.innerText = interviewList.length;
    availableRejectedCount.innerText = rejectedList.length;
};

// calculateJobCount();

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

        // available jobs count
        if (interviewList.length > 0) {
            availableInterViewCount.parentNode.classList.remove("hidden");
        } else {
            availableInterViewCount.parentNode.classList.add("hidden");
        }
        availableRejectedCount.parentNode.classList.add("hidden");

    } else if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        interviewFilterSection.classList.add("hidden");
        rejectedFilterSection.classList.add("hidden");

        // available jobs count
        availableInterViewCount.parentNode.classList.add("hidden");
        availableRejectedCount.parentNode.classList.add("hidden");

    } else if (id === "rejected-filter-btn") {
        rejectedFilterSection.classList.remove("hidden");
        allCardSection.classList.add("hidden");
        interviewFilterSection.classList.add("hidden");

        // available jobs count
        if (rejectedList.length > 0) {
            availableRejectedCount.parentNode.classList.remove("hidden");
        } else {
            availableRejectedCount.parentNode.classList.add("hidden");
        }
        availableInterViewCount.parentNode.classList.add("hidden");

    }

};


// 2 render/show hide function interview/rejected RENDER ALL
function renderAll() {
    showRenderInterview();
    showRenderReject();
}


// show not available job 
function showEmptyCard(section) {

    section.innerHTML = "";

    let div = document.createElement("div");
    div.className = "card flex justify-between p-5 shadow bg-white rounded-xs mx-auto";
    div.innerHTML = `
           <div class="flex justify-center items-center mx-auto py-17">
            <div>
                <img class="mx-auto mb-3" src="./jobs.png" alt="">
                <h5 class="font-semibold text-2xl text-center">No jobs available</h5>
                <p class="font-medium opacity-45 text-center">Check back soon for new job opportunities</p>
            </div>
        </div>
    `;
    section.appendChild(div);
}



// interview section show / create card 

if (interviewList.length === 0) {
    showEmptyCard(interviewFilterSection);
}
function showRenderInterview() {

    interviewFilterSection.innerHTML = "";

    if (interviewList.length === 0) {
        showEmptyCard(interviewFilterSection);
        return;
    }


    for (let interView of interviewList) {
        let div = document.createElement("div");
        div.className = "card flex justify-between p-5 shadow  rounded-xs border-l-4 border-green-500 shadow-green-500/90 bg-green-100";
        div.innerHTML = `
         <div class="space-y-4 w-full">

            <div class="flex justify-between ">

                        <div>
                            <p class="company-name text-xl font-semibold mb-2">${interView.companyName}</p>
                            <p class="skill-name opacity-50 ">${interView.skillName}
                            </p>
                        </div>

                        <div>
                            <button class="delete-btn loader px-3 py-1 rounded font-extrabold text-xl">
                                <span
                                    class="p-2 shadow  border-red-700 hover:bg-red-100 hover:border transition-all duration-600 rounded-full cursor-pointer"><i
                                        class="fa-regular fa-trash-can"></i></span>
                            </button>
                        </div>

                    </div>

            <div class="flex gap-3 items-center">
                <p class="job-location opacity-50">${interView.jobLocation}</p>

            </div>

            <p
                class="status p-2 px-4 shadow font-semibold w-fit border-2 rounded-[7px] bg-green-200 text-green-700 border-green-500 cursor-pointer">
                ${interView.status}</p>
            <p class="notes opacity-60">${interView.notes}</p>

            <div class="flex gap-5">
                <button
                    class="interview-btn border-2 p-1.5 border-green-500 text-green-600  px-4 rounded font-semibold hover:bg-green-200 transition-all duration-300 cursor-pointer">INTERVIEW</button>

                <button
                    class="rejected-btn border-2 border-red-500 text-red-600 p-1.5 px-4 rounded font-semibold hover:bg-red-200 transition-all duration-300 cursor-pointer">REJECTED</button>
            </div>
        </div>
    
        `;

        interviewFilterSection.appendChild(div);


    };

}


// rejected section show / create card
if (rejectedList.length === 0) {
    showEmptyCard(rejectedFilterSection);
}
function showRenderReject() {

    rejectedFilterSection.innerHTML = "";

    if (rejectedList.length === 0) {
        showEmptyCard(rejectedFilterSection);
        return;
    }

    for (let reject of rejectedList) {

        let div = document.createElement("div");
        div.className = "card flex justify-between p-5 shadow  rounded-xs border-l-4 border-red-500 shadow-red-500/90 bg-red-100";
        div.innerHTML = `
               <div class="space-y-4 w-full">
               
                    <div class="flex justify-between ">

                        <div>
                            <p class="company-name text-xl font-semibold mb-2">${reject.companyName}</p>
                            <p class="skill-name opacity-50 ">${reject.skillName}
                            </p>
                        </div>

                        <div>
                            <button class="delete-btn loader  px-3 py-1 rounded font-extrabold text-xl">
                                <span
                                    class="p-2 shadow  border-red-700 hover:bg-red-100 hover:border transition-all duration-600 rounded-full cursor-pointer"><i
                                        class="fa-regular fa-trash-can"></i></span>
                            </button>
                        </div>

                    </div>

                    <div class="flex gap-3 items-center">
                        <p class="job-location opacity-50">${reject.jobLocation}</p>

                    </div>

                     <p class="status p-2 px-4 shadow font-semibold w-fit border-2 rounded-[7px] bg-red-200 text-red-700 border-red-500 cursor-pointer ">${reject.status}</p>
                    <p class="notes opacity-60">${reject.notes}</p>

                    <div class="flex gap-5">

                      <button
                            class="interview-btn border-2 p-1.5 border-green-500 text-green-600  px-4 rounded font-semibold hover:bg-green-200 transition-all duration-300 cursor-pointer">INTERVIEW</button>

                        <button
                            class="rejected-btn border-2 border-red-500 text-red-600 p-1.5 px-4 rounded font-semibold hover:bg-red-200 transition-all duration-300 cursor-pointer">REJECTED</button>

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


    if (event.target.closest(".delete-btn")) {
        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;

        allCardList = allCardList.filter(item => item.companyName !== companyName);

        interviewList = interviewList.filter(item => item.companyName !== companyName);

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        parentNode.remove();
        calculateJobCount();
        renderAll();

        if (allCardList.length === 0) {
            showEmptyCard(allCardSection);
        }


    } else if (event.target.classList.contains("interview-btn")) {
        let parentNode = event.target.closest(".card");
        let companyName = parentNode.querySelector(".company-name").innerText;
        let skillName = parentNode.querySelector(".skill-name").innerText;
        let jobLocation = parentNode.querySelector(".job-location").innerText;
        let notes = parentNode.querySelector(".notes").innerText;
        let statusEle = parentNode.querySelector(".status");
        statusEle.innerText = "INTERVIEW";
        let status = "INTERVIEW";

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

        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);

        // button toggle Interview status
        // statusEle.classList.remove("hidden");
        statusEle.classList.remove("bg-red-200", "text-red-700", "border-red-500");
        statusEle.classList.add("bg-green-200", "text-green-700", "border-2", "border-green-500");

        // main card toggle design
        parentNode.classList.remove("rounded-lg", "border-l-5", "border-red-500", "shadow-red-500/90", "bg-red-100");
        parentNode.classList.add("rounded-lg", "border-l-5", "border-green-500", "shadow", "shadow-green-500/90", "bg-green-100");

        parentNode.classList.remove("card-rejected::before");
        parentNode.classList.add("card-interview::before");

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
        statusEle.innerText = "REJECTED";
        let status = "REJECTED";

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

        // button toggle Interview status
        // statusEle.classList.remove("hidden");
        statusEle.classList.remove("bg-green-200", "text-green-700", "border-green-500");
        statusEle.classList.add("bg-red-200", "text-red-700", "border-2", "border-red-500");

        // main card toggle design
        parentNode.classList.remove("rounded-lg", "border-l-5", "border-green-500", "shadow-green-500/90", "bg-green-100");
        parentNode.classList.add("rounded-lg", "border-l-5", "border-red-500", "shadow", "shadow-red-500/90", "bg-red-100");

        parentNode.classList.remove("card-interview::before");
        parentNode.classList.add("card-rejected::before");

        calculateJobCount();
        renderAll();

    }

});



// all time active button  load
document.addEventListener("DOMContentLoaded", function () {
    // all time active btn
    showFilterBtn("all-filter-btn");


    // all card live access continue
    for (let card of allCard) {
        let companyName = card.querySelector(".company-name").innerText;
        let skillName = card.querySelector(".skill-name").innerText;
        let jobLocation = card.querySelector(".job-location").innerText;
        let status = card.querySelector(".status").innerText;
        let notes = card.querySelector(".notes").innerText;

        let cardObject = {
            companyName,
            skillName,
            jobLocation,
            status,
            notes
        }

        allCardList.push(cardObject);
    }

    calculateJobCount();
});


// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "light") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.innerHTML = `<i class="fa-regular fa-sun text-[clamp(2rem,5vw,2.75rem)]"></i>`;
    } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.innerHTML = `<i class="fa-regular fa-moon text-[clamp(2rem,5vw,2.75rem)] -rotate-30"></i>`;
    }
});