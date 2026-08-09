import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './slidebar.html',
  styleUrl: './slidebar.css',
})
export class Slidebar { }
