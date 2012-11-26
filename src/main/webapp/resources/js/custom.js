// JavaScript Document
$.noty.defaults = {
  layout: 'top',
  theme: 'default',
  type: 'alert',
  text: '',
  dismissQueue: true, // If you want to use queue feature set this true
  template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
  animation: {
    open: {height: 'toggle'},
    close: {height: 'toggle'},
    easing: 'swing',
    speed: 500 // opening & closing animation speed
  },
  timeout: false, // delay for closing event. Set false for sticky notifications
  force: false, // adds notification to the beginning of queue when set to true
  modal: false,
  closeWith: ['click'], // ['click', 'button', 'hover']
  callback: {
    onShow: function() {},
    afterShow: function() {
		setTimeout( function() {
		$.noty.closeAll();
			}, 3000 );},
    onClose: function() {},
    afterClose: function() {}
  },
  buttons: false // an array of buttons
};
function changeAnything(){}


$(function(){
	
	$('#track_details').jqm();

	
	//$('.field_wrapper ').addClass('tooltip').attr('autocomplete','off');
	$('.field_wrapper ').attr('autocomplete','off');
	//$('select').addClass('tooltip');
	
	$('.tooltip').each(function(index, element) { 
		var value = typeof this.name.split('_')[1] == 'undefined' ? this.name : this.name.split('_')[1];
		$(this).attr('title','Enter '+value+' here');
    });
	$("[name=trackOrder]").keyup(function(e){ 
	if(e.keyCode==13)
	$("#track_button").click();
	});
    $("#track_button").click(function(e){ 
    	var trackOrderVal = $.trim($('[name=trackOrder]').val());
	    $('[name=trackOrder]').val(trackOrderVal) ;  
	    //alert(trackOrderVal);
	    $.ajax({
	 	 url: 'trackOrder.php?trackOrder='+trackOrderVal,
	 	 success: function(data) {
	    $('#track_details .modal-content').html(data);
		$('.modal_titlebox').html('Track Your Order');
	    $("#track_details").jqmShow();
	    $(".track_order").hide();
	 	 }
		});
    });
    $('.tooltip').qtip({
		style: {
			name: 'cream' // Inherit from preset style
		}
    });
	$("[name=pickup]").removeClass("active").removeAttr("checked");
	$("input[id=billing_checkbox]").removeAttr("checked"); 
	
	
	

	$(".field_wrapper ").keyup(function(e){
		$(this).next().css('display','none');
		var checkMethod=this.name.split('_')[0];
		var checkName=this.name.split('_')[1];
		if(checkMethod=='shipping' && $('#myBilling_address').css('display')=='none') {
		$('[name=billing_'+checkName+']').val(this.value).next().hide();
		$(this).removeClass("error");
		
		$(this).next().next().html('');   
		}
		$(this).removeClass("error"); 
		$(this).next().next().html(''); 
	}).bind('paste',function(e){ 
		var checkMethod=this.name.split('_')[0];
		var checkName=this.name.split('_')[1];
		if(checkMethod=='shipping' && $('#myBilling_address').css('display')=='none') {
		$('[name=billing_'+checkName+']').val(this.value).next().hide();
		$(this).removeClass("error");
		
		$(this).next().next().html('');  
		}
		$(this).removeClass("error");
		$(this).next().next().html('');  
	}).bind('change',function(e){  
		var checkMethod=this.name.split('_')[0];
		var checkName=this.name.split('_')[1];
		if(checkMethod=='shipping' && $('#myBilling_address').css('display')=='none') {
		$('[name=billing_'+checkName+']').val(this.value).next().hide();
		$(this).removeClass("error");
		$(this).next().next().html('');   
		}
		
		$(this).removeClass("error");
		$(this).next().next().html('');  
	}).bind('focus',function(e){ 
	
	    this.alt = this.placeholder;
		$(this).attr('placeholder','');
		 
	}).bind('focusout',function(e){ 
		$(this).attr('placeholder',this.alt);		 
	});
	

	
	
	
	$(".previous").click(function(e){
	e.preventDefault();
	var which = $(this);
	if(!which.hasClass("previous_grey")){
		which.next().animate({scrollLeft:-710}, 1000)
		which.addClass("previous_grey").find("img").attr("src","images/previous_grey.gif");
		which.next().next().removeClass("next_grey").find("img").attr("src","images/next.gif");
	}
	})
$(".next").click(function(e){
	e.preventDefault();
	var which = $(this);
	if(!which.hasClass("next_grey")){
		which.prev().animate({scrollLeft:710}, 1000);
		which.addClass("next_grey").find("img").attr("src","images/next_grey.gif");
		which.prev().prev().removeClass("previous_grey").find("img").attr("src","images/previous.gif");
	}
	})
	$(".track").click(function(e){
		  e.preventDefault();
		  if($(".track_order").is(":visible")){
			  return;
		  }
		  $(".track_order").slideToggle();
		})
	$(".upload").click(function(e){
		  e.preventDefault();
		  if($(".upload_order").is(":visible")){
			  return;
		  }
		  $(".upload_order").slideToggle();
		})	
	$(".upload_order .cancel_track").click(function(e){
		  e.preventDefault();
		  $(".upload_order").slideToggle();
		})
	$(".track_order .cancel_track").click(function(e){
		  e.preventDefault();
		  $(".track_order").slideToggle();
		})
	$('.slider_wrapper').carousel({
					slider: '.slider',
					slide: '.slide',
					slideHed: '.slidehed',
					addNav : false
				});	
	$(".main-nav ul li, .main-nav").hover(function(){
		$(".main-nav").css("background","#663d90")
	},
	function(){
		$(".main-nav").css("background","#999999")
	});	
	//
	$.getScript('js/defMessages.js');
	$.getScript('js/validate.js');
	$.getScript('js/jquery.placeholder.min.js');
	
	
	//$('select[placeholder]').removeAttr('placeholder');
	//if($.browser.msie)
	//$('select[class*=placeholder]').attr('placeholder','Select State')
	//$('.field_wrapper ').placeholder();
	//$('select[class*=placeholder]').next().append('<div class="abcd"></div>');
	//
	
	$('select[name=shipping_state]').change(function(){
		stateChange($(this).val());
		
		});
	$('.field_wrapper ').parent().append('<font class="error-div"></font>');
	
	$(".save_latter").click(function(e){
		e.preventDefault();
		// TODO do a ajax call to save 
		// the below code will go inside success
		var showmsg = showAlert('success','Saved Item Successfully');
	});
	$(".delete_cart").click(function(e){
		e.preventDefault();
	// TODO do a ajax call to save 
	// the below code will go inside success
	var confirm_del = confirm("Are your sure you want to delete the item from cart?");
	if(confirm_del){
		var showmsg = showAlert('warning','Deleted Item from Cart');
	}
	});
	$("#address_selection input:radio").click(function(){
		which = $(this);
		if(!which.hasClass("active")){
			$("#address_selection input:radio").removeClass("active");
			which.addClass("active");
			if(which.val() == "1"){
				$("#printo_store_wrapper").show();
				$("#myShipping_address").slideUp(300);
				$("#billing_checkbox").removeAttr("checked");
				if($('#printo_store_list').val()!=='NO')
				$('#printo_store_list').trigger('change');
				$('[name=shipping_state]').val('17').next().hide();
			    stateChange($('[name=shipping_state]').val());
			}
			else if (which.val() == "2"){	
				$("#store_address").slideUp();			
				$("#printo_store_wrapper").hide();
				$("#myShipping_address").slideDown(300);
				$("#myBilling_address").slideUp();
				$("#myShipping_address").find('.placeholder').val('');
				if($.browser.msie && $.browser.version>8)
				$("#myShipping_address").find('.placeholder').next().show();
				else 
				$("#myShipping_address").find('.placeholder[name*=city]').next().show();
				//$('[name=shipping_state]').val('17').next().hide();
				stateChange($('[name=shipping_state]').val());
								
			}
		}
		})
	$("#printo_store_list").change(function(){
		
		if($(this).val() =="NO"){
			$("#store_address").slideUp();
			$("#myBilling_address").slideUp();
		}
		else{
			$("#store_address").slideDown();	
			$("#myBilling_address").slideDown();		
		}
	});
	$("#billing_checkbox").click(function(){
	  if($(this).is(":checked")){		 
		  $("#myBilling_address").slideDown(300);
		 
		 
		  //$("#myBilling_address").find('.placeholder').val('');
		  //$("#myBilling_address").find("input.error, textarea.error").removeClass("error");
		  //$("#myBilling_address").find('.error-div').html('');
	  }
	  else{
		 
		  $("#myBilling_address").slideUp(300);
		  setTimeout('copyBilling(false)',600);

		  
	  }
	})
	$(".edit_profile").click(function(){
		$("#profile_view").hide();
		$("#profile_form").show();
	})
	$(".cancel_profile").click(function(){
		$("#profile_view").show();
		$("#profile_form").hide();
	})
	$(".save_profile").click(function(){
		//alert("do a form submit and refresh page");
		$("#profile_view").show();
		$("#profile_form").hide();
	})
	$("#proceed_to_payment").click(function(e){
	  	e.preventDefault();
		$("#shippingDetail").find("input.error, textarea.error").removeClass("error");
		$("#shippingDetail").find("input.error, textarea.error").next().next().html(''); 
		$('.field_wrapper ').each(function(index, element) {
            $(this).val($.trim($(this).val()))
        });
		var valid=validateBilling();	
		if(valid)
		$("#shippingDetail").submit();
	})
	/* auto complete */
	$(".billing_city,.billing_state,.shipping_city,.shipping_state").live('focus click',function(){
		 $(this).parent().next().show()
	})
	$(".billing_city_list ul, .billing_state_list ul, .shipping_city_list ul, .shipping_state_list ul").hover(function(){
		$(this).parent().show()
	},function(){
	  	$(this).parent().hide()
	})
	$(".billing_city_list ul li, .billing_state_list ul li, .shipping_city_list ul li, .shipping_state_list ul li").click(function(){
		var val = $(this).text();
		var which = $(this);
		var inputValue=which.parentsUntil("div").parent().prev().find("input").val();
		if( val != "---------------"){
			 which.parent().parent().prev().children("input").val($.trim(val)).removeClass('error');
			 which.parent().parent().prev().children("input").keydown();
		}
		if( val == "---------------" && inputValue != ""){
			which.parent().parent().prev().children("input").val('').addClass("error");
			which.parent().parent().prev().children("input").keydown();			
		}
		which.parent().parent().hide();
	})
	$("#apply_coupon").click(function(e){
		//TODO : Do a ajax call to backend to verify coupon validity and update the value
		e.preventDefault();
		$(this).parent().parent().hide().next().show();
	});
	$('.ui-placeholder-wrap').each(function(index, element) {
        $(this).append('<div class="error-div"></div>');
    });
	
	$('#printo_store_list').change(function(){
	var store_id=$('#printo_store_list').val();
	if(store_id!="NO")
			$.ajax({
			type: 'GET',
			url: 'storeList.php',
			data: 'action=post&store_id='+store_id ,
			cache: false,
			async: false,
			success: function(result,index) {
			
			if(result)
				{
			$('div[id=store_address]').html('');		
						

			
			var newJson=JSON.parse(result); 
			$.each(newJson,function(key, val){
		
			switch(key)
			{
			case "FirstName":
			  $('div[id=store_address]').append('<strong>'+val+'</strong>');
			  $('[name=shipping_name]').val(val).next().hide();
			  break;
			case "LastName":
			$('[name=shipping_address]').val($('[name=shipping_address]').val()+' '+val);
			  break;
			case "HouseNo":
			  $('div[id=store_address]').append('</br>'+val);
			  $('[name=shipping_address]').val(val).next().hide();
			  break;
			case "Street":
			  $('div[id=store_address]').append('</br>'+val);
			  $('[name=shipping_address]').val($('[name=shipping_address]').val()+' '+val);
			  break;
			case "PostalCode":
			  $('div[id=store_address]').append('</br>'+val);
			  $('[name=shipping_zipcode]').val(val).next().hide();
			  
			  break;
			case "Area":
			  $('div[id=store_address]').append('</br>'+val);
			  $('[name=shipping_name]').val($('[name=shipping_name]').val()+' '+val);
			  break;
			
			case "City":
			   $('div[id=store_address]').append('</br>'+val);
			   $('[name=shipping_city]').val(val).next().hide();
			  break;
			case "State":
			   $('div[id=store_address]').append('</br>'+val);
			   $('[name=shipping_state]').val('17').next().hide();
			   stateChange(17);
			  break;
			case "Mobile":
			  $('div[id=store_address]').append('</br>'+val);
			  $('[name=shipping_phone]').val(val).next().hide();
			  break;
			
			 
			}
							
				
			});	
					
				}
				else
				{



				}
			},
			error: function() {
			alert("Error");

			}
			
			});
	
});

	
	


});

function showAlert(type,text) {
  	var n = noty({
  		text: text,
  		type: type,
      dismissQueue: false,
  		layout: 'top',
  		theme: 'default'
  	});
    return n;
  }
 
function copyBilling(valid) { 
  	$("#myBilling_address").find('.field_wrapper ').each(function(){
	  var spltName=this.name.split('_')[1];
	  if($('[name=shipping_'+spltName+']').val()!='' || valid) {
	  this.value=$('[name=shipping_'+spltName+']').val();
	  $(this).next().hide();
	  }
	});
  } 
  
function validateBilling(){ 
	var json='';
	if(typeof JSON == 'undefined' || typeof JSON.parse !== 'function') 
    $.getScript('js/json2.js');
	if(!$("[name=pickup]").is(":checked")){
			
			var htm="Shipping method is not mentioned.<br><strong>Please choose shipping method to proceed to Payment</strong>";
			$('.error_msg').html(htm).show();
			return false;
			
	}
	if($("#printo_store_list").val()==='NO' && !$("[name=pickup][value=2]").is(":checked")){ 
			
			var htm="Printo store has not chosen.<br><strong>Please choose a Printo store to proceed to Payment</strong>";
			$('.error_msg').html(htm).show();
			return false;
			
	}
	
	if($('#myShipping_address').css('display')=='block'){
		
	
	json+= '{"name": "shipping_name","rules": "required|name|min_length[3]|max_length[50]"}, {"name": "shipping_phone","rules": "required|phone|min_length[6]|max_length[15]"}, {"name": "shipping_cname","rules": "address"}, {"name": "shipping_address","rules": "required|address|min_length[10]|max_length[200]"}, {"name": "shipping_city","rules": "required|city"}, {"name": "shipping_state","rules": "required|state|min_length[1]|max_length[30]"}, {"name": "shipping_zipcode","rules": "required|numeric|min_length[6]|max_length[6]"}, {"name": "shipping_country","rules": "required"},';
			

			 	
		}
		
	if ($('#myBilling_address').css('display')=='block'){	
	
		json+= '{"name": "billing_name","rules": "required|name|min_length[3]|max_length[50]"}, {"name": "billing_phone","rules": "required|phone|min_length[6]|max_length[15]"}, {"name": "billing_cname","rules": "address"}, {"name": "billing_address","rules": "required|address|min_length[10]|max_length[200]"}, {"name": "billing_city","rules": "required|city"}, {"name": "billing_state","rules": "required|state|min_length[1]|max_length[30]"}, {"name": "billing_zipcode","rules": "required|numeric|min_length[6]|max_length[6]"}, {"name": "billing_country","rules": "required"},';

	}
	
	 
	var newJson= '[' + json.slice(0, - 1) + ']'; 
	var x=JSON.parse(newJson); 
	
	var validator =  new FormValidator('shippingDetail', x, function(errors,event) {
		
				if (errors.length > 0) { 
					// Show the errors 
					
					$.each(errors, function(i, value) { console.log($("[name=" + errors[i].name + "]").next().attr('class'));
					 $("[name=" + errors[i].name + "]").addClass("error");
		 			 $("[name=" + errors[i].name + "]").next().text(errors[i].message).show();
					});
			
					var htm="Required Fields are not entered.<br><strong>Please enter the required fields and click on to proceed to  Payment</strong>";
					$('.error_msg').html(htm);
		
					$("div.error_msg").show();
					if (event && event.preventDefault) {
					event.preventDefault();
					
						} else if (event) {
					event.returnValue = false;
					
					
					}
					
				}
	});

	
	if(!$("#billing_checkbox").is(":checked") && $("#address_selection input:radio").val()==2)
	copyBilling(true);
	return true;
		
}



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


function OpenLightBox() {
		
	    $.ajax({
	 	url: 'feedback.php',
	 	success: function(data) {
	    $('#track_details .modal-content').html(data);
		$('.modal_titlebox').html('Please Give Some Feedback');
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
