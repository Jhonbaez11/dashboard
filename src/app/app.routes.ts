import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Productos } from './pages/productos/productos';
import { Usuarios } from './pages/usuarios/usuarios';
import { Movimientos } from './pages/movimientos/movimientos';

export const app_routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'index', component: Dashboard },
    { path: 'admin_productos', component: Productos },
    { path: 'admin_usuarios', component: Usuarios },
    { path: 'admin_movimientos', component: Movimientos },
    { path: '**', redirectTo: '' }
];
