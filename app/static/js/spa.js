function show_home()
{
	document.getElementById("first").style.display="block";
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="none";
	document.getElementById("fourth").style.display="none";
}
function show_about_me()
{
	document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="block";
	document.getElementById("third").style.display="none";
	document.getElementById("fourth").style.display="none";
}
function show_projects()
{
	document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="block";
	document.getElementById("fourth").style.display="none";
}
function show_contact()
{
	document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="none";
	document.getElementById("fourth").style.display="block";
}
location.hash = "";
location.hash = "#home";



