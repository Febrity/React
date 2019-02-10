package api.entity;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Data
@Table(name = "contact")
public class Contact {

    @Id
    @Column(unique = true, nullable = false)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String phone;
}
