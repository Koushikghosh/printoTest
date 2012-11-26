package com.printo.web;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.printo.model.State;
import com.printo.services.StateService;

/**
 * @author soft-koushik
 *
 */

@Controller
public class TestController {

	@Autowired
	private StateService stateService;
	
	@RequestMapping("/test")
	public String listState(Map<String, Object> map) {
		 
        map.put("state", new State());
        map.put("stateList", stateService.listState());
 
        return "state";
    }
	
	
}
