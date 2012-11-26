package com.printo.services;

import java.util.List;

import com.printo.model.State;

/**
 * @author soft-koushik
 *
 */
public interface StateService {
	
	public void addState(State state);
    public List<State> listState();
    public void removeState(Integer id);
    
}
