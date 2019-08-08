import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuardService } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo:'/login', pathMatch:'full' },
    { path:'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent},
    { path: 'users', component:UsersComponent, canActivate: [AuthGuardService]},
    { path:'**', component:LoginComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouterModule{
}