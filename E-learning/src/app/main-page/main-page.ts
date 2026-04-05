import { Component } from '@angular/core';
import { Header } from '../header/header'
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [Header,Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
