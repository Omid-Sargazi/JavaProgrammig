package JavaProgramming.LSP.WithoutLSP.PaymentInterface;

public class Client {
    public static void main(String[] args) {
        System.out.println("***A demo without LSP.***\n");
        PaymentHelper helper = new PaymentHelper();
            RegisteredUserPayment omidPayment= new RegisteredUserPayment("Omid");
            RegisteredUserPayment SaeedPayment = new RegisteredUserPayment("Saeed");    
            helper.addUser(omidPayment);
            helper.addUser(SaeedPayment);
            helper.showPreviousPayments();
            helper.processNewPayments();
    }
}
