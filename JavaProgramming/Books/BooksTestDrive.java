package JavaProgramming.Books;

public class BooksTestDrive {
    public static void main(String[] args) {
        Books[] mybooks=new Books[3];
        mybooks[0] = new Books();
        mybooks[1] = new Books();
        mybooks[2] = new Books();
        int x=0;
        mybooks[0].title="The Grapes of Java";
        mybooks[1].title="The Java Gatsby";
        mybooks[2].title="The Java Cookbook";

        mybooks[0].author="saeed";
        mybooks[1].author="vahid";
        mybooks[2].author="omid";

        while(x<3)
        {
            System.err.print(mybooks[x].title+"");
            System.err.print("By");
            System.err.println(mybooks[x].author);
            x++;
        }
    }
}
