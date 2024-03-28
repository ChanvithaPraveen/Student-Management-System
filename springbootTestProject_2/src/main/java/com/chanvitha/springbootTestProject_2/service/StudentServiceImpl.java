package com.chanvitha.springbootTestProject_2.service;

import com.chanvitha.springbootTestProject_2.model.Student;
import com.chanvitha.springbootTestProject_2.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public Student updateStudent(Student updatedStudent, int id) {
        Student existingStudent = studentRepository.findById(id).orElse(null);
        if (existingStudent != null) {
            existingStudent.setName(updatedStudent.getName());
            existingStudent.setAddress(updatedStudent.getAddress());
            // You can update other fields here if needed
            return studentRepository.save(existingStudent);
        }
        return null; // Return null if student with given id is not found
    }

    @Override
    public void deleteStudent(int id) {
        studentRepository.deleteById(id);
    }
}
