package com.example.demo.interfaces;

import java.util.List;

import com.example.demo.entities.Agent;

public interface IAgentService {

	public List<Agent> getAllAgent();

	public void saveAgent(Agent agent);

	public void removeAgentById(String userId);

	public void updateAgentById(Agent agent);

	public Agent getAgentById(String userId);
}
