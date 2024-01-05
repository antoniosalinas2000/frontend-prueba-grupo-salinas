import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, LoaderComponent, CommonModule],
})
export class AppComponent {
  mostrarLoaderFlag = false;
  configuracion1 = [
    { image: '/assets/img/slide1.png', text: 'Texto 1' },
    { image: '/assets/img/slide2.jpg', text: 'Texto 2' },
    { image: '/assets/img/slide3.jpg', text: 'Texto 3' },
  ];

  configuracion2 = [
    { image: '/assets/img/slide1.png', text: 'Texto 1' },
    { image: '/assets/img/slide2.jpg', text: 'Texto 2' },
    { image: '/assets/img/slide3.jpg', text: 'Texto 3' },
  ];

  configuracionActual = 'config1';

  constructor(private loaderService: LoaderService) {
    this.loaderService.mostrarLoader$.subscribe(mostrar => {
      this.mostrarLoaderFlag = mostrar;
    });
  }
}
