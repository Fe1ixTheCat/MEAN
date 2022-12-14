import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PositionService } from "../../shared/services/position.service";
import { Observable } from "rxjs";
import { Position } from "../../shared/interfaces";
import { switchMap, map } from "rxjs/operators";
import { OrderService } from "../order.service";
import { MaterialService } from "../../shared/classes/material.service";

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.less']
})
export class OrderPositionsComponent implements OnInit {

  positions$: Observable<any>

  constructor(private route: ActivatedRoute,
              private positionService: PositionService,
              private order: OrderService
              ) { }

  ngOnInit(): void {
    this.positions$ = this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            return this.positionService.fetch(params['id'])
          }
        ),
        map(
          (positions: Position[]) => {
            return positions.map(position => {
              position.quantity = 1;
              return position;
            })
          }
        )
      )
  }

  addToOrder(position: Position) {
    MaterialService.toast(`Добавлено х${position.quantity}`)
    this.order.add(position);
  }

}
