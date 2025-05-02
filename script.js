let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");
let cepNBtn = document.getElementById("cepNBtn")

let abcabtnSA = document.getElementById("abcabtn_SANALL");
let siBtnSA = document.getElementById("siBtn_SANALL");
let cepNBtnSA = document.getElementById("cepNBtn_SANALL")
let sanBtn = document.getElementById("notation_SANALL");
//SANA ALL buttons

let amBtn = document.getElementById("amBtn");

// Email Btns
let cn_EM = document.getElementById("cn_EM");
let sn_EM = document.getElementById("sn_EM");
let si_EM = document.getElementById("si_EM");


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
    let email = document.getElementById("emailForm");
    let socmed = document.getElementById("socmedForm");

    if(contactChannel.value == "Hotline CND"){
        hotlineForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH")
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "Sana All CND"){
        sanaAllForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        hotlineForm.classList.add("hideCH");
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "BOH AM"){
        bohAMForm.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "Email CND"){
        email.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        bohAMForm.classList.add("hideCH");
        socmed.classList.add("hideCH");
        
    }else if(contactChannel.value == "Socmed CND"){
        socmed.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        email.classList.add("hideCH");
        bohAMForm.classList.add("hideCH");

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
    let ani = document.getElementById("ritm").value;
    let baNum = document.getElementById("baNumSA").value;
    let concern = document.getElementById("concernSearchSA").value;
    let action = document.getElementById("addRemarksSA").value;
    let sID = document.getElementById("serviceIDSA").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "ABCA";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `RITM:  ${ani}\nBilling Account Number: ${baNum}\nService ID: ${sID}\nConcern:  ${concern}\nAction:  ${action}`;

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
    let baNum = document.getElementById("baNumSA").value;
    let aName = document.getElementById("aName").value;
    let serviceID = document.getElementById("serviceIDSA").value;
    let concernSearch = document.getElementById("concernSearchSA").value;
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


// SANA ALL CONCERN LIST

document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearchSA");
    const concernDropdown = document.getElementById("concernDropdownSA");
    const concernList = document.getElementById("concernListSA");

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


// EMAIL BUTTONS

cn_EM.addEventListener("click",function(event){
    
    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum_EM = document.getElementById("sfdcCaseNum_EM").value;
    let contactperson_EM = document.getElementById("contactperson_EM").value;
    let contactNumber_EM = document.getElementById("contactNumber_EM").value;
    let contactEmail_EM = document.getElementById("contactEmail_EM").value;
    let avalableDateandTime_EM = document.getElementById("avalableDateandTime_EM").value;
    let cvTestResult_EM = document.getElementById("cvTestResult_EM").value;
    let wocas_EM = document.getElementById("wocas_EM").value;
    let addRemarks_EM = document.getElementById("addRemarks_EM").value;
    let onuSN_EM = document.getElementById("onuSN_EM").value;
    let flmTrb_EM = document.getElementById("flmTrb_EM").value;
    let pn_EM = document.getElementById("pn_EM").value;
    let wPermit_EM = document.getElementById("wPermit_EM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact channel Vendor:  ${vc}\nSFDC Case Number: ${sfdcCaseNum_EM}\nContact Person: ${contactperson_EM}\nContact Number:  ${contactNumber_EM}\nContact Email:  ${contactEmail_EM}\nAvailable Date and Time  ${avalableDateandTime_EM}\nWorking Permit Needed: ${wPermit_EM}\nSerial Number:  ${onuSN_EM}\nParent Number:  ${pn_EM}\nFLM Troubleshooting:  ${flmTrb_EM}\nClearview Test Result:  ${cvTestResult_EM}\nWOCAS:  ${wocas_EM}\nAction:  ${addRemarks_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


si_EM.addEventListener("click",function(event){
    
    let contactperson_EM = document.getElementById("contactperson_EM").value;
    let contactNumber_EM = document.getElementById("contactNumber_EM").value;
    let contactEmail_EM = document.getElementById("contactEmail_EM").value;
    let avalableDateandTime_EM = document.getElementById("avalableDateandTime_EM").value;
    let wPermit_EM = document.getElementById("wPermit_EM").value;
    let rcontactperson_EM = document.getElementById("rcontactperson_EM").value;
    let rcontactNumber_EM = document.getElementById("rcontactNumber_EM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person: ${contactperson_EM}\nContact Number:  ${contactNumber_EM}\nContact Email:  ${contactEmail_EM}\nAvailable Date and Time  ${avalableDateandTime_EM}\nWorking Permit Needed: ${wPermit_EM}\nReported Contact Person:  ${rcontactperson_EM}\nReported Contact Number:  ${rcontactNumber_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


sn_EM.addEventListener("click",function(event){
    
    let sfdcCaseNum_EM = document.getElementById("sfdcCaseNum_EM").value;
    let cepCasenum_EM = document.getElementById("cepCasenum_EM").value;
    let rte_EM = document.getElementById("rte_EM").value;
    let customerAccountnum_EM = document.getElementById("customerAccountnum_EM").value;
    let baNum_EM = document.getElementById("baNum_EM").value;
    let accountname_EM = document.getElementById("accountname_EM").value;
    let serviceID_EM = document.getElementById("serviceID_EM").value;
    let concernSearch_EM = document.getElementById("concernSearch_EM").value;
    let addRemarks_EM = document.getElementById("addRemarks_EM").value;
    

   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "STANDARD NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `SFDC Case Number: ${sfdcCaseNum_EM}\nCEP Case No/Fault Ticket No:   ${cepCasenum_EM}\nReceived thru Enterprise Care Mailbox Dated: ${rte_EM}\nCustomer Account Number: ${customerAccountnum_EM}\nBilling Account Number:  ${baNum_EM}\nAccount Name: ${accountname_EM}\nService ID:  ${serviceID_EM}\nConcern:  ${concernSearch_EM}\nAction Taken: ${addRemarks_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch_EM");
    const concernDropdown = document.getElementById("concernDropdown_EM");
    const concernList = document.getElementById("concernList_EM");

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




// SOCMED BUTTONS

cn_SM.addEventListener("click",function(event){
    
    let vc = document.getElementById("contactChannel").value;
    let sfdctechnicalCasenum_SM= document.getElementById("sfdctechnicalCasenum_SM").value;
    let contactperson_SM = document.getElementById("contactperson_SM").value;
    let contactNumber_SM = document.getElementById("contactNumber_SM").value;
    let avalableDateandTime_SM = document.getElementById("avalableDateandTime_SM").value;
    let cvTestResult_SM = document.getElementById("cvTestResult_SM").value;
    let wocas_SM = document.getElementById("wocas_SM").value;
    let addRemarks_SM = document.getElementById("addRemarks_SM").value;
    let onuSN_SM = document.getElementById("onuSN_SM").value;
    let flmTrb_SM = document.getElementById("flmTrb_SM").value;
    let pn_SM = document.getElementById("pn_SM").value;
    let wPermit_SM = document.getElementById("wPermit_SM").value;

   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact channel Vendor:  ${vc}\nSFDC Case Number: ${sfdctechnicalCasenum_SM}\nContact Person: ${contactperson_SM}\nContact Number:  ${contactNumber_SM}\nAvailable Date and Time:  ${avalableDateandTime_SM}\nWorking Permit Needed: ${wPermit_SM}\nSerial Number:  ${onuSN_SM}\nParent Number:  ${pn_SM}\nFLM Troubleshooting:  ${flmTrb_SM}\nClearview Test Result:  ${cvTestResult_SM}\nWOCAS:  ${wocas_SM}\nAction:  ${addRemarks_SM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

si_SM.addEventListener("click",function(event){
    
    let contactperson_SM = document.getElementById("contactperson_SM").value;
    let contactNumber_SM = document.getElementById("contactNumber_SM").value;
    let avalableDateandTime_SM = document.getElementById("avalableDateandTime_SM").value;
    let wPermit_SM = document.getElementById("wPermit_SM").value;
    let rcontactperson_EM = document.getElementById("rcontactperson_EM").value;
    let rcontactNumber_EM = document.getElementById("rcontactNumber_EM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person: ${contactperson_SM}\nContact Number:  ${contactNumber_SM}\nAvailable Date and Time:  ${avalableDateandTime_SM}\nWorking Permit Needed: ${wPermit_SM}\nReported Contact Person:  ${rcontactperson_EM}\nReported Contact Number:  ${rcontactNumber_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

sn_SM.addEventListener("click",function(event){
    
    let cepCasenum_SM = document.getElementById("cepCasenum_SM").value;
    let sfdctechnicalCasenum_SM = document.getElementById("sfdctechnicalCasenum_SM").value;
    let customerAccountnum_SM = document.getElementById("customerAccountnum_SM").value;
    let baNum_SM= document.getElementById("baNum_SM").value;
    let accountname_SM = document.getElementById("accountname_SM").value;
    let serviceID_SM = document.getElementById("serviceID_SM").value;
    let concernSearch_SM= document.getElementById("concernSearch_SM").value;
    let addRemarks_SM = document.getElementById("addRemarks_SM").value;
    let rtsm = document.getElementById("rtsm").value;
    let fromsocialpersona_SM = document.getElementById("fromsocialpersona_SM").value;
    let industrygroup_SM = document.getElementById("industrygroup_SM").value;
    let Casenum_SM = document.getElementById("Casenum_SM").value;


   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "STANDARD NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Case Number: ${Casenum_SM}\nCEP Case No/Fault Ticket No: ${cepCasenum_SM}\nSFDC Case Number: ${sfdctechnicalCasenum_SM}\nReceived thru Enterprise SocMed Dated: ${rtsm}\nFrom (Social Persona): ${fromsocialpersona_SM}\nCustomer Account Number: ${customerAccountnum_SM}\nBilling Account Number:  ${baNum_SM}\nIndustry Group:  ${industrygroup_SM}\nAccount Name: ${accountname_SM}\nService ID:  ${serviceID_SM}\nConcern:  ${concernSearch_SM}\nAction Taken: ${addRemarks_SM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch_SM");
    const concernDropdown = document.getElementById("concernDropdown_SM");
    const concernList = document.getElementById("concernList_SM");

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
