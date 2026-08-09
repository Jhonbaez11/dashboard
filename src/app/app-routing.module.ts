import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { ProductosAdmin } from './pages/productos/admin/admin';
import { UsuariosAdmin } from './pages/usuarios/admin/admin';
import { MovimientosAdmin } from './pages/movimientos/admin/admin';

export const app_routes: Routes = [
    { path: '', component: Index },
    { path: 'index', component: Index },
    { path: 'admin_productos', component: ProductosAdmin },
    { path: 'admin_usuarios', component: UsuariosAdmin },
    { path: 'admin_movimientos', component: MovimientosAdmin },
    { path: '**', redirectTo: '' }
];
