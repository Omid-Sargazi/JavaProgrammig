package AdvancedProgramming.EducationSystem.WithOOP;

import java.util.HashMap;
import java.util.Map;

public class Student {
    private String name;
    private Map<Course, Integer> courseGrade = new HashMap<>();

    public Student(String name)
    {
        this.name=name;
    }

    public void enroll(Course course)
    {
        courseGrade.put(course,null);
    }

    public void assignGrade(Course course, int grade)
    {
        if(courseGrade.containsKey(course))
        {
            courseGrade.put(course, grade);
        }else{
            System.out.println("Student is not enrolled in this course.");
        }
    }

    public void printGrades()
    {
        System.out.println("Grades for " + name + ":");
        for (Map.Entry<Course, Integer> entry : courseGrade.entrySet()) {
            System.out.println(entry.getKey().getName() + ": " + (entry.getValue() == null ? "Not graded" : entry.getValue()));
        }
    }


}
