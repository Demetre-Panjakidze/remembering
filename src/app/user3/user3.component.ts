import { Component } from '@angular/core';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.scss'],
})
export class User3Component {
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}
