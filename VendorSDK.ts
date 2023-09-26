import VAPI from "./apis/VAPI";
import { VapiPage } from "./page/VapiPage";
import { VendorAxiosSetup } from "./plugins/VendorAxiosSetup";
import { VapiProduct } from "./product/VapiProduct";
import { VapiArticle } from "./article/VapiArticle";

const SDK_VERSION = "0.01";
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
      article: new VapiArticle(),
    };
  }
}
