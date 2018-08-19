import { Component } from '@angular/core';
import { settings } from 'cluster';
import { DataTableSetting } from '../NewFolder/DataTableSetting';
//import { AdministratorService } from "../administrator/administrator.service"

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
})
export class AdministratorComponent {
  public Records: any = [
    { name: "Farid", lastName: "Kazemi", age: 33 },
    { name: "avff", lastName: "xdfef", age: 34 },
    { name: "bhayt", lastName: "afaf", age: 22 },
    { name: "trayra", lastName: "erer", age: 28 },
    { name: "juyu", lastName: "afd", age: 20 },
    { name: "Farid", lastName: "Kazemi", age: 33 },
    { name: "avff", lastName: "xdfef", age: 34 },
    { name: "bhayt", lastName: "afaf", age: 22 },
    { name: "trayra", lastName: "erer", age: 28 },
    { name: "juyu", lastName: "afd", age: 20 },
    { name: "Farid", lastName: "Kazemi", age: 33 },
    { name: "avff", lastName: "xdfef", age: 34 },
    { name: "bhayt", lastName: "afaf", age: 22 },
    { name: "trayra", lastName: "erer", age: 28 },
    { name: "juyu", lastName: "afd", age: 20 }
  ];
  public MyTest = "FARFARFARFAR";
  public TableSettings: DataTableSetting = { PageSize: 5, TotalDataPayloadCount: 100 };
  public print(word: any) {
    console.log(this.Records);
    alert(word + " Printed");

  }
  //public admData: Array<any>;
  //public currentJogging: any;

  //constructor(private administratorService: AdministratorService) {
  //  administratorService.get().subscribe((data: any) => this.admData = data);
  //}
}
