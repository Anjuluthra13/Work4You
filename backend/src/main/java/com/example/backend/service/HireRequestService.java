package com.example.backend.service;


import com.example.backend.model.HireRequest;
import com.example.backend.repository.HireRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HireRequestService {

    @Autowired
    private HireRequestRepository hireRequestRepository;

    public HireRequest saveHireRequest(HireRequest hireRequest) {
        return hireRequestRepository.save(hireRequest);
    }
}