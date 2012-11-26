<%@ include file="/WEB-INF/views/header.jsp" %>
<div id="main_wrapper" class="clearfix">
  <section>
    <div id="aside">
      <nav>
        <h3 class="nav_header">Shop by Products</h3>
        <ul>
          <li><a href="#">Business Stationery</a>
            <ul>
              <li><a href="#">Business Cards (Single Side) </a></li>
              <li><a href="#">Business Cards (Double Side) </a></li>
              <li><a href="#">Letterheads </a></li>
              <li><a href="#">Envelopes </a></li>
              <li><a href="#"> Certificates</a></li>
              <li><a href="#">Certificate Plaque </a></li>
              <!-- <li><a href="#"> </a></li> -->
            </ul>
          </li>
          <li><a href="#">Marketing</a>
            <ul>
              <li><a href="#">Flyers - Regular </a></li>
              <li><a href="#">Flyers</a></li>
              <li><a href="#">Info Leaflets </a></li>
            </ul>
          </li>
          <li><a href="#">Personalised Gifts</a></li>
          <li><a href="#">Signage & Posters</a></li>
          <li><a href="#">Calendars & Diaries</a></li>
          <li><a href="#">Custom Printing</a></li>
        </ul>
      </nav>
      <h3 class="quick_header">Quick Quote</h3>
      <div class="quickorder"> <img src ="<spring:url value="/resources/images/quickorder_banner.png" htmlEscape="true" />" /> </div>
      <h3 class="shipping_header">HOW AND WHERE WE SHIP</h3>
      <div class="shipping">
        <p>Printo delivers anywhere in India using BlueDart, Fedex or DTDC. </p>
        <p>&nbsp;</p>
        <p>But there are several places where the private courier firms do not operate.</p>
        <p>&nbsp;</p>
        <p> If they do not cover your requested area, we will ship via SpeedPost (Indian Post).</p>
      </div>
      <h3 class="customers_header">Customers Testimonials</h3>
      <div class="customers" >
        <div class="slider_wrapper" data-autorotate="5000">
          <ul class="slider" id="testimony">
            <li class="slide">
              <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </blockquote>
              <span> <strong>Manish Varma</strong> -VP(XXX) </span> <span class="city">Bangalore </span>
            </li>
            <li class="slide">
              <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </blockquote><span><strong>Vinoth Kumar</strong>-VP(XXX) </span> <span class="city">Bangalore </span>
            </li>
            <li class="slide">
              <blockquote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </blockquote> <span> <strong>Ramesh</strong> -VP(XXX)</span> <span class="city">Bangalore </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main_section">
      <div class="main_banner">
      <span> <img src="<spring:url value="/resources/images/easy_one_stop.gif" htmlEscape="true" />" /></span>
      <ul>
          <li><img src="<spring:url value="/resources/images/home_banner1.png" htmlEscape="true" />" /></li>
        </ul>
      </div>
      <div class="product_wrapper">
        <div class="clearfix product_list">
          <h3>Business Stationery</h3>
          <a href="#" class="previous previous_grey"><img src="<spring:url value="/resources/images/previous_grey.gif" htmlEscape="true" />"  alt="Previous"></a>
          <div class="product_scroll" >
                        <ul>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_1.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span><a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_2.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_3.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_4.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_5.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/vc_6.jpg" htmlEscape="true" />" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />"/></a></li>
            </ul>
          </div>
           <!--  <a href="#" class="next"><img  src="<spring:url value="/resources/images/home_banner1.png" htmlEscape="true" />"  alt="Next"></a>  --> </div>
        <div class="clearfix product_list" style="height:308px">
          <h3 class="marketing">Marketing</h3>
<!--          <a href="#" class="previous"><img src="<spring:url value="/resources/images/previous.gif" htmlEscape="true" />""  alt="Previous"></a> -->
          <div class="product_scroll" style="height:254px" >
            <ul class="marketing">
              <li><img  src="<spring:url value="/resources/images/home_templates/marketing_1.jpg" htmlEscape="true" />" /><span>Flyers- Regulars</span><span class="price">Rs. 1900 for 2000</span><a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/marketing_2.jpg" htmlEscape="true" />" /> <span>Flyers</span><span class="price">Rs. 1900 for 2000</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
              <li><img  src="<spring:url value="/resources/images/home_templates/marketing_3.jpg" htmlEscape="true" />" /><span>Letterheads</span><span class="price">Rs. 355 onwards</span> <a href="#"><img src="<spring:url value="/resources/images/buy_now.png" htmlEscape="true" />" /></a></li>
            </ul>
          </div>
          <!--<a href="#" class="next"><img  src="<spring:url value="/resources/images/home_banner1.png" htmlEscape="true" />"next.gif"  alt="Next"></a> --> </div>
      </div>
    </div>
  </section>
 <%@include file="/WEB-INF/views/footer.jsp" %>

<script>
                $(function(){
                        $('#slides').slides({
                                preload: false,
                                preloadImage: 'images/loading.gif',
                                play: 4000,
                                pause: 3000,
                                hoverPause: true,
                                generateNextPrev:false
                                //autoHeight:true
                        });
						jQuery('.pscroll').jcarousel();
                });
        </script>
</body>
</html>
