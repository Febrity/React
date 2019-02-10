package api.util;

public class Factory {

    private static Factory instance = null;
    private static ContactDAO contactDAO = null;

    public static synchronized Factory getInstance(){
        if (instance == null){
            instance = new Factory();
        }
        return instance;
    }

    public ContactDAO getContactDAO() {
        if(contactDAO == null) {
            return contactDAO = new ContactDAO();
        } else return contactDAO;
    }
}


