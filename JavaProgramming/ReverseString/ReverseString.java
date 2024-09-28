package JavaProgramming.ReverseString;


public  class ReverseString
{
    public static void main(String[] args) {
        String str = "Hello World";
        String reversed = reverseString(str);
        System.out.println("Reversed String :" + reversed);
    }

    private static String reverseString(String str)
    {
        StringBuilder sb= new StringBuilder(str);
        return sb.reverse().toString();
    }
}