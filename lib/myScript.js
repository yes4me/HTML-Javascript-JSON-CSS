//Read the XML file
function getTable(XMLfile)
{
	var table_str = "<table>";
    for(var i = 0; i < XMLfile.length; i++) {
		table_str += "<tr><td class=\"column1\">";
		table_str += XMLfile[i].HEADER;
		table_str += "</td><td class=\"column2\">";
		table_str += XMLfile[i].DATA;
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

updateContent(div_contact_id, getTable(contact_json) )
updateContent(div_summary_id, getTable(summary_json) );
updateContent(div_skill_id, getTable(skill_json) );
updateContent(div_work_experience_id, getTable(work_json) );
updateContent(div_education_id, getTable(education_json) );