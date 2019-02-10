package api.util.dto;
import api.entity.Contact;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import lombok.Data;

import java.util.List;

@Data
public class Contacts {

    @SerializedName("contacts")
    @Expose
    public List<Contact> contacts = null;
}
