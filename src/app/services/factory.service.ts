import { Injectable } from '@angular/core';
import * as groups from './character.models';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor() { }

  getFighterGroups() {
    return { ...groups };
  }
}
