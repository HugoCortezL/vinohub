import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextComponent } from "../../../../shared/components/input-text/input-text.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { RouterModule } from "@angular/router";
import { AuthRoutesNames } from "../../auth.routes";

@Component({
  selector: "app-login",
  imports: [CommonModule, RouterModule, InputTextComponent, IconComponent, ButtonComponent],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  authRoutes = AuthRoutesNames;
}
