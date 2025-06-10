import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Device } from '../../core/models/device.model';
import { DevicesService } from '../../core/services/devices.service';

@Component({
  selector: 'app-manage-devices',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-devices.component.html',
  styleUrl: './manage-devices.component.css',
})
export class ManageDevicesComponent implements OnInit {
  devices: Device[] = [];

  constructor(private todosService: DevicesService) {}

  ngOnInit(): void {
    // placeholder
  }

  
}
