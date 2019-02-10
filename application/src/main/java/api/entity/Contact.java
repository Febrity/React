package api.entity;


import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Getter
    @Setter
    private String name;

    @Column
    @Getter
    @Setter
    private String email;

    @Column
    @Getter
    @Setter
    private String phone;
}
