package JavaProgramming.OCP.WithOCP;

public class Student {
    String name;
    String regName;
    String department;
    double score;

    public Student(String name, String regName, double score, String dept)
    {
        this.name=name;
        this.regName=regName;
        this.score=score;
        this.department=dept;
    }

    @Override
    public String toString() {
        return "Student [name=" + name + ", regName=" + regName + ", department=" + department + ", score=" + score
                + "]";
    }
    
}
