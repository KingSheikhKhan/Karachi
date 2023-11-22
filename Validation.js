function username(){
   var a=document.getElementById('User_value').value;
   var b=/^[A-Za-z]{3,30}$/;
   if (b.test(a)) {
       document.querySelector("#user-field").classList="success";
   }
   else
   {
    document.querySelector("#user-field").classList="fail";
   }
}
function email(){
    var a=document.getElementById('email_value').value;
    var b=/^[A-Za-z._]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
    if (b.test(a)) {
        document.querySelector("#email-field").classList="success";
    }
    else
    {
     document.querySelector("#email-field").classList="fail";
    }
 }
 function Password(){
    var a=document.getElementById('pass_value').value;
    var b=/^[^ ]{6,30}$/;
    if (b.test(a)) {
        document.querySelector("#pass-field").classList="success";
    }
    else
    {
     document.querySelector("#pass-field").classList="fail";
    }
 }
 function cPassword(){
    var p=document.getElementById('pass_value').value;
    var a=document.getElementById('cpass_value').value;
    var b=/^[^ ]{6,30}$/;
    if (b.test(a) && p==a) {
        document.querySelector("#cpass-field").classList="success";
    }
    else
    {
     document.querySelector("#cpass-field").classList="fail";
    }
 }
 