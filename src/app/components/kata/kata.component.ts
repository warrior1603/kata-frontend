import { Component } from '@angular/core';
import { KataService } from '../../services/kata.service';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html'
})
export class KataComponent {
  number!: number;
  result!: string;

  constructor(private kataService: KataService) { }

  onSubmit() {
    if (this.number !== null) {
      this.kataService.transformNumber(this.number).subscribe(response => {
        this.result = response;
      });
    }
  }
}