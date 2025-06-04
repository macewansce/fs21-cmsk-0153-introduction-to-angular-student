import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemsService,  } from '../../core/services/items.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Item } from '../../core/models/item.model';

@Component({
  selector: 'app-manage-item',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css',
})
export class ManageItemComponent implements OnInit {
  items: Item[] = [];

  constructor(private todosService: ItemsService) {}

  ngOnInit(): void {
    // placeholder
  }

  
}
