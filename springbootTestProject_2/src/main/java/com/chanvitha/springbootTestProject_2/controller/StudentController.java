package com.chanvitha.springbootTestProject_2.controller;

import com.chanvitha.springbootTestProject_2.model.Student;
import com.chanvitha.springbootTestProject_2.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
