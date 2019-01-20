package api.controller;

import api.entity.Contact;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author Febrity
 */
@RestController
public class ContactController {

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    List<Contact> home() {

        return Stream.of(new Contact(1L, "FirstTest", "FirstTestEmail", "FirstTestPhone")).collect(Collectors.toList());
    }

}



