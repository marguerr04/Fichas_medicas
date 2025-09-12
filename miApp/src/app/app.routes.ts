import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nombrehome',
    loadComponent: () => import('./nombrehome/nombrehome.page').then( m => m.NombrehomePage)
  },
  {
    path: 'paginauno',
    loadComponent: () => import('./paginauno/paginauno.page').then( m => m.PaginaunoPage)
  },
  {
    path: 'paginados',
    loadComponent: () => import('./paginados/paginados.page').then( m => m.PaginadosPage)
  },
  {
    path: 'paginatres',
    loadComponent: () => import('./paginatres/paginatres.page').then( m => m.PaginatresPage)
  },
  {
    path: 'paginacuatro',
    loadComponent: () => import('./paginacuatro/paginacuatro.page').then( m => m.PaginacuatroPage)
  },
  {
    path: 'paginacinco',
    loadComponent: () => import('./paginacinco/paginacinco.page').then( m => m.PaginacincoPage)
  },
  {
    path: 'historial-paciente',
    loadComponent: () => import('./historial-paciente/historial-paciente.page').then( m => m.HistorialPacientePage)
  },
  {
    path: 'login-paciente',
    loadComponent: () => import('./login-paciente/login-paciente.page').then( m => m.LoginPacientePage)
  },
  {
    path: 'login-medico',
    loadComponent: () => import('./login-medico/login-medico.page').then( m => m.LoginMedicoPage)
  },
];
