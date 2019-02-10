package api.repository;

import api.entity.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * @author Febrity
 */
@Repository
public interface ContactDao extends CrudRepository<Contact, Long> {

    List<Contact> findByName(String name);

    void delete(Contact contact);
}
