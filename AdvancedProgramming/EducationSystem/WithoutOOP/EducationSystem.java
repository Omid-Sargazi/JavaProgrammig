package  AdvancedProgramming.EducationSystem.WithoutOOP;

import java.util.ArrayList;

public class EducationSystem {

    static  ArrayList<String> students = new ArrayList<>();
    static  ArrayList<String> courses = new ArrayList<>();
    static  ArrayList<Integer> grades = new ArrayList<>();

     public static void main(String[] args) {
        System.out.println("hello");

        addStudent("John Doe");
        addStudent("omid Sa");

        addCourse("Math");
        addCourse("Pro");

        assignGrade(0, 0, 85);
        assignGrade(1, 1, 90);
        printStudent(0);

     }

     public static void addStudent(String name)
     {
        students.add(name);
     }

     public static void addCourse(String course)
     {
        courses.add(course);
     }

     public static void assignGrade(int studentIndex, int courseIndex, int grade)
     {
        grades.add(grade);
     }

     public static void printStudent(int index)
     {
        System.out.println("Student: " + students.get(index));
        System.out.println("Course: " + courses.get(index));
        System.out.println("Grades: " + grades.get(index));
     }
}