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

import {APIAbstract} from "@selldone/core-js/server/APIAbstract";
import vapiProductImporterQueImagesGet
  from "../../../product/importer/que/requests/vapi.product.importer.que.images.get";
import vapiProductImporterQueImagesDelete
  from "../../../product/importer/que/requests/vapi.product.importer.que.images.delete";
import apiProductImporterQueImageSyncPut
  from "../../../product/importer/que/requests/vapi.product.importer.que.image.sync.put";
import apiProductImporterQueProductsGet
  from "../../../product/importer/que/requests/vapi.product.importer.que.products.get";
import apiProductImporterQueProductsDelete
  from "../../../product/importer/que/requests/vapi.product.importer.que.products.delete";

export class VapiProductImporterQue extends APIAbstract {
  public images = vapiProductImporterQueImagesGet;
  public removeImage = vapiProductImporterQueImagesDelete;
  public syncImage = apiProductImporterQueImageSyncPut;

  public products = apiProductImporterQueProductsGet;
  public removeProduct = apiProductImporterQueProductsDelete;

  constructor() {
    super();
  }
} //█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace VapiProduct {}
