let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");
let cepNBtn = document.getElementById("cepNBtn")

let dbox = document.getElementById("dbox");
let dboxTitle = document.getElementById("dboxTitle");

abcabtn.addEventListener("click",function(event){
    let ani = document.getElementById("ani").value;
    let ba = document.getElementById("baNum").value;
    let concern = document.getElementById("concern").value;
    let action = document.getElementById("requiredAction").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "ABCA";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Ani: ${ani}\nBilling Account Number:${ba}\nConcern: ${concern}\nAction: ${action}`;

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
    abcatxtBox.value = `Contact Person: ${contactPerson}\nContact Number:${contactNumber}\nContact Email: ${contactEmail}Working Permit Needed:${wPermit}\nAvailable Date and Time:${avalableDateandTime}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})

cepNBtn.addEventListener("click", function(event){
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
    let addRemarks = document.getElementById("addRemarks").value;
    

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    dbox.classList.remove("okDis");

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `SFDC Case Number: ${sfdcCaseNum}\nContact Person: ${contactPerson}\nContact Number: ${contactNumber}\nContact Email Address: ${contactEmail}\nWorking Permit Needed: ${wPermit}\nAvailable Date and Time: ${avalableDateandTime}\nClearview Test Result: ${cvTestResult}\nComplaint Remarks/WOCAS: ${wocas}\nRequired Action: ${requiredAction}\nONU Serial Number: ${onuSN}\nONU Light Status: ${onuLS}\nFLM Troubleshooting: ${flmTrb}\nIs there a PT: ${pt}\nAdditional Remarks: ${addRemarks}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})

let okbtn = document.getElementById("okbtn");

okbtn.addEventListener("click",function(){
    dbox.classList.add("okDis");
})
