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

import {VAPI} from "./apis/VAPI";
import {VapiPage} from "./page/VapiPage";
import {VendorAxiosSetup} from "./plugins/VendorAxiosSetup";
import {VapiProduct} from "./product/VapiProduct";
import {VapiArticle} from "./article/VapiArticle";
import {VapiLogistic} from "@sdk-vendor/logistic/VapiLogistic";

const SDK_VERSION = "0.02";
// Extend the Window interface to recognize the properties you add to the global window object.
declare global {
  interface Window {
    // APIs
    VAPI: VAPI;

    // Global SDK Interface
    $vendor: {
      page: VapiPage;
      product: VapiProduct;

      // Article:
      article: VapiArticle;

      // Logistic:
      logistic: VapiLogistic;
    };
  }
}

export class VendorSDK {
  static Setup(): void {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
    console.log(`┣━━━━━ Selldone® Vendor SDK | V${SDK_VERSION} ━━━━━┫`);
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");

    //――――――――――――――――――――――――― Axios ―――――――――――――――――――――――――
    VendorAxiosSetup();

    //――――――――――――――――――――――――― Initialize Resources Origin ―――――――――――――――――――――――――
    window.VAPI = new VAPI();

    window.$vendor = {
      page: new VapiPage(),
      product: new VapiProduct(),

      // Article:
      article: new VapiArticle(),

      // Logistic:
      logistic: new VapiLogistic(),
    };
  }
}
