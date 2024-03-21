package com.chanvitha.springbootTestProject_2.service;

import com.chanvitha.springbootTestProject_2.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;


public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student updateStudent(Student student);
    public void deleteStudent(int id);

}
