import { Component, Input, OnChanges, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [IonicModule, CommonModule], // Importa CommonModule aquí
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoaderComponent implements AfterViewInit {
  @Input() slides!: { image: string; text: string }[];
  @Input() interval: number = 3000;
  @Input() configurationType!: string;
  @ViewChild('miSwiper') miSwiper: any;

  slideOptions = {
    initialSlide: 3,
    speed: 1000,
    autoplay: {
      running: true,
      delay: this.interval,
    },
  };

  ngAfterViewInit() {
    this.miSwiper.nativeElement.swiper.autoplay.start();
    this.miSwiper.nativeElement.swiper.update();
  }
  
}
