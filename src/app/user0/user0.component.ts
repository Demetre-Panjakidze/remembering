import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user0',
  templateUrl: './user0.component.html',
  styleUrls: ['./user0.component.scss'],
})
export class User0Component implements OnInit {
  loading: boolean = true;
  empty: string = '';
  ngOnInit() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}
