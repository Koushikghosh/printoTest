package com.printo.dao;

import java.util.List;

import com.printo.model.State;

/**
 * @author soft-koushik
 *
 */
public interface StateDAO {

	public void addState(State state);
	public List<State> listState();
	public void removeState(Integer id); 
}
