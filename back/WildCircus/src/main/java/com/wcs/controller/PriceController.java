package com.wcs.controller;

import com.wcs.repositories.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin

public class PriceController {
    @Autowired
    private PriceRepository priceRepository;

    public postJambon(@RequestBody Jambon monjambon){
        this.priceRepository.save( monjambon)
    }
}
