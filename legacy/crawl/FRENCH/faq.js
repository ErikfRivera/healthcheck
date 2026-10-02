var _aFAQItems = new Array();
function FAQ_AnswerBegin(sAnswerID)
{
	if (document.getElementById(sAnswerID) == null)
		{
		document.write("<div id=\"" + sAnswerID + "\" style=\"display:none;\">");
		_aFAQItems[sAnswerID] = sAnswerID;
		}
	else
		window.alert("You have already used answer ID '" + sAnswerID + "'");
}

function FAQ_AnswerEnd()
{
	document.write("</div>");
}

function FAQ_Show(sAnswerID)
{
	document.getElementById(sAnswerID).style.display = (document.getElementById(sAnswerID).style.display == "none") ? "" : "none";
}

function FAQ_ShowAll(sShowAllButton, sHideAllButton)
{
	document.getElementById(sShowAllButton).style.display = "none";
	document.getElementById(sHideAllButton).style.display = "";
	for(var sAnswerID in _aFAQItems)
		document.getElementById(sAnswerID).style.display = "";
}

function FAQ_HideAll(sShowAllButton, sHideAllButton)
{
	document.getElementById(sHideAllButton).style.display = "none";
	document.getElementById(sShowAllButton).style.display = "";
	for(var sAnswerID in _aFAQItems)
		document.getElementById(sAnswerID).style.display = "none";
}