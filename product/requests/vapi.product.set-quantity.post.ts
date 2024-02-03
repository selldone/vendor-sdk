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

import {VapiProduct} from "../VapiProduct";

export default function vapiProductSetQuantityPost(
  this: VapiProduct,
  vendor_id: number,
  product_id: number,
  quantity: number,
) {
  const params = { quantity: quantity };
  const url = window.VAPI.POST_MY_VENDOR_PRODUCT_QUANTITY(
    vendor_id,
    product_id,
  );
  return this.postNow<vapi.product.change_category.put.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.change_category.put {
  export interface IResponse {
    success: boolean;
    quantity: number;
  }
}
