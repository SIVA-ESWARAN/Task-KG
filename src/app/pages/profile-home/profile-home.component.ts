import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

interface patients {
  name: string,
  contact: number,
  appointment: string,
  waited: string,
  age: string,
  image: string,
  status: string
}

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {
  patients: patients[] = [];

  breadCrumpList = [
    {name: "Home", route: '/profile-home'}
  ]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAppointments();
  }


  getAppointments() {
    this.dataService.sendGetRequest( 'appointments').subscribe((res: any) => {
      this.patients = res;
      console.log("result",this.patients);
    })
  }
  
  drop(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.patients, event.previousIndex, event.currentIndex);
  }

  showNewBadge(index: number): boolean {
    if(index === 0) {
      return true;
    } else {
      return false
    }
  }

}
