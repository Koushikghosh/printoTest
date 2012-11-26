if (!$.browser.mozilla) 
var C = "277px";
else 
var C = "122px";

function checkemail(){
var str=document.validation.emailcheck.value
var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(str))
testresults=true
else{
alert("Please input a valid email address!")
testresults=false
}
return (testresults)
}



function emailValidator(elem, helperMsg)
{	
	var blnResult;
	var str=elem.value
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if (filter.test(str))
		blnResult=true
	else{
	
		var B = helperMsg;
			$('#fscr').css('display','none');
			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
		
		blnResult = false;
		
	
	}


	return blnResult;
}
function IsNumeric(strString)
   {
		   var strValidChars = "0123456789";
		   var strChar;
		   var blnResult = true;
		
		   if (strString.length == 0 && strString.length < 10) return false;
		
		   //  test strString consists of valid characters listed above
		   for (i = 0; i < strString.length && blnResult == true; i++)
			  {
			  strChar = strString.charAt(i);
			  if (strValidChars.indexOf(strChar) == -1)
				 {
				 blnResult = false;
				 }
			  }
		   return blnResult;
   }
function formtab(a){
		if(a==1)
		{

			document.getElementById("form-tab1").className="active";
			document.getElementById("form-tab2").className="";
			document.getElementById("form-con1").style.display="block";
			document.getElementById("form-con2").style.display="none";
		}
		else if(a==2)
		{

			document.getElementById("form-tab1").className="";
			document.getElementById("form-tab2").className="active";
			document.getElementById("form-con1").style.display="none";
			document.getElementById("form-con2").style.display="block";
		}	
	
}
function radio(a){
	
	switch(a){
		
		case 1:
			document.getElementById("rd1").className="active";
			document.getElementById("rd2").className="";
			document.getElementById("rd3").className="";
			document.getElementById("rd4").className="";
			document.getElementById("feedbackType").value="Complaint";	
			break;
		
		case 2:
			document.getElementById("rd1").className="";
			document.getElementById("rd2").className="active";
			document.getElementById("rd3").className="";
			document.getElementById("rd4").className="";
			document.getElementById("feedbackType").value="Question";	
			break;
		
		case 3:
			document.getElementById("rd1").className="";
			document.getElementById("rd2").className="";
			document.getElementById("rd3").className="active";
			document.getElementById("rd4").className="";
			document.getElementById("feedbackType").value="Idea";	
			break;
		
		case 4:
			document.getElementById("rd1").className="";
			document.getElementById("rd2").className="";
			document.getElementById("rd3").className="";
			document.getElementById("rd4").className="active";
			document.getElementById("feedbackType").value="Praise";	
			break;
		
	}
}
function returnTrue() {
    $("#displayoverlay").css({
		'height': '1px',
		'width': '1px'
	});
	$("#alertMsgDiv").remove();
	$("#amitOverlay").remove()
    formId = document.forms[0].id;
	$('#' + formId).attr('onsubmit','');
    $('#' + formId).submit();
}


function radio2(a){
	
	switch(a){
		
		case 1:
			document.getElementById("rd21").className="active";
			document.getElementById("rd22").className="";
			document.getElementById("rd23").className="";
			document.getElementById("rd24").className="";
			document.getElementById("feedbackType1").value="Complaint";	
			break;
		
		case 2:
			document.getElementById("rd21").className="";
			document.getElementById("rd22").className="active";
			document.getElementById("rd23").className="";
			document.getElementById("rd24").className="";
			document.getElementById("feedbackType1").value="Question";
			break;
		
		case 3:
			document.getElementById("rd21").className="";
			document.getElementById("rd22").className="";
			document.getElementById("rd23").className="active";
			document.getElementById("rd24").className="";
			document.getElementById("feedbackType1").value="Idea";
			break;
		
		case 4:
			document.getElementById("rd21").className="";
			document.getElementById("rd22").className="";
			document.getElementById("rd23").className="";
			document.getElementById("rd24").className="active";
			document.getElementById("feedbackType1").value="Praise";
			break;
	}
}
function displayFscr(){
	
	$('#fscr').css('display','inline');
	
}

function checkfeedback(a)
{
	
	
	var blnResult = true;
		if(a=="w")
		{
		var type=document.getElementById("feedbackType").value;
		var description=document.getElementById("topdescription").value;
		var topName=document.getElementById("topName").value;
		var topEmail=document.getElementById("topEmail").value;
		var top_Email=document.getElementById("topEmail");
		var topMobile=document.getElementById("topMobile").value;
		
			if(type=="")
			{
				
		$('#fscr').css('display','none');		
		var B = "Please help classify your Feedback Type";

        $(document).customAlert({
            opacity: 0.4,
            width: 310,
            height: 100,
            bgColor: "#aaa",
            message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
        });
				//alert("Please help classify your Feedback Type");
				blnResult= false;
			}
			else if(description=="")
			{
			$('#fscr').css('display','none');		
			var B = "A Description or some details would really help. Please? :-)";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("A Description or some details would really help. Please? :-)");
				blnResult= false;
			}
			else if(topName=="")
			{
			$('#fscr').css('display','none');		
			var B = " Sorry, you forgot to enter your name. ";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				
				//alert("Sorry, you forgot to enter your name. ");
				blnResult= false;
			}
			else if(topEmail=="")
			{
			$('#fscr').css('display','none');	
			var B = " Oops! It seems you forgot to leave us your email.";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("Oops! I seems you forgot to leave us your email.");
				blnResult= false;
			}
			else if(emailValidator(top_Email, "Please can you -re-check if your email ID is valid.")==false)
			{
				blnResult= false;
			}
			else if(topMobile =="" || !topMobile.match(/\w/) || IsNumeric(topMobile)==false)
			{
			$('#fscr').css('display','none');	
			var B = " Please Fill Correct Phone Number ";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				
				//alert("Please Fill Correct Phone Number");
				blnResult= false;
			}
			else
			{
				
			//CloseLightBox(); 
			$('#fscr').css('display','none');	
			
			var B = "Thank you for your feedback. If you have asked for someone from management to get in touch, you can expect a call within one working day from either our City Manager, our CEO or our Director. In case you have a query that needs a faster response, please call us on +91 80 6730 9044 (9:00am - 6:30pm, Mon-Sat, India time) to speak to a Customer Service Representative";
		
			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 250,
			bgColor: "#aaa",
			message: "<div style='height:250px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='returnTrue();'><div style='background:url(images/backDesign.png); width:310px; height:250px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});	

			blnResult= false;
				
				
			}
			
		}
		else if(a=="s")
		{
			var type=document.getElementById("feedbackType1").value;
			var description=document.getElementById("topdescription1").value;
			var topName=document.getElementById("topName1").value;
			var topEmail=document.getElementById("topEmail1").value;
			var storeName=document.getElementById("storeName").value;
			var top_Email=document.getElementById("topEmail1");
			var topMobile1=document.getElementById("topMobile1").value;
			if(type=="")
			{
			$('#fscr').css('display','none');	
			var B = "Please help classify your Feedback Type.";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("Please help classify your Feedback Type.");
				blnResult= false;
			}
			else if(storeName=="")
			{
			$('#fscr').css('display','none');	
			var B = "Please mention the Store Name / Location";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("Please mention the Store Name / Location");
				blnResult= false;
			}
			else if(topName=="")
			{
			$('#fscr').css('display','none');	
			var B = "Sorry, you forgot to enter your name.";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("Sorry, you forgot to enter your name.");
				blnResult= false;
			}
			else if(topEmail=="")
			{
			$('#fscr').css('display','none');	
			var B = "Sorry, you forgot to enter your name.";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});
				//alert("Oops! It seems you forgot to leave us your email.");
				blnResult= false;
			}
			else if(description=="")
			{
			$('#fscr').css('display','none');	
			var B = "Please give us a few details";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});	
				
				//alert("Please give us a few details");
				blnResult= false;
			}
			else if(emailValidator(top_Email, "Please can you -re-check if your email ID is valid.")==false)
			{
				blnResult= false;
			}
			else if(topMobile1 =="" || !topMobile1.match(/\w/) || topMobile1(topMobile)==false)
			
			{
			$('#fscr').css('display','none');	
			var B = "Please Fill Correct Phone Number";

			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 100,
			bgColor: "#aaa",
			message: "<div style='height:100px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png' id='aClose' height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='displayFscr();'><div style='background:url(images/backDesign.png); width:310px; height:100px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});	
				
				//alert("Please Fill Correct Phone Number");
				blnResult= false;
			}
			else
			{
				
			$('#fscr').css('display','none');		
				
			var B = "Thank you for your feedback. If you have asked for someone from management to get in touch, you can expect a call within one working day from either our City Manager, our CEO or our Director. In case you have a query that needs a faster response, please call us on +91 80 6730 9044 (9:00am - 6:30pm, Mon-Sat, India time) to speak to a Customer Service Representative";
		
			$(document).customAlert({
			opacity: 0.4,
			width: 310,
			height: 250,
			bgColor: "#aaa",
			message: "<div style='height:250px; width:310px; border: 5px solid #B4E2ED; box-shadow:10px 10px 20px #aaa; -webkit-box-shadow:10px 10px 20px #aaa; -moz-box-shadow: 10px 10px 20px #aaa; -moz-border-radius: 5px; border-radius: 5px; position:absolute;'><img src='images/cross.png'  height='30' width='30' style='position: absolute; margin-left: " + C + " ; margin-top: 0px; z-index: 1000; cursor: pointer;' onclick='returnTrue();'><div style='background:url(images/backDesign.png); width:310px; height:250px;' ><br/><div style='position:absolute; margin:20px; font-size:14px; font-weight:bold; line-height:16px; font-family:Verdana, Geneva, sans-serif; font-weight:bold; color: #10407A; text-align:center;'>" + B + "<br/></div></div></div>"
			});	
			
			blnResult= false;
			
			}	
		}
		return blnResult;
}

function OpenLightBox() {
		//document.getElementById('fscr').style.display = "inline";
		
	   
	    $.ajax({
	 	url: 'feedback.php',
	 	success: function(data) {
	    $('#track_details .modal-content').html(data);
		$("#track_details").css({'height':'auto', 'width':'auto'});
	    $("#track_details").jqmShow();
	    $(".track_order").hide();
	 	 }
		});
		
		
}
function CloseLightBox() {

		//document.getElementById("fscr").style.display = "none";
}


$(function(){
		
	var elemTop=(window.innerHeight - 560)/2;
	$('#fscrTable').parent().css({
		
		'margin-top':elemTop,
		'border':'5px solid #B4E2ED',
		'box-shadow':'10px 10px 20px #aaa;',
		'-webkit-box-shadow':'10px 10px 20px #aaa',
		'-moz-box-shadow':'10px 10px 20px #aaa',
		'-moz-border-radius':'5px',
		'border-radius':'5px'
		
	
	});
	
	
	});
