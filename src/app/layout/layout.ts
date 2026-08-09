import { Component } from '@angular/core';
import { Topbar } from '../shared/topbar/topbar';
import { Slidebar } from '../shared/slidebar/slidebar';
import { Footer } from '../shared/footer/footer';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Topbar, Slidebar, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout { }
