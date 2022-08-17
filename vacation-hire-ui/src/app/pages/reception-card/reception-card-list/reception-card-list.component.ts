import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {IReceptionCard} from "../../../dtos/reception-card";
import {ReceptionCardService} from "../../../services/reception-card.service";

@Component({
  selector: 'app-reception-card-list',
  templateUrl: './reception-card-list.component.html',
  styleUrls: ['./reception-card-list.component.scss']
})
export class ReceptionCardListComponent implements OnInit {

  data: Observable<IReceptionCard[]> | undefined;
  createUrl = 'reception-cards/create';
  displayedColumns: string[] = ['objectCondition', 'objectType', 'occuredAt', 'fuelLevel'];

  constructor(private router: Router,
              private receptionCardService: ReceptionCardService) {
  }

  ngOnInit(): void {
    this.data = this.receptionCardService.getList();
  }

  async goToReceptionCardEditUrlAsync(receptionCard: IReceptionCard) {
    await this.router.navigate([`reception-cards/edit/${receptionCard.id}`]);
  }

}
