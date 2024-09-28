package JavaProgramming.ReverseString;

public class MethodReverseString {
    private static String reverse(String str)
    {
        if(str==null) return  null;
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    public static String reverseManual(String str)
    {
        if(str==null) return  null;
        char[] chars = str.toCharArray();
        int left=0, right=chars.length-1;
        while (left<right) {
            char temp=chars[left];
            chars[left] = chars[right];
            chars[right]=temp;
            left++;
            right--;
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        String original ="Hello World";
        System.out.println( "eversed using StringBuilder:"+reverse(original)); 
        System.out.println("Reversed manually: "+ reverseManual(original)); 
    }
}
