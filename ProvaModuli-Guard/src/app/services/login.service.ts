import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  isLoggin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  accesso() {
    this.isLoggin$.next(true); // Usa il metodo next() per emettere il nuovo valore
    console.log(this.isLoggin$);
  }
}
