import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { LoginComponent } from './login/login.component';


// http:localhost:4200/productos
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'productos', component: ProductoListaComponent},
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: '**', redirectTo: 'login'},
  {path:'', redirectTo: 'productos', pathMatch:'full'},
  {path:'agregar-producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
