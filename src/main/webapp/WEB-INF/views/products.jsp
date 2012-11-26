<%@ include file="/WEB-INF/views/header.jsp" %>

<div id="main_wrapper" class="clearfix">
  <section>
    <div id="aside">
      <nav style="position:relative"> 
        <!--<h3 class="subnav_header">Shop by Products <span></span></h3> -->
        <ul class="main-nav">
          <li class="first"><a href="#" class="mainmenu">Shop by Products</a>
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
          </li>
        </ul>
      </nav>
      <nav>
        <h3 class="nav_header_products">Business Stationery</h3>
        <ul class="products_ul">
          <li><a href="#" class="current">Business Cards (Single Side) </a></li>
          <li><a href="#">Business Cards (Double Side) </a></li>
          <li><a href="#">Letterheads </a></li>
          <li><a href="#">Envelopes </a></li>
          <li><a href="#"> Certificates</a></li>
          <li><a href="#">Certificate Plaque </a></li>
        </ul>
      </nav>
      <h3 class="quick_header">Quick Order</h3>
      <div class="quickorder"> <img src ="images/quickorder_banner.png" /> </div>
      <h3 class="shipping_header">HOW AND WHERE WE SHIP</h3>
      <div class="shipping">
        <p>Printo delivers anywhere in India using BlueDart, Fedex or DTDC. </p>
        <p>&nbsp;</p>
        <p>But there are several places where the private courier firms do not operate.</p>
        <p>&nbsp;</p>
        <p> If they do not cover your requested area, we will ship via SpeedPost (Indian Post).</p>
      </div>
      <h3 class="customers_header">Customers</h3>
      <div class="customers">
        <div class="slider_wrapper" data-autorotate="5000">
          <ul class="slider" id="testimony">
            <li class="slide">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </li>
            <li class="slide">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </li>
            <li class="slide">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main_section">
      <div class="inner_banner" style="position:relative">
        <ul class="top clearfix">
          <li>
            <h4>Business Cards (Single-sided)</h4>
          </li>
          <li class="last"><a href="#" class="upload">Upload your Design</a></li>
        </ul>
        <ul class="product_specs">
        <li><a href="price.html" class="modalDialog">Price</a></li>
        <li><a href="product_specs.html" class="modal_prd_specs"> Product Specs</a></li>
        <li><a href="artwork_specs.html" class="modal_art_specs">Artwork Specs</a></li>
        </ul>
        <img src="images/inner/vc_banner.png" />
        <div class="upload_order">
          <h5>BUSINESS CARDS SINGLE-SIDED</h5>
          <p>Supported formats(.PDF, .AI, .PSD, .CDR, .INDD, .TIFF)</p>
          <label>Upload</label>
          <input type="file" />
          <br />
          <div class="button_wrapper action_button"><a href="#" class="orange_normal">Upload </a> <a href="#" class="white_default cancel_track">Cancel </a> </div>
          <div style="margin:20px 10px 10px"> <img src="images/atrwork_icons.png" /><br />
            <a href="#" >Download artwork specification template</a></div>
        </div>
      </div>
      <div class="template_wrapper clearfix">
        <div class="template_wrapper_header clearfix">
          <h3 class="purple_text">Select a design and personalize</h3>
          <h3 style="float:left;margin-left:129px;font-size:13px;font-weight:bold;color:#000">Select Category : </h3>
          <ul id="productList_filter">
            <li><a href="#" class="default">All Templates</a>
              <ul>
                <li class="current"><a href="#">All Templates</a></li>
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
                <li><a href="#">Category 4</a></li>
                <li><a href="#">Category 5</a></li>
                <li><a href="#">Category 6</a></li>
                <li><a href="#">Category 7</a></li>
                <li><a href="#">Category 8</a></li>
                <li><a href="#">Category 9</a></li>
                <li><a href="#">Category 10</a></li>
                <li><a href="#">Category 11</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="product_listing_wrapper">
        <ul class="product_listing">
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0000_BCDDR101.jpg" /></a>  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0001_BCDDR100.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0002_BCDDR010.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0003_BCDDR009.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0004_BCDDR003.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0005_BCDDR002.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0006_BCDCN100.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0007_BCDAC013.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0008_BCDAC012.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0009_BCDAC011.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0010_BCDAC009.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0011_BCDAC006.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0012_BCDAC003.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0013_BCDRE013.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0014_BCDRE012.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0015_BCDRE009.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0016_BCDRE005.jpg" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0017_BCDRE004" />  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0018_BCDGN502.jpg" />  </a></a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
          <li><a href="confirm_order.html"><img src="images/product_inner/vc/product_0019_BCDGN501.jpg" /></a>  </a><a href="images/product_inner/vc/preview/product_0000_BCDDR101.jpg" class="preview">Preview</a></li>
        </ul>
        </div>
      </div>
      <div class="pagination clearfix">
        <ul>
          <li><a href="#">&laquo; Previous</a></li>
          <li><a href="#" class="current">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">Next &raquo;</a></li>
        </ul>
      </div>
      <div class="product_wrapper">
        <div class="clearfix product_list">
          <h3 class="purple_text">Most Popular Products </h3>
          <a href="#" class="previous"><img src="images/previous.gif"  alt="Previous"></a>
          <div class="product_scroll" >
            <ul>
              <li> <img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span><a href="#"><img src="images/buy_now.png" /></a></li>
              <li><img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="images/buy_now.png" /></a></li>
              <li> <img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="images/buy_now.png" /></a></li>
              <li> <img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="images/buy_now.png" /></a></li>
              <li> <img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="images/buy_now.png" /></a></li>
              <li> <img src="images/vc_bg.png" /> <span>Business Cards (Single-sided)</span><span class="price">Rs. 275 for 200</span> <a href="#"><img src="images/buy_now.png" /></a></li>
            </ul>
          </div>
          <a href="#" class="next"><img src="images/next.gif"  alt="Next"></a> </div>
      </div>
    </div>
  </section>
<!-- preview Popup -->
<div class="jqmWindow" style="width: 521px;display:none" id="preview_popup">
  <div class="modal-wrapper">
    <div class="modal_titlebox">Preview</div>
    <a href="#" class="jqmClose">Close</a>
    <div class="modal-content">
     <img id="preview_img" src="images/ajaxLoader.gif" style="border:1px solid #b5b5b5" />
    </div>
    <div class="modal-footbox">
      <div class="modal-actions">
        <div class="btnbox"><a href="#" class="btn btn-success">Personalize</a></div>
        <div class="btnbox"><a href="#" class="btn next_image">Next</a></div>
        <div class="btnbox"><a href="#" class="btn " onclick="$('#preview_popup').jqmHide()">Close</a></div>
      </div>
    </div>
  </div>
</div>
<div id="external_price" class="jqmWindow"></div>
<div id="external_product" class="jqmWindow"></div>
<div id="external_artwork" class="jqmWindow"></div>
<%@include file="/WEB-INF/views/footer.jsp" %>
</body>
</html>