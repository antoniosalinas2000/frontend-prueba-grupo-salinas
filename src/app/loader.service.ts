import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private mostrarLoaderSubject = new BehaviorSubject<boolean>(false);

  // Observable al que los componentes pueden suscribirse
  mostrarLoader$ = this.mostrarLoaderSubject.asObservable();

  constructor() { }

  mostrarLoader(redirectCallback?: () => void) {
    this.mostrarLoaderSubject.next(true);
    if (redirectCallback) {
      setTimeout(() => {
        redirectCallback();
      }, 1000); // Ajusta el tiempo según sea necesario
    }
  }

  ocultarLoader(redirectCallback?: () => void) {
    if (redirectCallback) {
      setTimeout(() => {
        redirectCallback();
        this.mostrarLoaderSubject.next(false);
      }, 1000); // Ajusta el tiempo según sea necesario
    }
  }
}
