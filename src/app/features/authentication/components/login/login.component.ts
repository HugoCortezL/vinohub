import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextComponent } from "../../../../shared/components/input-text/input-text.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { RouterModule } from "@angular/router";
import { AuthRoutesNames } from "../../auth.routes";
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../../core/models/User";

@Component({
  selector: "app-login",
  imports: [CommonModule, RouterModule, InputTextComponent, IconComponent, ButtonComponent],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  authRoutes = AuthRoutesNames;
  form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required]))
  })

  constructor(private authService: AuthService) { }

  login() {
    if (this.form.valid) {
      const user: User = {
        email: this.form.controls['email'].value || '',
        password: this.form.controls['password'].value || ''
      }
      this.authService.login(user)
    }else{
      console.log("Login Failed")
      console.log(this.form.controls)
    }
  }
}
