import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss'],
})
export class User1Component implements OnInit {
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}
