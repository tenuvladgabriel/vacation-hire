import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {IVehicle} from "../../../dtos/vehicle";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  data: Observable<IVehicle[]> | undefined;
  createUrl = 'vehicles/create';
  displayedColumns: string[] = ['name', 'color', 'numberOfMiles', 'price', 'availabilityStatus', 'bodyType', 'brandType', 'fuelType'];

  constructor(private router: Router,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.data = this.vehicleService.getList();
  }


  async goToVehicleEditUrlAsync(vehicle: IVehicle) {
    await this.router.navigate([`vehicles/edit/${btoa(vehicle.name)}/${vehicle.id}`]);
  }

}
