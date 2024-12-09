import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "../button/button.component";
import { AuthRoutesNames } from "../../../features/authentication/auth.routes";

@Component({
  selector: "vino-header",
  imports: [RouterModule, IconComponent, ButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  authRoutes = AuthRoutesNames;
}
