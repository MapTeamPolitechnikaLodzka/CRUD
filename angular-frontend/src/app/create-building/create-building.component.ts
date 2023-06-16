import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { BuildingService } from '../building.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-building',
  templateUrl: './create-building.component.html',
  styleUrls: ['./create-building.component.css']
})
export class CreateBuildingComponent implements OnInit {

  building: Building = new Building();
  constructor(private buildingService: BuildingService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveBuilding(){
    this.buildingService.createBuilding(this.building).subscribe( data =>{
        console.log(data);
        this.goToBuildingList();
      },
      error => console.log(error));
  }

  goToBuildingList(){
    this.router.navigate(['/buildings']);
  }

  onSubmit(){
    console.log(this.building);
    this.saveBuilding();
  }
}
