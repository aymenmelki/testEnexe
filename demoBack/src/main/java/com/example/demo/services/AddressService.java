package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Address;
import com.example.demo.entities.Agent;
import com.example.demo.interfaces.IAddressService;
import com.example.demo.repositories.AddressRepository;

@Service
public class AddressService implements IAddressService{
	
	@Autowired
private  AddressRepository repository;
	@Override
	public List<Address> getAllAddress() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Address saveAddress(Address address) {
		// TODO Auto-generated method stub
		return repository.save(address);
	}

	@Override
	public void removeAddressById(Address address) {
		// TODO Auto-generated method stub
		repository.delete(address);
	}

	@Override
	public void updateAddressById(Address address) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Agent getAddressById(String addressId) {
		// TODO Auto-generated method stub
		return null;
	}

}
