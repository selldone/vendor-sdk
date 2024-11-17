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

import {VapiProduct} from "../VapiProduct";
import {Category} from "@selldone/core-js/models/shop/category/category.model";
import {Product} from "@selldone/core-js/models/shop/product/product.model";

export default function vapiProductsListGet(
  this: VapiProduct,
  vendor_id: number,
  offset: number,
  limit: number,
  options?: vapi.products.list.get.IParams,
) {
  const params = { ...options,offset: offset, limit: limit}
  const url = window.VAPI.GET_MY_VENDOR_ALL_MY_PRODUCTS(vendor_id);

  return this.getNow<vapi.products.list.get.IResponse>(url,params)
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.products.list.get {
  export interface IResponse {
    folders: Category[];
    products: Product[];
    parent_folders: Category;
    total:number;


    tax_profile?:any;
    valuation?:any;
    time_filter?:any;

  }

  export interface IParams {
    /** Filter products based on their statuses. */
    statuses?: Product.ProductStatus[];  // Assuming ProductStatus is an enum you have defined

    /** Filter products based on their types. */
    types?: Product.ProductType[];  // Assuming ProductType is an enum you have defined

    /** Index to start fetching products from, useful for pagination. */
    offset: number;

    /** Maximum number of products to fetch. */
    limit: number;

    /** Sorting criteria for the products. */
    sort?: string;

    /** Only fetch available products. */
    available?: boolean;

    /** Defines the product set, could be 'default' or 'spec'. */
    set?: 'default' | 'spec';

    /** Current directory ID for the product search. */
    dir?: number;

    /** Flag indicating if product variants should be included in the results. */
    with_product_variants?: boolean;

    /** Flag indicating if parent products should be included. Usually set to false when loading more items. */
    with_parent?: boolean;

    /** Search term for products. */
    search?: string;

    /** Vendor filter for products. */
    vendor?: string;

    /** When set to true, only fetches products without additional details. */
    products_only?: boolean;

    /** When set to true, the total count of products matching the criteria will be returned. */
    with_total: boolean;

    /** When set to true, deleted products are also shown. */
    show_deletes?: boolean;

    /** When set to true, all vendors are shown. */
    show_vendors?: boolean;
  }
}
