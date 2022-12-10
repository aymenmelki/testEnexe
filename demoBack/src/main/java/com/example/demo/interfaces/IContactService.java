package com.example.demo.interfaces;

import java.util.List;

import com.example.demo.entities.Agent;
import com.example.demo.entities.Contact;

public interface IContactService {
	public List<Contact> getAllAddress();

	public Contact saveContact(Contact contact);

	public void removeAddressById(Contact contact);

	public void updateAddressById(Contact contact);

	public Agent getAddressById(String addressId);
}
