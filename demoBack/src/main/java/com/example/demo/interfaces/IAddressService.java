package com.example.demo.interfaces;

import java.util.List;

import com.example.demo.entities.Address;
import com.example.demo.entities.Agent;

public interface IAddressService {
	public List<Address> getAllAddress();

	public Address saveAddress(Address address);

	public void removeAddressById(Address address);

	public void updateAddressById(Address address);

	public Agent getAddressById(String addressId);

}
