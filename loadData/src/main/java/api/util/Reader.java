package api.util;

import api.entity.Contact;
import api.util.dto.Contacts;
import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;

import java.io.*;
import java.util.List;

public class Reader {
    private static Reader ourInstance = new Reader();

    public static Reader getInstance() {
        return ourInstance;
    }

    private Reader() {
    }

    public Contacts getContact(String file) throws FileNotFoundException {

            Contacts contacts = new Gson().fromJson(new FileReader(file), Contacts.class);
            return contacts;
    }
}
