package com.chanvitha.springbootTestProject_2.controller;

import com.chanvitha.springbootTestProject_2.model.Student;
import com.chanvitha.springbootTestProject_2.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New Student added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/getbyid/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PutMapping("/update/{id}")
    public String updateStudent(@RequestBody Student student, @PathVariable int id) {
        if(id != 0){
            studentService.updateStudent(student, id);
            return "Student updated";
        }
        else{
            return "Student not found";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id) {
        if(id != 0){
            studentService.deleteStudent(id);
            return "Student deleted";
        }
        else{
            return "Student not found";
        }
    }

}
