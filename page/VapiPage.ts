import { APIAbstract } from "../../../core/server/APIAbstract";
import getPageAugment from "./requests/vapi.page.augment.get";

export class VapiPage extends APIAbstract {

  public getPageAugment = getPageAugment;

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiPage {}
