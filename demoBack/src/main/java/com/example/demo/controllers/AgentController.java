package com.example.demo.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Agent;
import com.example.demo.entities.Contact;
import com.example.demo.entities.Role;
import com.example.demo.interfaces.IAddressService;
import com.example.demo.interfaces.IAgentService;
import com.example.demo.interfaces.IContactService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/v1")
public class AgentController {

	@Autowired
	private IAgentService service;
	@Autowired
	private IAddressService addressService;

	@Autowired
	private IContactService contactService;

	@GetMapping("/agents")
	public List<Agent> getAllAgent() {
		// TODO Auto-generated method stub
		return service.getAllAgent();
	}

	@PostMapping("/agent")
	public void saveAgent(@RequestBody Agent agentBody) {
		// TODO Auto-generated method stub
		Address adress = addressService.saveAddress(agentBody.getUserAddress());
		Agent agent = new Agent();
		agent.setUserAddress(adress);

		Contact contact = contactService.saveContact(agentBody.getUserContact());
		agent.setUserContact(contact);

		agent.setCreatedAt(agentBody.getCreatedAt());

		agent.setDateOfBirth(agentBody.getDateOfBirth());
		agent.setFullname(agentBody.getFullname());
		agent.setEmail(agentBody.getEmail());
		agent.setGender(agentBody.getGender());
		agent.setUserId(agentBody.getUserId());
		agent.setUsername(agentBody.getUsername());
		service.saveAgent(agent);

		
	}

	@DeleteMapping("/removeAgent/{userId}")
	public void removeAgentById(@PathVariable String userId) {
		// TODO Auto-generated method stub
		try {
			Agent agent = service.getAgentById(userId);
			if (agent.getUserId() != null) {
				service.removeAgentById(agent.getUserId());
				addressService.removeAddressById(agent.getUserAddress());
				contactService.removeAddressById(agent.getUserContact());
			
			}
		} catch (NoSuchElementException e) {

		}
	}

	@PutMapping("/updateAgent/{userId}")
	public void updateAgentById(@RequestBody Agent agent, @PathVariable String userId) {
		// TODO Auto-generated method stub
		service.updateAgentById(agent);

	}

}
