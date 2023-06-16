package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Building;
import net.javaguides.springboot.repository.BuildingRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class BuildingController {

    @Autowired
    private BuildingRepository buildingRepository;

    // get all buildings
    @GetMapping("/buildings")
    public List<Building> getAllBuildings(){
        return buildingRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/buildings")
    public Building createBuilding(@RequestBody Building building) {
        return buildingRepository.save(building);
    }

    // get employee by id rest api
    @GetMapping("/buildings/{id}")
    public ResponseEntity<Building> getBuildingById(@PathVariable Long id) {
        Building building = buildingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Building not exist with id :" + id));
        return ResponseEntity.ok(building);
    }

    // update employee rest api

    @PutMapping("/buildings/{id}")
    public ResponseEntity<Building> updateBuilding(@PathVariable Long id, @RequestBody Building buildingDetails){
        Building building = buildingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Building not exist with id :" + id));

        building.setShortName(buildingDetails.getShortName());
        building.setName(buildingDetails.getName());
        building.setSimpleName(buildingDetails.getSimpleName());
        building.setAliases(buildingDetails.getAliases());
        building.setColor(buildingDetails.getColor());

        Building updatedBuilding = buildingRepository.save(building);
        return ResponseEntity.ok(updatedBuilding);
    }

    // delete employee rest api
    @DeleteMapping("/buildings/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBuilding(@PathVariable Long id){
        Building building = buildingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("building not exist with id :" + id));

        buildingRepository.delete(building);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
