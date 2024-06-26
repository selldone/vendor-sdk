/*
 * Copyright (c) 2023-2024. Selldone® Business OS™
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

import {ApiProductImporter} from "@sdk-backoffice/product/importer/ApiProductImporter";

export default function apiProductImporterInfoGet(
  this: ApiProductImporter,
  vendor_id: number,
) {
  const url = window.VAPI.GET_MY_VENDOR_IMPORTING_INFO(vendor_id);
  return this.getNow<vapi.product.importer.info.get.IResponse>(url, null);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.importer.info.get {
  export interface IResponse {
    importing: number;
    images: number;
  }
}
