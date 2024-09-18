package JavaProgramming.LSP.WithoutLSP.PaymentInterface;
import java.util.ArrayList;
import java.util.List;

public class PaymentHelper {
    List<Payment> payments = new ArrayList<Payment>();

    public void addUser(Payment payment)
    {
        payments.add(payment);
    }

    public void showPreviousPayments()
    {
        for(Payment payment:payments)
        {
            payment.previousPaymentInfo();
            System.out.println("------");
            
        }
    }

    public void processNewPayments()
    {
        for(Payment payment:payments)
        {
            payment.newPayment();
            System.out.println("------");
        }
    }
}
