package JavaProgramming.LSP.WithLSP;

public class RegisteredUserPayment implements NewPayment, PreviousPayment {
    String userName;
    public RegisteredUserPayment(String name)
    {
        this.userName=name;
    }

    @Override
    public void previousPaymentInfo()
    {
        System.out.println("Retrieving "+ userName+"'s last payment details.");
    }

    @Override
    public  void newPayment()
    {
        System.out.println("Processing "+userName+"'s current payment request.");
    }
}
