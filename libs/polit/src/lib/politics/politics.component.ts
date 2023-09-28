import { Component } from '@angular/core';
import { LolService } from '@mptool/shared/auth';

@Component({
  selector: 'mptool-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss'],
})
export class PoliticsComponent {
  constructor(public lol: LolService) {}
}
