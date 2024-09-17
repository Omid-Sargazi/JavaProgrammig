package programmingdaily;

public class Main {
    public static void main(String[] args) {

       
        Fraction f1,f2 ;
        f1 = new  Fraction(24,36);
        f2=f1.simplify();
        System.out.println(f1.toString()+ "can be reduced to "+f2.toString());
    }
}
