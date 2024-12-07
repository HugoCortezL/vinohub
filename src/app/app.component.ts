import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "./shared/components/button/button.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "vinohub";
}
