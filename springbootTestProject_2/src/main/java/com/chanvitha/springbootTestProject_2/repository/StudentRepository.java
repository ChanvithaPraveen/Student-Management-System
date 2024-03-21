package com.chanvitha.springbootTestProject_2.repository;

import com.chanvitha.springbootTestProject_2.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {


}
