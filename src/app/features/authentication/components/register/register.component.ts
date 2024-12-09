import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { InputTextComponent } from "../../../../shared/components/input-text/input-text.component";
import { AuthRoutesNames } from "../../auth.routes";
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../../core/models/User";

@Component({
  selector: "app-register",
  imports: [CommonModule, RouterModule, InputTextComponent, IconComponent, ButtonComponent],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  authRoutes = AuthRoutesNames;
  form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required]))
  })

  constructor(private authService: AuthService) { }

  register() {
    if (this.form.valid) {
      const user: User = {
        email: this.form.controls['email'].value || '',
        password: this.form.controls['password'].value || ''
      }
      this.authService.register(user)
    }else{
      console.log("Register Failed")
      console.log(this.form.controls)
    }
  }
}
