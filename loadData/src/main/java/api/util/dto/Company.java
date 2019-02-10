package api.util.dto;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import lombok.Data;

@Data
public class Company {

    @SerializedName("name")
    @Expose
    public String name;
    @SerializedName("catchPhrase")
    @Expose
    public String catchPhrase;
    @SerializedName("bs")
    @Expose
    public String bs;

}