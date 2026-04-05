import { Component } from '@angular/core';
import { Header } from '../header/header'

@Component({
  selector: 'app-main-page',
  imports: [Header],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
