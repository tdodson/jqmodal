$(document).ready(function(){	
	if ($.cookie("accept") != 1) {
	
		$("#dialog").dialog ({
		open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
		autoOpen: true,
		position: "top",
		draggable: false,
		closeOnEscape: false,
		title: "Terms of Service",
		show: "fold",
		hide: "fade",
		modal: true,
		resizable: false,
		autoOpen: true,
		width: 750,
		height: 750,
		buttons: { "I accept the terms": function() { 
			$(this).dialog("close");} //end empty function
			} //end buttons
		});//end .dialog
	}else{
		$("#dialog").hide();
	}//end if . . .else statement
		
//Clicking "I agree" in modal dialog passes "accept" session cookie
	function setCookie(evt) {
		$.cookie("accept", 1);
		} //end SetCookie function
	$(".ui-dialog-buttonpane").click(setCookie);
 });//end ready event