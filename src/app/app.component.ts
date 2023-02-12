import { AfterViewInit, OnInit, Component } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = new Observable((x) => {
      const random = Math.random();
      x.next(random);
    });

    obs$.subscribe(console.log);
    obs$.subscribe(console.log);
  }
}
