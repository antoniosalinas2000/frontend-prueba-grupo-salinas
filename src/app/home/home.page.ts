import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { LoaderService } from '../loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private loaderService: LoaderService, private router: Router) {}

  algunaAccion() {
    this.loaderService.mostrarLoader(() => {
      setTimeout(() => {
        this.loaderService.ocultarLoader(() => {
          this.router.navigate(['/successful-redirect']); // Redirige a la nueva página
        });
      }, 10000); // Ajusta el tiempo según sea necesario
    });
  }
}

