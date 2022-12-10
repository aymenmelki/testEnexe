package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Agent;
import com.example.demo.interfaces.IAgentService;
import com.example.demo.repositories.AgentRepository;

@Service
public class AgentService implements IAgentService{

	@Autowired
	private AgentRepository agentRepository;

	@Override
	public List<Agent> getAllAgent() {
		// TODO Auto-generated method stub
		return agentRepository.findAll();
	}

	@Override
	public void saveAgent(Agent agent) {
		// TODO Auto-generated method stub
		agentRepository.save(agent);
	}

	@Override
	public void removeAgentById(String userId) {
		// TODO Auto-generated method stub
		Agent agent = getAgentById(userId);
		agentRepository.delete(agent);
	}

	@Override
	public void updateAgentById(Agent agent) {
		// TODO Auto-generated method stub
		agentRepository.save(agent);
		
	}

	@Override
	public Agent getAgentById(String userId) {
		// TODO Auto-generated method stub
		return agentRepository.getById(userId);
	}

}
