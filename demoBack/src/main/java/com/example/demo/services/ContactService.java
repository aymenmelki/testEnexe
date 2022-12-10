package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Agent;
import com.example.demo.entities.Contact;
import com.example.demo.interfaces.IContactService;
import com.example.demo.repositories.AgentRepository;
import com.example.demo.repositories.ContactRepository;

@Service
public class ContactService implements IContactService {

	@Autowired
	private ContactRepository contactRepository;
	
	@Override
	public List<Contact> getAllAddress() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Contact saveContact(Contact contact) {
		// TODO Auto-generated method stub
		return contactRepository.save(contact);
	}

	@Override
	public void removeAddressById(Contact contact) {
		// TODO Auto-generated method stub
		contactRepository.delete(contact);
	}

	@Override
	public void updateAddressById(Contact contact) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Agent getAddressById(String addressId) {
		// TODO Auto-generated method stub
		return null;
	}

}
