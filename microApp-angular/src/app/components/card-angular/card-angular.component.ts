import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-card-angular',
  templateUrl: './card-angular.component.html',
  styleUrls: ['./card-angular.component.scss'],
})
export class CardAngularComponent {
  angularUrl = assetUrl("angular.png");
}
