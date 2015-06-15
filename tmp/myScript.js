function createCrossDomainRequest() {
	var xmlhttp;
	if (window.XDomainRequest)
		xmlhttp = new window.XDomainRequest();
	else if (window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest();
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		//xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
	}
	return xmlhttp;
}

//Read the XML file
function getTable(XMLfile)
{
	var xmlhttp = createCrossDomainRequest();
	if (xmlhttp == null) {
		alert("AJAX (XMLHTTP) not supported");
		window.console.log("AJAX (XMLHTTP) not supported.");
		return
	}
	//xmlhttp.open("GET", XMLfile, false);
	xmlhttp.open("GET", "contact.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;

	var table_str = "<table>";
	var x=xmlDoc.getElementsByTagName("NEWINFO");
	for (var i=0; i<x.length; i++)
	{
		table_str += "<tr><td>";
		table_str += x[i].getElementsByTagName("HEADER")[0].childNodes[0].nodeValue;
		table_str += "</td><td>";
		table_str += x[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue;
		table_str += "</td></tr>";
	}
	table_str += "</table>";
	return table_str;
}

//Change value inside a layer
function updateInnerHTML(elementID, value)
{
	if (!elementID)
		return
	elementID.innerHTML = value;
}
function updateContent(elementID, value)
{
	updateInnerHTML(elementID.querySelector("#content"), value)
}

//Display or hide the layer
function displayLayer(elementID){
	if (!document.getElementById)
		return
	if ((elementID.style.display=="block") || (elementID.style.display==""))
		elementID.style.display="none"
	else
		elementID.style.display="block"
}
function addClickListener(parentID){
	var titleID		= parentID.querySelector("#title")
	var contentID	= parentID.querySelector("#content")
	titleID.addEventListener("click", function(){ displayLayer(contentID); } );
}


var div_contact_id		= document.getElementById("contact")
var div_summary_id		= document.getElementById("summary")
var div_skill_id		= document.getElementById("skill")
var div_work_experience_id = document.getElementById("work_experience")
var div_education_id	= document.getElementById("education")

addClickListener(div_contact_id)
addClickListener(div_summary_id)
addClickListener(div_skill_id)
addClickListener(div_work_experience_id)
addClickListener(div_education_id)

updateContent(div_contact_id, getTable("contact.xml") )
updateContent(div_summary_id, getTable("summary.xml") );
updateContent(div_skill_id, getTable("skill.xml") );
updateContent(div_work_experience_id, getTable("work_experience.xml") );
updateContent(div_education_id, getTable("education.xml") );