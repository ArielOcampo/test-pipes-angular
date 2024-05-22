import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public lowerName: string = 'ariel';
  public upperName: string = 'ARIEL';
  public titleName: string = 'arIeL OCampO';

  public customDate: Date = new Date();
}
