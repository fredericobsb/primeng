import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visibleSidebar1:any;
    
  visibleSidebar2:any;
  
  visibleSidebar3:any;
  
  visibleSidebar4:any;
  
  visibleSidebar5:any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
