package api.util;

import api.entity.Contact;
import org.hibernate.Session;

import javax.swing.*;
import java.sql.SQLException;
import java.util.List;

public class ContactDAO {

    public void addContact(Contact contact) throws SQLException {
        Session session = null;
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            session.save(contact);
            session.getTransaction().commit();

        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null,
                    ex.getMessage(),
                    "Ошибка при сохранении данныхъ",
                    JOptionPane.OK_OPTION);
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

    public void addContacts(List<Contact> contactLisl) throws SQLException {
        Session session = null;
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            for(Contact contact: contactLisl){
                session.save(contact);
            }

            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) session.close();
        }
    }

}
