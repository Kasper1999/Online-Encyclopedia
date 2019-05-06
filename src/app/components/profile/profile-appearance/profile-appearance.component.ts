import { Component, OnInit } from "@angular/core";

type colorConfig = { label: string; value: string };

@Component({
  selector: "app-profile-appearance",
  templateUrl: "./profile-appearance.component.html",
  styleUrls: ["./profile-appearance.component.scss"]
})
export class ProfileAppearanceComponent implements OnInit {
  mainList: colorConfig[];
  textList: colorConfig[];
  logoList: colorConfig[];
  controlsList: colorConfig[];
  focusList: colorConfig[];

  constructor() {
    this.mainList = [
      {
        label: "сайтбар",
        value: "000000"
      },
      {
        label: "фон",
        value: "545454"
      },
      {
        label: "карточки",
        value: "333333"
      },
      {
        label: "заголовки",
        value: "202020"
      },
      {
        label: "тень",
        value: "080808"
      },
      {
        label: "модальные окна",
        value: "ebebeb"
      }
    ];

    this.textList = [
      {
        label: "на темном",
        value: "ffffff"
      },
      {
        label: "на светлом",
        value: "000000"
      },
      {
        label: "подпункты",
        value: "bfbfbf"
      },
      {
        label: "ссылки",
        value: "8b008b"
      },
      {
        label: "ники",
        value: "f4eb01"
      },
      {
        label: "положительный",
        value: "00a550"
      },
      {
        label: "отрицательный",
        value: "b32428"
      }
    ];
    this.logoList = [
      {
        label: "W",
        value: "e6008d"
      },
      {
        label: "T",
        value: "8d2089"
      },
      {
        label: "H",
        value: "5f2688"
      }
    ];
    this.controlsList = [
      {
        label: "положительный",
        value: "00a74d"
      },
      {
        label: "отрицательный",
        value: "b32428"
      },
      {
        label: "тень положительный",
        value: "006633"
      },
      {
        label: "тень отрицательный",
        value: "800000"
      },
      {
        label: "основной",
        value: "202020"
      },
      {
        label: "первый дополнительный",
        value: "0ebeff"
      },
      {
        label: "второй дополнительный",
        value: "ae63e4"
      },
      {
        label: "третий дополнительный",
        value: "019a99"
      },
      {
        label: "четвертый дополнительный",
        value: "4adc77"
      }
    ];
    this.focusList = [
      {
        label: "положительный",
        value: "00a550"
      },
      {
        label: "отрицательный",
        value: "b32428"
      },
      {
        label: "дефолт",
        value: "8b008b"
      }
    ];
  }

  ngOnInit() {}
}
