import { Component } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss'],
})
export class User2Component {
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}
