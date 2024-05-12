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

import {VapiProductTag} from "../VapiProductTag.ts";

export default function vapiProductTagSetPost(
  this: VapiProductTag,
  vendor_id: number,
  product_id: number,
  tags: string[] | null,
) {
  const url = window.VAPI.POST_MY_VENDOR_PRODUCT_SET_TAGS(
    vendor_id,
    product_id,
  );
  return this.postNow<vapi.product.tag.set.post.IResponse>(url, { tags: tags });
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.product.tag.set.post {
  export interface IResponse {
    tags: string[];
    success: boolean;
  }
}
