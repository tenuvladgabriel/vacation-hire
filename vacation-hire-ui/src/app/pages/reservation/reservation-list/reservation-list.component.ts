import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ReservationService} from "../../../services/reservation.service";
import {IReservation} from "../../../dtos/reservation";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  data: Observable<IReservation[]> | undefined;
  createUrl = 'reservations/create';
  displayedColumns: string[] = ['rentalStartDate', 'rentalExpirationDate', 'status'];

  constructor(private router: Router,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.data = this.reservationService.getList();
  }

  async goToReservationEditUrlAsync(reservation: IReservation) {
    await this.router.navigate([`reservations/edit/${reservation.id}`]);
  }
}
