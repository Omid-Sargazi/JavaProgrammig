package JavaProgramming.Hobbits;

public class Main {
    public static void main(String[] args) {
        Hobbits[] h=new Hobbits[3];
        int z=0;
       while(z<3)
       {
        h[z]=new Hobbits();
        h[z].name="Omid";
        if(z==1)
        {
            h[z].name="saeed";
        }
        if(z==2)
        {
            h[z].name="Mika";
        }
        z++;

       }


    }
}
