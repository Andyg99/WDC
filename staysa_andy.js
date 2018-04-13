/*andy's functions*/

function login(){
	// var popup = document.getElementById("login_id");
	// popup.classList.toggle("show");
	document.getElementById('login_id').style.display='grid';
	cancelsignup();
}
function cancellogin(){
	document.getElementById('login_id').style.display='none';
}

function signup(){
	document.getElementById('signup_id').style.display='grid';
	cancellogin();
}
function cancelsignup(){
	document.getElementById('signup_id').style.display='none';
}

function privacy(){
document.getElementById('privacy_id').style.display='block';
}

function cancelprivacy(){
document.getElementById('privacy_id').style.display='none';
}

function tacs(){
document.getElementById('tacs_id').style.display='block';
}

function canceltacs(){
document.getElementById('tacs_id').style.display='none';
}

function support(){
document.getElementById('support_id').style.display='block';
}

function cancelsupport(){
document.getElementById('support_id').style.display='none';
}
/* end of andys functions */