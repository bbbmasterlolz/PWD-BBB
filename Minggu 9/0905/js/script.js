function fn_ValForm() {
    var sMsg = "";
    var cekemail = /^[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;  
    if(document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan Nama";
    }
    if(document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan Email";
    }else if(!cekemail.test(document.getElementById("email").value)){
        sMsg += "\n* Format Email tidak valid";
    }
    if(document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }
    if(sMsg != "") {
        alert("Peringatann:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}