<%@ include file="/WEB-INF/views/include.jsp" %>
<link href="<spring:url value="/resources/images/favicon.png" htmlEscape="true" />" rel="shortcut icon" type="image/png">
<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">

<link href="<spring:url value="/resources/css/reset.css" htmlEscape="true" />" rel="stylesheet" type="text/css">
<link href="<spring:url value="/resources/css/styles.css" htmlEscape="true" />" rel="stylesheet" type="text/css">
<link href="<spring:url value="/resources/css/tango/skin.css" htmlEscape="true" />" rel="stylesheet" type="text/css">
<script src="<spring:url value="/resources/js/jquery-1.7.2.min.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/jquery.placeholder.min.js" htmlEscape="true" />"></script>
<script src="<spring:url value="/resources/js/plugin.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/defMessages.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/validate.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/jquery.noty.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/default.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/top.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/custom.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/jqModal.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/slider.min.js" htmlEscape="true" />"></script> 
<script src="<spring:url value="/resources/js/jquery.qtip.min.js" htmlEscape="true" />"></script>
<script src="<spring:url value="/resources/js/jquery.jcarousel.min.js" htmlEscape="true" />"></script> 

<style>
#btn-feedback {
position: fixed;
z-index: 100;
top: 180px;
right: 0;
}
.product_scroll{
	width:747px;
	padding:0 20px 0 24px;	
	
}
.product_wrapper ul{
	height:209px;
}
</style>
<div style="POSITION: absolute" id="btn-feedback">
<a href="#" onclick="OpenLightBox()"><img id="mydd" src="http://cdn4.printo.in/images/btn-feedback.jpg" width="38" height="102"></a>
</div>
<div id="header">
  <div class="site_width">
<a href="/printoTest/" class="logo"><img alt="Printo Logo" src="<spring:url value="/resources/images/logo.gif"  htmlEscape="true" />" width="163" height="56"></a> 
    <div class="top_nav">
      <p>Helpline: <span class="purple_text">{printoHelpLine}</span> <span class="grey_text">(9:00 am to 7:00 pm IST - Mon-Sat)</span></p>
 
      <ul class="top_button">
        <li><a href="#" class="quote" target="_blank">Request a Quote</a> </li>
 
        <li style="POSITION: relative"><a href="#" class="track"><span>Track your Order</span></a> 
        <div class="track_order">
          <p>Enter your tracking number to get the updated status of your order.</p>
 <label>Enter Track Number</label> <input name="trackOrder"><br>
          <div class="button_wrapper action_button">
<a href="#" id="track_button" class="orange_normal">Track </a><a href="#" class="white_default cancel_track">Cancel </a> 
          </div>
 
        </div>
 </li>
 
        
        <li class="account_list"><a href="login.php" class="account"><span>Sign in</span></a> 
        <ul class="myaccount">
          <li><a href="#" id="headeruserPanelBeforeLoginsign">Sign in/Register</a> 
         
         <!-- <li class="account_list"><a href="#" class="account"><span>Your Account</span></a> 
           <ul class="myaccount">
            <li><a href="#" id="headeruserPanelAfterLoginmyOrder">My Orders</a> 
            <li><a href="#" id="headeruserPanelAfterLoginmyaccount">Manage Profile</a> 
            <li><a href="#" id="headeruserPanelAfterLoginchangePassword">Change Password</a> 
            
			<li> <a href="#" id="headeruserPanelAfterLoginadminUserLink1">Admin Panel</a></li> 
            
            <li><a href="/logout">Logout</a> </li>
 
          </ul> -->
 </li>
 
        </ul>
 
      </div>
 
    </div>
  </div>
  <div class="user_info clearfix">
    <div class="site_width">
      <ul class="user_nav">
        <li>Welcome <span style="COLOR: #673e92; FONT-WEIGHT: bold">Guest</span> </li>
 
        <li><a href="#" class="cart">Cart (0)</a> </li>
 
        <li><a href="#">Store Locator</a> </li>
 
      </ul>
 
      <!--<input class="placeholder search" placeholder="Search for Products">-->
      <ul>
      </ul>
 
    </div>
  </div>
