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

import {ApiProductVendor} from "@sdk-backoffice/product/vendor/ApiProductVendor";

export default function vapiProductVendorsListGet(
  this: ApiProductVendor,
  vendor_id: number,
  product_id: number,
  offset: number,
  limit: number,
  options?: vapi.product.vendors.list.get.IParams,
) {
  const params = { ...options,offset: offset, limit: limit };
  const url = window.VAPI.GET_MY_VENDOR_PRODUCT_VENDORS(vendor_id, product_id);
  return this.getNow<vapi.product.vendors.list.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.vendors.list.get {
  export interface IResponse {
    vendor_products: VendorProduct[];
    total: number;
  }

  export interface IParams {
    sortBy: string | null;
    sortDesc: boolean | null;
    search: string | null;
    vendor_id: number | null; //Only for this vendor
  }
}
