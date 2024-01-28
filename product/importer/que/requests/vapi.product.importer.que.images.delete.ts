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

import {ApiProductImporterQue} from "@sdk-backoffice/product/importer/que/ApiProductImporterQue";

export default function vapiProductImporterQueImagesDelete(
  this: ApiProductImporterQue,
  vendor_id: number,
  item_id: number,
) {
  const url = window.VAPI.DELETE_MY_VENDOR_IMPORT_IMAGE_ITEM(vendor_id, item_id);
  return this.deleteNow<vapi.product.importer.que.images.deleter.IResponse>(url);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.importer.que.images.deleter {
  export interface IResponse {
    success: boolean;
    id: number;
  }

  export interface IResponse {}
}
