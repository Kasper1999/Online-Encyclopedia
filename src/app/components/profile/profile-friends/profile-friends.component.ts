import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile-friends",
  templateUrl: "./profile-friends.component.html",
  styleUrls: ["./profile-friends.component.scss"]
})
export class ProfileFriendsComponent implements OnInit {
  borderColor: string = "8c508c";
  styleList: object;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "pencil",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/main/pencil.svg")
    );
    iconRegistry.addSvgIcon(
      "bin",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/main/bin.svg")
    );
    iconRegistry.addSvgIcon(
      "lock-alt",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/main/lock-alt.svg")
    );
  }

  getStyleList(): object {
    return {
      "background-image": `linear-gradient(to right, #${
        this.borderColor
      }, transparent)`
    };
  }

  onChangeColor(e: { value: string }) {
    this.borderColor = e.value;
  }

  ngOnInit() {}
}
