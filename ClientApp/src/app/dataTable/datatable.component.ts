import { Component, HostListener, OnInit, Input } from '@angular/core';
//import { forEach } from '@angular/router/src/utils/collection';
import { DataTableSetting } from '../NewFolder/DataTableSetting';
import { settings } from 'cluster';
//import { AdministratorService } from "../administrator/administrator.service"

@Component({
  selector: 'farid-data-table',
  templateUrl: './datatable.component.html',
})
export class DataTableComponent implements OnInit {

  @Input() DataSource: any[];
  @Input() Setting: DataTableSetting;
  @Input() Test: string = "farid";
  public Pages = new Array();

  ngOnInit(): void {

    //debugger;
    //let b = this.Test;
    if (this.DataSource && this.DataSource.length > 0) {
      let numberOfPages = Math.round(this.Setting.TotalDataPayloadCount / this.Setting.PageSize) === 0 ? 1 : Math.round(this.Setting.TotalDataPayloadCount / this.Setting.PageSize);
      for (let i = 1; i <= numberOfPages; i++)
        this.Pages.push(i);
    }
  }

  public clicked(val: any) {
    alert(val);
  }
  @HostListener('click', ['$event.target'])
  onclick(target) {
    debugger;
    if (target.parentElement.parentElement.localName === 'thead' && target.attributes.sortable) {
      console.log('clicked on:', target);
      alert(target);
    }
  }
}
