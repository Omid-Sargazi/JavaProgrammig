package  AdvancedProgramming.EducationSystem.WithoutOOP;

import java.util.ArrayList;

public class EducationSystem {

    static  ArrayList<String> students = new ArrayList<>();
    static  ArrayList<String> courses = new ArrayList<>();
    static  ArrayList<String> grades = new ArrayList<>();

     public static void main(String[] args) {
        System.out.println("hello");

     }

     public static void addStudent(String name)
     {
        students.add(name);
     }
}