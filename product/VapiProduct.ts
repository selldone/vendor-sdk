/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import {APIAbstract} from "@selldone/core-js/server/APIAbstract";
import vapiProductsListGet from "./requests/vapi.products.list.get";
import vapiProductChangeCategoryPut from "./requests/vapi.product.change-category.put";
import vapiProductInfoGet from "./requests/vapi.product.info.get";
import {VapiProductImporter} from "@sdk-vendor/product/importer/VapiProductImporter";
import {VapiProductTag} from "@sdk-vendor/product/tag/VapiProductTag";
import vapiProductSetQuantityPost from "@sdk-vendor/product/requests/vapi.product.set-quantity.post";
import {VapiProductVariant} from "@sdk-vendor/product/variant/VapiProductVariant";
import {VapiProductVendor} from "@sdk-vendor/product/vendor/VapiProductVendor";

export class VapiProduct extends APIAbstract {
  public list = vapiProductsListGet;
  public changeCategory = vapiProductChangeCategoryPut;
  public getInfo = vapiProductInfoGet;

  public setQuantity = vapiProductSetQuantityPost;

  public importer = new VapiProductImporter();

  public tags = new VapiProductTag();

  public variants = new VapiProductVariant();

  public vendor = new VapiProductVendor();

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace VapiProduct {}
