import { APIAbstract } from "../../../core/server/APIAbstract";
import {VapiArticleTag} from "./tag/VapiArticleTag";

export class VapiArticle extends APIAbstract {

  public tags=new VapiArticleTag()

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ApiPage {}
