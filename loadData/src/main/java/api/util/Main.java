package api.util;

import api.entity.Contact;
import api.util.dto.Contacts;

import java.io.FileNotFoundException;
import java.sql.SQLException;
import java.util.List;

public class Main {

    public static void main(String[] args) throws SQLException, FileNotFoundException {
        ContactDAO contactDAO = Factory.getInstance().getContactDAO();
        List<Contact> contactList = Reader.getInstance().getContact(Main.class.getResource("/contact.json").getFile()).contacts;
        contactDAO.addContacts(contactList);
    }

}
