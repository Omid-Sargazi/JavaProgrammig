package JavaProgramming.SRP.WithSRP;

public class Client {
    public static void main(String[] args) {
        System.out.println("*** A demo that follows the SRP.***");
        Employee robin = new Employee("Robin", "Smith", 7.5);   
        showEmpDetail(robin);
        System.out.println("\n*******\n");
        Employee kevin = new Employee("Kevin", "Proctor", 3.2);
        showEmpDetail(kevin);
    }

    private  static  void showEmpDetail(Employee emp)
    {
        emp.displayEmpDetail();
        EmployeeIdGenerator id = new EmployeeIdGenerator();
        String empId = id.generateEmpId(emp.fName);
        System.out.println("The employee id: " + empId);
        SeniorityChecker seniorityChecker = new SeniorityChecker();
        System.out.println("This employee is a " + seniorityChecker.checkSeniority(emp.experienceInYears) + " employee.");
    }
}
