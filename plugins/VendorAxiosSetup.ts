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

import { SetupService } from "@selldone/core-js/server/SetupService";

export function VendorAxiosSetup() {
  window.axios = require("axios");

  // 🞧 Header: CORS
  window.axios.defaults.headers.common["Access-Control-Allow-Origin"] =
    SetupService.MainServiceUrl();
  window.axios.defaults.headers.common["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";

  console.log("window.NativeApp --> ", window.NativeApp);

  const shop_prefix_address = SetupService.GetMetaValue(
    "shop-prefix-address",
    ""
  );

  if (window.SelldoneUser) {
    //console.log(window.SelldoneUser.access_token);
    console.log(window.SelldoneUser.expires_in);
    //console.log(window.SelldoneUser.refresh_token);
    // 🞧 Header: Authorization
    window.axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.SelldoneUser.access_token;

    const expire_date = new Date();
    expire_date.setUTCSeconds(window.SelldoneUser.expires_in);

    window.$cookies?.set(
      "vendor_access_token",
      window.SelldoneUser.access_token,
      expire_date.toUTCString(),
      shop_prefix_address,
      null,
      false
    );
  } else {
    const access_token = window.$cookies?.get("vendor_access_token"); //localStorage.getItem('access_token');

    if (access_token) {
      // User previously login
      // 🞧 Header: Authorization
      window.axios.defaults.headers.common["Authorization"] =
        "Bearer " + access_token;
    }
  }

  // Set CSRF token:
  const token = SetupService.GetMetaValue("csrf-token");

  if (token) {
    // 🞧 Header: CSRF
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  } else {
    console.warn("CSRF token not found!");
  }

  // Set previous url & current url token: (use by back end to determine the origin and destination of page)
  // 🞧 Header: Previous and current location (when app open)
  window.axios.defaults.headers.common["S-Referrer"] = SetupService.GetReferrerMeta();
  window.axios.defaults.headers.common["S-Location"] = window.location.href;
}
