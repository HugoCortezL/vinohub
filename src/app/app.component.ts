import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IconComponent } from "./shared/components/icon/icon.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, IconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "vinohub";
}
