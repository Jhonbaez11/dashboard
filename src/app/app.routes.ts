import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Productos } from './pages/productos/productos';
import { Usuarios } from './pages/usuarios/usuarios';
import { Movimientos } from './pages/movimientos/movimientos';

export const app_routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'productos', component: Productos },
    { path: 'usuarios', component: Usuarios },
    { path: 'movimientos', component: Movimientos },
    { path: '**', redirectTo: '' }
];
