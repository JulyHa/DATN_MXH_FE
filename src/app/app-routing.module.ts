import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./controller/login/login.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./controller/register/register.component";

const routes: Routes = [
  { path : '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  // { path : 'error', component: }

]
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
