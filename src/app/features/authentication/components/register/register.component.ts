import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { InputTextComponent } from "../../../../shared/components/input-text/input-text.component";
import { AuthRoutesNames } from "../../auth.routes";

@Component({
  selector: "app-register",
  imports: [CommonModule, RouterModule, InputTextComponent, IconComponent, ButtonComponent],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  authRoutes = AuthRoutesNames;
}
