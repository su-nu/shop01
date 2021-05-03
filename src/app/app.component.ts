import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from './item/item';
import { ItemService } from './item/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  public item: Item;
  ngOnInit() {
    this.getItem();
  }
  constructor(private itemService: ItemService) {}

  public getItem(): void {
    this.itemService.getItem().subscribe(
      (response: Item) => {
        this.item = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
