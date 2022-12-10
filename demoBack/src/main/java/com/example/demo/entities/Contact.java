package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6130636426682255694L;

	private Long contactId;
	private String phonePrefix;
	private Long phoneNumber;
	private String landlinePr;
	private String landlineNumber;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getContactId() {
		return contactId;
	}

	public void setContactId(Long contactId) {
		this.contactId = contactId;
	}

	public String getPhonePrefix() {
		return phonePrefix;
	}

	public void setPhonePrefix(String phonePrefix) {
		this.phonePrefix = phonePrefix;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getLandlinePr() {
		return landlinePr;
	}

	public void setLandlinePr(String landlinePr) {
		this.landlinePr = landlinePr;
	}

	public String getLandlineNumber() {
		return landlineNumber;
	}

	public void setLandlineNumber(String landlineNumber) {
		this.landlineNumber = landlineNumber;
	}

}
