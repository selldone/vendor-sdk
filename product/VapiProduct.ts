import { APIAbstract } from "@core/server/APIAbstract";
import list from "./requests/vapi.products.list.get";
import changeCategory from "./requests/vapi.product.change-category.put";
import getInfo from "./requests/vapi.product.info.get";

export class VapiProduct extends APIAbstract {

  public list = list;
  public changeCategory = changeCategory;
  public getInfo = getInfo;


  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace VapiProduct {}
