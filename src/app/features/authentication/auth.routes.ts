import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export const authRoutes: Route = {
  path: "auth",
  children: [
    {
      path: "login",
      component: LoginComponent,
    },
    {
      path: "register",
      component: RegisterComponent,
    },
  ],
};
