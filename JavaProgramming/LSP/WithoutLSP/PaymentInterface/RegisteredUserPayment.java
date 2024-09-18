package JavaProgramming.LSP.WithoutLSP.PaymentInterface;

public class RegisteredUserPayment implements Payment {
    String name;    
    public RegisteredUserPayment(String name)
    {
        this.name=name;
    }
    @Override
    public void previousPaymentInfo() {
        // TODO Auto-generated method stub
        System.out.println("Retrieving "+ name+"'s last  payment details.");
        
    }

    
    @Override
    public void newPayment() {
        // TODO Auto-generated method stub
        System.out.println("Processing "+name+"'s current payment request.");
        
    }
}
