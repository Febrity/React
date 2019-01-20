package api.controller;

import api.entity.Contact;
import api.repository.ContactDao;
import lombok.extern.log4j.Log4j;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * @author Febrity
 */
@RestController
public class ContactController {

    final static Logger logger = Logger.getLogger(ContactController.class);

    private ContactDao contactDao;

    public ContactController(@Autowired ContactDao contactDao) {
        this.contactDao = contactDao;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    List<Contact> getContact() {
        List<Contact> contacts = (List<Contact>) contactDao.findAll();
        logger.debug("Method getContact" + contacts);
        return contacts;
    }

    @RequestMapping(value = "/home", method = RequestMethod.POST)
    Contact addContact(@RequestBody Contact contact) {
        Contact savedContact = contactDao.save(contact);
        logger.debug("Method addContact saved contact" + savedContact);
        return savedContact;
    }

    @RequestMapping(value = "/home/{id}", method = RequestMethod.DELETE)
    void deleteContactById(@PathVariable Long id) {
        Optional<Contact> contact = contactDao.findById(id);
        if(contact.isPresent()) {
            logger.debug("Method deleteContactById success" + contact.get());
            contactDao.deleteById(id);
        } else {
            logger.debug("Method deleteContactById failured");
        }
    }
}



