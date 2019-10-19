function validation()
{
	var passid=document.getElementById("pass");
	var sphone=document.getElementById("phone");

	if(valid_pass(passid,7,12))
	{
	if(valid_phone(sphone))
	{
	return true;
	}
	}
	return false;
}

function valid_pass(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function valid_phone(sphone)
{
var sp_len = sphone.value.length;
if (sp_len == 0 ||sp_len >10 ||sp_len<10)
{
alert("Phone Number should not be empty / length should not exceed or be less than 10");
sphone.focus();
return false;
}
return true;
}