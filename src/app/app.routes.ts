import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Productos } from './features/productos/productos';
import { Usuarios } from './features/usuarios/usuarios';
import { Movimientos } from './features/movimientos/movimientos';
import { Inventarios } from './features/inventarios/inventarios';

export const app_routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'productos', component: Productos },
    { path: 'usuarios', component: Usuarios },
    { path: 'movimientos', component: Movimientos },
    { path: 'inventarios', component: Inventarios },
    { path: '**', redirectTo: 'dashboard' }
];
