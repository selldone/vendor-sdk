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

import {LogisticProfileType} from "@core/enums/logistic/LogisticProfileType";
import {LogisticProfile} from "@core/models/shop/logistic/profile/logistic-profile.model";
import {VapiLogisticProfile} from "@sdk-vendor/logistic/profile/VapiLogisticProfile";

export default function vapiLogisticProfilesListGet(
  this: VapiLogisticProfile,
  vendor_id: number,
  offset: number,
  limit: number,
  options?: vapi.logistic.profiles.list.get.IParams,
) {
  const params = { offset: offset, limit: limit, ...options };
  const url = window.VAPI.GET_MY_VENDOR_LOGISTIC_PROFILES(vendor_id);
  return this.getNow<vapi.logistic.profiles.list.get.IResponse>(
    url,
    params,
  );
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.logistic.profiles.list.get {
  export interface IResponse {
    profiles: LogisticProfile[];
    total: number;
  }

  export interface IParams {
    sortBy: string | null;
    sortDesc: boolean | null;
    search: string | null;
    contain: number | null;
    compact: boolean | null;
    type: keyof typeof LogisticProfileType | null;
  }
}
