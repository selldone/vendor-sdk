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

import { VapiPage } from "../VapiPage";
import AugmentHelper from "@core/helper/augment/AugmentHelper";

export default function getPageAugment(
  this: VapiPage,
  vendor_id: number,
  page_id: number,
  current_augment?: [] | null
) {
  const url = window.VAPI.GET_MY_VENDOR_PAGE_AUGMENT_STRUCTURE(
    vendor_id,
    page_id
  );
  return this.getNow<vapi.page.augment.get.IResponse>(url).then(
    ({ augment }) => {
      return {
        augment: current_augment
          ? AugmentHelper.MixAugments(current_augment, augment)
          : augment,
      };
    }
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.page.augment.get {
  export interface IResponse {
    augment: { key: string; value: string | null; type: "image" | "text" }[];
  }
}
