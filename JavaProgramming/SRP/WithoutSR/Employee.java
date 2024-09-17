package JavaProgramming.SRP.WithoutSR;

import java.util.Random;

public class Employee {
    public String fName, lName, empId;
    public double experienceInYears;

    public Employee(String fName,String lName, double  experienceInYears)
    {
        this.fName=fName;
        this.lName=lName;
        this.experienceInYears=experienceInYears;
    }
    public void displayEmpDetail()
    {
        System.out.println("The employee name: " +fName+","+lName);
        System.out.println("This employee has " + experienceInYears +" years of experience.");
    }
    public String checkSeniority(double experienceInYears)
    {
        return  experienceInYears>5?"Senior":"junior";
    }
    public String generateEmpId(String empFisrtName)
    {
        int random = new Random().nextInt(1000);
        empId = empFisrtName.substring(0,1)+random;
        return empId;
    }
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
