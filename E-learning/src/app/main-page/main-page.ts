import { Component } from '@angular/core';
import { Header } from '../header/header'
import { Footer } from '../footer/footer';
import { Login } from '../authorisationElements/login/login';
import { SignUp } from '../authorisationElements/sign-up/sign-up';

@Component({
  selector: 'app-main-page',
  imports: [Header,Footer,Login,SignUp],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
