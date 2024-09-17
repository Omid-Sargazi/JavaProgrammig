package JavaProgramming.SRP.WithSRP;

public class Employee {
    public String fName,lName,empId;
    public double experienceInYears;

    public Employee(String fName,String lName, double experience)
    {
        this.fName=fName;
        this.lName=lName;
        this.experienceInYears=experience;
    }

    public void displayEmpDetail()
    {
        System.out.println("The employee name: "+lName+","+fName);
        System.out.println("This employee has "+ experienceInYears+" years of experience.");
    }
}
