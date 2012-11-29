package com.printo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author soft-koushik
 *
 */
@Entity
@Table
public class Products{

	@Id
	@Column
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String productCaption;
	
	@Column
	private String productBanner;
	
	@Column
	private String name_alias;
	
	@Column
	private String product_bg_image;
	
	@Column 
	private String productMaskImage;
	
	@Column 
	private String code;
	
	@Column
	private String orientation;
	
	@Column
	private String imag;
	
	@Column
	private String bannerContent;
	
	@Column
	private int previewWidth;
	
	@Column 
	private int numberOfCanvas;
	
	@Column
	private double default_w;
	
	@Column
	private double default_h;
	
	@Column
	private int default_sides;
	
	@Column 
	private String type;
	
	@Column
	private String landingPage;
	
	@Column
	private String status;
	
	@Column
	private String price_text_disclaimer;
	
	@Column
	private String product_spec;
	
	@Column
	private String product_artwork;
	
	@Column
	private String pageTitle;
	
	@Column
	private String pageMetatag;
	
	@Column
	private String pik_x;
	
	@Column
	private String pik_y;
	
	@Column
	private String form_width;
	
	@Column
	private String pik_width;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductCaption() {
		return productCaption;
	}

	public void setProductCaption(String productCaption) {
		this.productCaption = productCaption;
	}

	public String getProductBanner() {
		return productBanner;
	}

	public void setProductBanner(String productBanner) {
		this.productBanner = productBanner;
	}

	public String getName_alias() {
		return name_alias;
	}

	public void setName_alias(String name_alias) {
		this.name_alias = name_alias;
	}

	public String getProduct_bg_image() {
		return product_bg_image;
	}

	public void setProduct_bg_image(String product_bg_image) {
		this.product_bg_image = product_bg_image;
	}

	public String getProductMaskImage() {
		return productMaskImage;
	}

	public void setProductMaskImage(String productMaskImage) {
		this.productMaskImage = productMaskImage;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getOrientation() {
		return orientation;
	}

	public void setOrientation(String orientation) {
		this.orientation = orientation;
	}

	public String getImag() {
		return imag;
	}

	public void setImag(String imag) {
		this.imag = imag;
	}

	public String getBannerContent() {
		return bannerContent;
	}

	public void setBannerContent(String bannerContent) {
		this.bannerContent = bannerContent;
	}

	public int getPreviewWidth() {
		return previewWidth;
	}

	public void setPreviewWidth(int previewWidth) {
		this.previewWidth = previewWidth;
	}

	public int getNumberOfCanvas() {
		return numberOfCanvas;
	}

	public void setNumberOfCanvas(int numberOfCanvas) {
		this.numberOfCanvas = numberOfCanvas;
	}

	public double getDefault_w() {
		return default_w;
	}

	public void setDefault_w(double default_w) {
		this.default_w = default_w;
	}

	public double getDefault_h() {
		return default_h;
	}

	public void setDefault_h(double default_h) {
		this.default_h = default_h;
	}

	public int getDefault_sides() {
		return default_sides;
	}

	public void setDefault_sides(int default_sides) {
		this.default_sides = default_sides;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getLandingPage() {
		return landingPage;
	}

	public void setLandingPage(String landingPage) {
		this.landingPage = landingPage;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPrice_text_disclaimer() {
		return price_text_disclaimer;
	}

	public void setPrice_text_disclaimer(String price_text_disclaimer) {
		this.price_text_disclaimer = price_text_disclaimer;
	}

	public String getProduct_spec() {
		return product_spec;
	}

	public void setProduct_spec(String product_spec) {
		this.product_spec = product_spec;
	}

	public String getProduct_artwork() {
		return product_artwork;
	}

	public void setProduct_artwork(String product_artwork) {
		this.product_artwork = product_artwork;
	}

	public String getPageTitle() {
		return pageTitle;
	}

	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}

	public String getPageMetatag() {
		return pageMetatag;
	}

	public void setPageMetatag(String pageMetatag) {
		this.pageMetatag = pageMetatag;
	}

	public String getPik_x() {
		return pik_x;
	}

	public void setPik_x(String pik_x) {
		this.pik_x = pik_x;
	}

	public String getPik_y() {
		return pik_y;
	}

	public void setPik_y(String pik_y) {
		this.pik_y = pik_y;
	}

	public String getForm_width() {
		return form_width;
	}

	public void setForm_width(String form_width) {
		this.form_width = form_width;
	}

	public String getPik_width() {
		return pik_width;
	}

	public void setPik_width(String pik_width) {
		this.pik_width = pik_width;
	}
	
	
	
}
