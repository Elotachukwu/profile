function submitForm() {
    document.getElementById("frm").submit();
    var name = document.getElementById("nameId").value;
    var email = document.getElementById("emailId").value;
    var msg = document.getElementById("msgId").value;
    if(name==="" && email==="" && msg===""){
        alert("COMPULSORY! Fill in all fields.");
        return;
    } else if(name===""){
        alert("Fill in your name.");
        return;
    } else if(email===""){
        alert("Fill in your email");
        return;
    } else if(msg===""){
        alert("Write your message...");
    } else if (name!=="" && email!=="" && msg!==""){
        alert("Your form has been submitted!");
    }
}