import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../building.service';
import { Building } from '../building';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-building',
  templateUrl: './update-building.component.html',
  styleUrls: ['./update-building.component.css']
})
export class UpdateBuildingComponent implements OnInit {

  id: number;
  building: Building = new Building();
  constructor(private buildingService: BuildingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.buildingService.getBuildingById(this.id).subscribe(data => {
      this.building = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.buildingService.updateBuilding(this.id, this.building).subscribe( data =>{
        this.goToBuildingList();
      }
      , error => console.log(error));
  }

  goToBuildingList(){
    this.router.navigate(['/buildings']);
  }
}
