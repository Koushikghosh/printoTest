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
public class State {

	
	
	@Id
	@Column
	private int state_id;
	
	private String state_name;
	
	private String vat_name;
	
	private double vat_percentage;
	
	private String st_name;
	
	private double st_percentage;

	public int getState_id() {
		return state_id;
	}

	public void setState_id(int state_id) {
		this.state_id = state_id;
	}

	public String getState_name() {
		return state_name;
	}

	public void setState_name(String state_name) {
		this.state_name = state_name;
	}

	public String getVat_name() {
		return vat_name;
	}

	public void setVat_name(String vat_name) {
		this.vat_name = vat_name;
	}

	public double getVat_percentage() {
		return vat_percentage;
	}

	public void setVat_percentage(double vat_percentage) {
		this.vat_percentage = vat_percentage;
	}

	public String getSt_name() {
		return st_name;
	}

	public void setSt_name(String st_name) {
		this.st_name = st_name;
	}

	public double getSt_percentage() {
		return st_percentage;
	}

	public void setSt_percentage(double st_percentage) {
		this.st_percentage = st_percentage;
	}
	
	
	
}
