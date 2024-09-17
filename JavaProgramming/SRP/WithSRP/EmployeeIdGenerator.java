package JavaProgramming.SRP.WithSRP;
import java.util.Random;

public class EmployeeIdGenerator {
    String empId;

    public String generateEmpId(String empfName)
    {
        int random=new Random().nextInt(1000);
        empId = empfName.substring(0,1)+random;
        return empId;
    }
}
