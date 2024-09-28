package JavaProgramming.ReverseString;

public class PalindromeCheck {
    public static boolean isPalindrome(String str)
    {
        if(str==null) return  false;
        int left =0,right=str.length()-1;
        while (left<right) {
            if(str.charAt(left) !=str.charAt(right))
            return false;
            left++;
            right--;
        }
        return true;

    }

    public static void main(String[] args) {
        String word1="radar";
        String word2="hello";

        System.out.println(word1 + " is palindrome: " + isPalindrome(word1));
        System.out.println(word2 + " is palindrome: " + isPalindrome(word2));
    }
}
