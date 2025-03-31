let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");
let cepNBtn = document.getElementById("cepNBtn")

let dbox = document.getElementById("dbox");
let dboxTitle = document.getElementById("dboxTitle");

// Search script
document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch");
    const concernDropdown = document.getElementById("concernDropdown");
    const concernList = document.getElementById("concernList");

    const concerns = [
        " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
        "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
        "LOW BANDWIDTH", "NO DIALTONE",
        "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", "SELECTIVE BROWSING","SLOW_INTERMITTENT CONNECTION","SPECIAL FEATURE CONFIGURATION","VOICE AND DATA PROBLEM","WLAN CONFIGURATION","EMAIL PROBLEM WEBSITE IP LISTING","Not Applicable"
    ];

    function populateConcerns() {
        concernList.innerHTML = "";
        concerns.forEach(concern => {
            const li = document.createElement("li");
            li.textContent = concern;
            li.addEventListener("click", () => {
                concernSearch.value = concern;
                concernDropdown.classList.add("hideCH");
            });
            concernList.appendChild(li);
        });
    }

    function filterConcerns() {
        const filter = concernSearch.value.toLowerCase();
        const items = concernList.getElementsByTagName("li");
        let hasMatch = false;

        for (let item of items) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
                hasMatch = true;
            } else {
                item.style.display = "none";
            }
        }

        concernDropdown.classList.toggle("hideCH", !hasMatch);
    }

    concernSearch.addEventListener("input", filterConcerns);
    populateConcerns();
});


// Search script 2

document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch2");
    const concernDropdown = document.getElementById("concernDropdown2");
    const concernList = document.getElementById("concernList2");

    const concerns = [
        " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
        "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
        "LOW BANDWIDTH", "NO DIALTONE",
        "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", "SELECTIVE BROWSING","SLOW_INTERMITTENT CONNECTION","SPECIAL FEATURE CONFIGURATION","VOICE AND DATA PROBLEM","WLAN CONFIGURATION","EMAIL PROBLEM WEBSITE IP LISTING","Not Applicable"
    ];

    function populateConcerns() {
        concernList.innerHTML = "";
        concerns.forEach(concern => {
            const li = document.createElement("li");
            li.textContent = concern;
            li.addEventListener("click", () => {
                concernSearch.value = concern;
                concernDropdown.classList.add("hideCH");
            });
            concernList.appendChild(li);
        });
    }

    function filterConcerns() {
        const filter = concernSearch.value.toLowerCase();
        const items = concernList.getElementsByTagName("li");
        let hasMatch = false;

        for (let item of items) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
                hasMatch = true;
            } else {
                item.style.display = "none";
            }
        }

        concernDropdown.classList.toggle("hideCH", !hasMatch);
    }

    concernSearch.addEventListener("input", filterConcerns);
    populateConcerns();
});


// reset script
document.addEventListener("DOMContentLoaded", function () {
    const resetButtons = document.querySelectorAll("input[type='reset']");

    resetButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 

            const userConfirmed = confirm("Are you sure you want to reset the form?");

            if (userConfirmed) {
                const form = button.closest("form"); 
                form.reset();
            }
        });
    });
});



abcabtn.addEventListener("click",function(event){
    let ani = document.getElementById("ani").value;
    let ba = document.getElementById("baNum").value;
    let concern = document.getElementById("concernSearch").value;
    let action = document.getElementById("addRemarks").value;
    let sID = document.getElementById("serviceID").value;
    let wocas = document.getElementById("wocas").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "ABCA";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Ani  ${ani}\nBilling Account Number ${ba}\nService ID ${sID}\nConcern  ${concern}\nWocas ${wocas}\nAction  ${action}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

siBtn.addEventListener("click", function(event){
    let contactPerson= document.getElementById("contactPerson").value;
    let contactNumber= document.getElementById("contactNumber").value;
    let contactEmail= document.getElementById("contactEmail").value;
    let wPermit= document.getElementById("wPermit").value;
    let avalableDateandTime= document.getElementById("avalableDateandTime").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    dbox.classList.remove("okDis");

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person  ${contactPerson}\nContact Number ${contactNumber}\nContact Email  ${contactEmail}\nWorking Permit Needed ${wPermit}\nAvailable Date and Time ${avalableDateandTime}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


cepNBtn.addEventListener("click", function(event){
    let ispt = document.getElementById("istherePT");

    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum").value;
    let contactPerson = document.getElementById("contactPerson").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let contactEmail = document.getElementById("contactEmail").value;
    let wPermit = document.getElementById("wPermit").value;
    let avalableDateandTime = document.getElementById("avalableDateandTime").value;
    let cvTestResult = document.getElementById("cvTestResult").value;
    let wocas = document.getElementById("wocas").value;
    let requiredAction = document.getElementById("requiredAction").value;
    let onuSN = document.getElementById("onuSN").value;
    let onuLS = document.getElementById("onuLS").value;
    let flmTrb = document.getElementById("flmTrb").value;
    let pt = document.getElementById("pt").value;
    let yespt = document.getElementById("istherePT").value;
    let addRemarks = document.getElementById("addRemarks").value;
    

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Channel Vendor ${vc}\nSFDC Case Number  ${sfdcCaseNum}\nContact Person  ${contactPerson}\nContact Number  ${contactNumber}\nContact Email Address  ${contactEmail}\nWorking Permit Needed  ${wPermit}\nAvailable Date and Time  ${avalableDateandTime}\nClearview Test Result  ${cvTestResult}\nComplaint Remarks/WOCAS  ${wocas}\nRequired Action  ${requiredAction}\nONU Serial Number  ${onuSN}\nONU Light Status  ${onuLS}\nFLM Troubleshooting  ${flmTrb}\nIs there a PT  ${pt}\nPT Number ${yespt}\nAdditional Remarks  ${addRemarks}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})

let okbtn = document.getElementById("okbtn");

okbtn.addEventListener("click",function(){
    dbox.classList.add("okDis");
})

document.getElementById("concernSearch").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let dropdown = document.getElementById("concernDropdown");
    let options = dropdown.getElementsByTagName("option");

    for (let option of options) {
        let text = option.textContent.toLowerCase();
        option.style.display = text.includes(searchValue) ? "block" : "none";
    }
});


// Contact Channel Script

let contactChannel = document.getElementById("contactChannel");


contactChannel.addEventListener("change",function(){
    let hotlineForm = document.getElementById("hotlineForm");
    let sanaAllForm = document.getElementById("sana-allForm");

    if(contactChannel.value == "Hotline CND"){
        hotlineForm.classList.remove("hideCH");
        sanaAllForm.classList.add("hideCH")

    }else if(contactChannel.value == "Sana All CND"){

        sanaAllForm.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");

    }
})

// Generate 

let generatebtn = document.getElementById("generate");

generatebtn.addEventListener("click",function(e){
    let ritm = document.getElementById("ritm").value;
    let cepCase = document.getElementById("cepCase").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum").value;
    let receivedthru = document.getElementById("receivedthru").value;
    let can = document.getElementById("can").value;
    let billingnum = document.getElementById("billingnum").value;
    let accName = document.getElementById("accName").value;
    let serviceID = document.getElementById("serviceID").value;
    let concernSearch2 = document.getElementById("concernSearch2").value;
    let actionTaken = document.getElementById("actionTaken").value;
    
    e.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SANA ALL NOTATION";

    dbox.classList.remove("okDis");

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `RITM Number: ${ritm}\nCEP Case No: ${cepCase}\nSFDC Case Number: ${sfdcCaseNum}\nReceived thru Sana All Dated: ${receivedthru}\nCustomer Account Number: ${can}\nBilling Account: ${billingnum}\nAccount Name: ${accName}\nService ID: ${serviceID}\nConcern: ${concernSearch2}\nAction Taken: ${actionTaken}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


document.addEventListener("DOMContentLoaded", function () {
    const hotlineForm = document.getElementById("hotlineForm"); // Target the hotline form
    const submitButtons = hotlineForm.querySelectorAll("button:not([type='reset'])");
    const resetButton = hotlineForm.querySelector("button[type='reset']");
    const dbox = document.getElementById("dbox"); // Pop-up container

    submitButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            let isValid = true;

            // Get all input, textarea, and select elements inside hotline form
            const requiredFields = hotlineForm.querySelectorAll("input, textarea, select");

            requiredFields.forEach(input => {
                if (input.value.trim() === "") { 
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault(); 
                alert("⚠ All fields must be filled before submitting."); // Clearer error message
                dbox.classList.add("okDis"); // Hide pop-up if validation fails
            } else {
                event.preventDefault(); // Prevent actual form submission
                dbox.classList.remove("okDis"); // Show pop-up if validation passes
            }
        });
    });

    resetButton.addEventListener("click", function () {
        dbox.classList.add("okDis"); // Hide pop-up when reset
    });
});







