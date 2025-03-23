let domGetter = document.getElementById;

// HOTLINE CND
// CEP NOTE 1 - 
let sfdcCaseNum = document.getElementById("sfdcCaseNum").value;


// ABCA


//Special Instruction



// function
let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");

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
    abcatxtBox.value = `Ani: ${ani}\n` + `Billing Account Number:${ba}\n` + `Concern: ${concern}\n` + `Action: ${action}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

siBtn.addEventListener("click", function(event){
    let contactPerson= document.getElementById("contactPerson").value;
    let contactNumber= document.getElementById("contactNumber").value;
    let contactEmail= document.getElementById("contactEmail").value;
    let aContactPerson= document.getElementById("aContactPerson").value;
    let aContactNumber= document.getElementById("aContactNumber").value;
    let aContactEmail= document.getElementById("aContactEmail").value;
    let wPermit= document.getElementById("wPermit").value;
    let avalableDateandTime= document.getElementById("avalableDateandTime").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    dbox.classList.remove("okDis");

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person: ${contactPerson}\n` + `Contact Number:${contactNumber}\n` + `Contact Email: ${contactEmail}\n` + `Alternative Contact Person: ${aContactPerson}\n` + `Alternative Contact Number:${aContactNumber}\n` + `Alternative Contact Email Address:${aContactEmail}\n` + `Working Permit Needed:${wPermit}\n` + `Available Date and Time:${avalableDateandTime}\n`;
})

let okbtn = document.getElementById("okbtn");

okbtn.addEventListener("click",function(){
    dbox.classList.add("okDis");
})