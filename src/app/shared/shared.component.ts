import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnChanges{
  @Input() rating: number=0;
  cropWidth: number =75;

  ngOnChanges(): void{
    this.cropWidth = this.rating * 75/5;
  }
}
