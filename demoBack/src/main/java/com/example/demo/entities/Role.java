package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.demo.enums.ROLES;

@Entity
public class Role implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4398405376313174101L;

	private Long roleId;
	private ROLES name;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public ROLES getName() {
		return name;
	}
	public void setName(ROLES name) {
		this.name = name;
	}
	
	

}
