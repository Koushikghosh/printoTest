package com.printo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.printo.dao.ContactDAO;
import com.printo.model.Contact;

@Service
@Transactional
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactDAO contactDAO;
	
	@Required
	public void addContact(Contact contact) {
		contactDAO.addContact(contact);
	}

	@Required
	public List<Contact> listContact() {

		return contactDAO.listContact();
	}

	@Required
	public void removeContact(Integer id) {
		contactDAO.removeContact(id);
	}
}
