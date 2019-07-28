import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../services/factory.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {
  fighterGroup = { test: 'test' };

  constructor(private fightersService: FactoryService) {
    console.log(this.fightersService.getFighterGroups());
  }

  ngOnInit() {
  }

}
