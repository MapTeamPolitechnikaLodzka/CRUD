import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { ActivatedRoute } from '@angular/router';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})
export class BuildingDetailsComponent implements OnInit {

  id: number;
  building: Building;
  constructor(private route: ActivatedRoute, private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.building = new Building();
    this.buildingService.getBuildingById(this.id).subscribe( data => {
      this.building = data;
    });
  }

}
