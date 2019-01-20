package api.entity;


import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @Setter
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
