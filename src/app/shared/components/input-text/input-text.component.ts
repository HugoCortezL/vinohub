import { Component, ContentChild, Input } from "@angular/core";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "vino-input-text",
  imports: [IconComponent],
  templateUrl: "./input-text.component.html",
  styleUrl: "./input-text.component.scss",
})
export class InputTextComponent {
  @ContentChild(IconComponent) icon: IconComponent | undefined;

  @Input({ required: true }) placeholder!: string;
  @Input() type?: string = "text";

}
