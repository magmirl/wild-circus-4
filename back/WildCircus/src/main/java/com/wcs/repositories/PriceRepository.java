package com.wcs.repositories;

import com.wcs.entitie.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {
    List<Price> findByPriceContaining(String intPrice);
}
