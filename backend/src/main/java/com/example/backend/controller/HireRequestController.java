package com.example.backend.controller;

import com.example.backend.model.HireRequest;
import com.example.backend.service.HireRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HireRequestController {

    @Autowired
    private HireRequestService hireRequestService;

    @PostMapping("/hire")
    public ResponseEntity<?> submitHireRequest(@RequestBody HireRequest hireRequest) {
        HireRequest savedHireRequest = hireRequestService.saveHireRequest(hireRequest);
        return ResponseEntity.ok(savedHireRequest);
    }
}