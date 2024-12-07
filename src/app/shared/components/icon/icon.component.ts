import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-icon",
  imports: [CommonModule],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.scss",
})
export class IconComponent {
  @Input({ required: true }) icon!:
    | "search"
    | "user"
    | "notification"
    | "menu"
    | "lock"
    | "chevron-up"
    | "chevron-right"
    | "chevron-left"
    | "chevron-down";
  @Input() color: string = "#1A1A1A";
  @Input() size: string = "20";
}
