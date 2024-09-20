package JavaProgramming.LSP.WithLSP;

public class GuestUserPayment implements NewPayment {
    String name;

       public GuestUserPayment()
        {
            this.name=name;
        }
    
    @Override
    public void newPayment()
    {
        System.out.println("Processing "+name+"'s current payment request.");
    }
}
