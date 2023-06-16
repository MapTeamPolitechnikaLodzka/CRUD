import { Component, OnInit } from '@angular/core';
import { Building } from '../building'
import { BuildingService } from '../building.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  buildings: Building[];

  constructor(private buildingService: BuildingService,
              private router: Router) { }

  ngOnInit(): void {
    this.getBuildings();
  }

  private getBuildings(){
    this.buildingService.getBuildingsList().subscribe(data => {
      this.buildings = data;
    });
  }

  buildingDetails(id: number){
    this.router.navigate(['building-details', id]);
  }

  updateBuilding(id: number){
    this.router.navigate(['update-building', id]);
  }

  deleteBuilding(id: number){
    this.buildingService.deleteBuilding(id).subscribe( data => {
      console.log(data);
      this.getBuildings();
    })
  }
}
