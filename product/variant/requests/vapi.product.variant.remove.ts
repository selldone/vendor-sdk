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

import {VapiProductVariant} from "../VapiProductVariant.ts";
import {ProductVariant} from "@selldone/core-js/models/shop/product/product_variant.model";

export default function vapiProductVariantRemove(
  this: VapiProductVariant,
  vendor_id: number,
  product_id: number,
  variant_id: number,
) {
  const url = window.VAPI.DELETE_MY_VENDOR_VARIANT(
    vendor_id,
    product_id,
    variant_id,
  );
  return this.deleteNow<vapi.product.variant.remove.IResponse>(url);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.variant.remove {
  export interface IResponse {
    success: boolean;
    variants: ProductVariant[];
    quantity: number;
    variant_id: number; // Remove variant id
  }
}
