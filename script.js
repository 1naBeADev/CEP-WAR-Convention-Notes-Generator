let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");
let cepNBtn = document.getElementById("cepNBtn")

let abcabtnSA = document.getElementById("abcabtn_SANALL");
let siBtnSA = document.getElementById("siBtn_SANALL");
let cepNBtnSA = document.getElementById("cepNBtn_SANALL")
let sanBtn = document.getElementById("notation_SANALL");
//SANA ALL buttons

let amBtn = document.getElementById("amBtn");


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
    let bohAMForm = document.getElementById("amForm");

    if(contactChannel.value == "Hotline CND"){
        hotlineForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH")

    }else if(contactChannel.value == "Sana All CND"){
        sanaAllForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        hotlineForm.classList.add("hideCH");

    }else if(contactChannel.value == "BOH AM"){
        bohAMForm.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
    }
})

// Generate 


document.addEventListener("DOMContentLoaded", function () {
    const hotlineForm = document.getElementById("hotlineForm");
    const submitButtons = hotlineForm.querySelectorAll("button:not([type='reset'])");
    const resetButton = hotlineForm.querySelector("button[type='reset']");
    const dbox = document.getElementById("dbox");

    submitButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const buttonValue = button.value || button.innerText;

            // Allow ABCA button without validation
            if (buttonValue.includes("ABCA")) {
                dbox.classList.remove("okDis");
                return;
            }

            // Validation for other buttons
            let isValid = true;
            const requiredFields = hotlineForm.querySelectorAll("input, textarea, select");

            requiredFields.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("All fields must be filled before submitting.");
                dbox.classList.add("okDis");
            } else {
                event.preventDefault();
                dbox.classList.remove("okDis");
            }
        });
    });

    resetButton.addEventListener("click", function () {
        dbox.classList.add("okDis");
    });
});









// SANA ALL Buttons
abcabtnSA.addEventListener("click",function(event){
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

   



cepNBtnSA.addEventListener("click", function(event) {

    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum1").value;
    let contactPerson = document.getElementById("contactPerson1").value;
    let contactNumber = document.getElementById("contactNumber1").value;
    let contactEmail = document.getElementById("contactEmail1").value;
    let wPermit = document.getElementById("wPermit1").value;
    let avalableDateandTime = document.getElementById("avalableDateandTime1").value;
    let cvTestResult = document.getElementById("cvTestResult1").value;
    let requiredAction = document.getElementById("requiredAction1").value;
    let onuSN = document.getElementById("onuSN1").value;
    let onuLS = document.getElementById("onuLS1").value;
    let flmTrb = document.getElementById("flmTrb1").value;
    let pt = document.getElementById("ptNum1").value;
    let yespt = document.getElementById("pt1").value;
    let addRemarks = document.getElementById("addRemarksSA").value;
    

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Channel Vendor: ${vc}\nSFDC Case Number:  ${sfdcCaseNum}\nContact Person:  ${contactPerson}\nContact Number:  ${contactNumber}\nContact Email Address:  ${contactEmail}\nWorking Permit Needed:  ${wPermit}\nAvailable Date and Time:  ${avalableDateandTime}\nClearview Test Result:  ${cvTestResult}\nRequired Action:  ${requiredAction}\nONU Serial Number:  ${onuSN}\nONU Light Status:  ${onuLS}\nFLM Troubleshooting:  ${flmTrb}\nIs there a PT:  ${pt}\nPT Number: ${yespt}\nAdditional Remarks:  ${addRemarks}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
});





siBtnSA.addEventListener("click", function(event){
    let contactPerson= document.getElementById("contactPerson1").value;
    let contactNumber= document.getElementById("contactNumber1").value;
    let contactEmail= document.getElementById("contactEmail1").value;
    let wPermit= document.getElementById("wPermit1").value;
    let avalableDateandTime1= document.getElementById("avalableDateandTime1").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person:  ${contactPerson}\nContact Number: ${contactNumber}\nContact Email:  ${contactEmail}\nWorking Permit Needed: ${wPermit}\nAvailable Date and Time: ${avalableDateandTime1}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


sanBtn.addEventListener("click", function(event){
    let ritm = document.getElementById("ritm").value;
    let cepcn = document.getElementById("cepcn").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum1").value;
    let ritmdate = document.getElementById("ritmdate").value;
    let caNum = document.getElementById("caNum").value;
    let baNum = document.getElementById("baNum").value;
    let aName = document.getElementById("aName").value;
    let serviceID = document.getElementById("serviceID1").value;
    let concernSearch = document.getElementById("concernSearch1").value;
    let addRemarksSA = document.getElementById("addRemarksSA").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "Sana All Notation";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `RITM Number:  ${ritm}\nCEP Case Number: ${cepcn}\nSFDC Case Number:  ${sfdcCaseNum}\nReceived Thru Sana All Dated: ${ritmdate}\nCustomer Account Number: ${caNum}\nBilling Account Number: ${baNum}\nAccount Name: ${aName}\nService ID: ${serviceID}\nConcern ${concernSearch}\nAction Taken: ${addRemarksSA}`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


// SANA ALL button validation

document.addEventListener("DOMContentLoaded", function () {
    const sanaAllForm = document.getElementById("sana-allForm"); // Fixed ID
    const submitButtons = sanaAllForm.querySelectorAll("button:not([type='reset'])");
    const resetButton = sanaAllForm.querySelector("button[type='reset']");
    const dbox = document.getElementById("dbox"); // You must ensure dbox exists in HTML

    submitButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const buttonId = button.id;

            // Allow ABCA and Notation buttons without validation
            if (buttonId === "abcabtn_SANALL" || buttonId === "notation_SANALL") {
                if (dbox) dbox.classList.remove("okDis");
                return;
            }

            let isValid = true;
            const requiredFields = sanaAllForm.querySelectorAll("input, textarea, select");

            requiredFields.forEach(input => {
                // Skip hidden or disabled inputs
                if (input.offsetParent === null || input.disabled) return;

                if (input.value.trim() === "" || input.value === "blank") {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("All fields must be filled before continuing.");
                if (dbox) dbox.classList.add("okDis");
            } else {
                if (dbox) dbox.classList.remove("okDis");
            }
        });
    });

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            if (dbox) dbox.classList.add("okDis");
        });
    }
});


amBtn.addEventListener("click",function(event){
    let anAM = document.getElementById("anAM").value;
    let caNum2 = document.getElementById("caNum2").value;
    let baNum2 = document.getElementById("baNum2").value;
    let serviceID2 = document.getElementById("serviceID2").value;
    let concernSearch = document.getElementById("concernSearch3").value;
    let addRemarks2 = document.getElementById("addRemarks2").value;
    
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "Account Management Notation";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Account Name:  ${anAM}\nCustomer Account Number: ${caNum2}\nBilling Account Number: ${baNum2}\nService ID:  ${serviceID2}\nConcern: ${concernSearch}\nAction Taken: ${addRemarks2}`;


})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch3");
    const concernDropdown = document.getElementById("concernDropdown3");
    const concernList = document.getElementById("concernList3");

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

