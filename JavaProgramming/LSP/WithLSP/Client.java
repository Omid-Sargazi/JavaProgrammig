package JavaProgramming.LSP.WithLSP;

public class Client {
    public static void main(String[] args) {
        
        System.out.println("***A demo that follows the LSP.***\n");
        PaymentHelper helper = new PaymentHelper();
        RegisteredUserPayment omid = new RegisteredUserPayment("Omid");
        RegisteredUserPayment saeed = new RegisteredUserPayment("Saeed");

        GuestUserPayment g1 = new GuestUserPayment();
        helper.addNewPayment(saeed);
        helper.addNewPayment(omid);
        helper.addNewPayment(g1);
        helper.addNewPayment(saeed);
        helper.addNewPayment(omid);
        helper.showPreviousPayments();
        helper.processNewPayments();

    }

    
}
