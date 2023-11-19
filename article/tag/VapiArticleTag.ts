import {APIAbstract} from "@core/server/APIAbstract";
import setArticleTags from "./requests/vapi.article.tags.post";
import getTags from "./requests/vapi.article.tags.get";

export class VapiArticleTag extends APIAbstract {


  constructor() {
    super();
  }


  public setArticleTags = setArticleTags;
  public getTags = getTags;



}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace XapiProduct {}
