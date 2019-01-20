package api.entity;


import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

//@Entity
//@Table(name = "contact")
public class Contact {

    public Contact(Long id, String name, String email, String phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    @Id
    @Setter
    @Getter
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Setter
    @Getter
    private String name;

    @Column
    @Setter
    @Getter
    private String email;

    @Column
    @Setter
    @Getter
    private String phone;

}
