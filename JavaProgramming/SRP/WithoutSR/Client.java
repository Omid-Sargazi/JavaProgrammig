package JavaProgramming.SRP.WithoutSR;

public class Client {
    public static void main(String[] args) {
        System.out.println("*** A demo without SRP.***");
        Employee Omid = new Employee("Omid", "Sargazi", 3);
        System.out.println("\n*******\n");
        Employee Saeed = new Employee("Saeed", "Sar", 10);

    }

    private  static  void showEmpDetail(Employee emp)
    {
        emp.displayEmpDetail();
        System.out.println("The employee id: "+ emp.generateEmpId(emp.fName));
        System.out.println("This employee is a " + emp.checkSeniority(emp.experienceInYears)+ " employee.");
    }
}
