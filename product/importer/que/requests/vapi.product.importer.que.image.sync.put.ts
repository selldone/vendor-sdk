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

export default function apiProductImporterQueImageSyncPut(
  this: ApiProductImporterQue,
  vendor_id: number,
  item_id: number,
) {
  const url = window.VAPI.PUT_MY_VENDOR_IMPORT_IMAGE_ITEM_TRY(vendor_id, item_id);
  return this.putNow<vapi.product.importer.que.image.sync.put.IResponse>(url);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.importer.que.image.sync.put {
  export interface IResponse {
    success: boolean;
    id: number;
  }

  export interface IResponse {}
}
