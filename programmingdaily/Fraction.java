package programmingdaily;


public class Fraction {
    private int numerator;
    private  int denominator;
    public Fraction(int num, int denom)
    {
        setDenominator(denom);
        setNumerator(num);
    }

    public void setDenominator(int denom)
    {
        if(denom==0)
        {
            System.err.println("Fatal Error");
            System.exit(1);
        }
        denominator=denom;
    }

    public void setNumerator(int num)
    {
        numerator=num;
    }

    public int getDenominator()
    {
        return  denominator;
    }

    public int getNumerator()
    {
        return  numerator;
    }
    @Override
    public String toString()
    {
        return getNumerator() + "/" + getDenominator();
    }

    public Fraction simplify()
    {
        int num=getNumerator();
        int denom = getDenominator();
        int gcd = gcd(num, denom);
        Fraction simp = new Fraction(num/gcd, denom/gcd);
        return simp;
    }

    private int gcd(int num1,int num2)
    {
        if(num1>num2) return num1;
        else return num2;
    }
}
