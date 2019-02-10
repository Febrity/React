package api.util.dto;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import lombok.Data;

@Data
public class Address {

    @SerializedName("street")
    @Expose
    public String street;
    @SerializedName("suite")
    @Expose
    public String suite;
    @SerializedName("city")
    @Expose
    public String city;
    @SerializedName("zipcode")
    @Expose
    public String zipcode;
    @SerializedName("geo")
    @Expose
    public Geo geo;
}
