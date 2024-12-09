import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export enum AuthRoutesNames {
  BaseRoute = "auth",
  LoginRoute = "login",
  ResgisterRoute = "registrar",
}

export const authRoutes: Route = {
  path: AuthRoutesNames.BaseRoute,
  children: [
    {
      path: AuthRoutesNames.LoginRoute,
      component: LoginComponent,
      title: "Vinohub - Login",
    },
    {
      path: AuthRoutesNames.ResgisterRoute,
      component: RegisterComponent,
      title: "Vinohub - Registrar",
    },
  ],
};
