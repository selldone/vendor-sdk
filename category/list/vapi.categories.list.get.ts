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

import {Category} from "@selldone/core-js/models/shop/category/category.model";
import {VapiCategory} from "@selldone/sdk-vendor/category/VapiCategory.ts";
import {Page} from "@selldone/core-js/models";

export default function vapiCategoriesListGet(
  this: VapiCategory,
  vendor_id: number,
  offset: number,
  limit: number,
  options?: vapi.categories.list.get.IParams,
) {
  const params = { ...options, offset: offset, limit: limit };
  const url = window.VAPI.GET_MY_VENDOR_CATEGORIES(vendor_id);

  return this.getNow<vapi.categories.list.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace vapi.categories.list.get {
  export interface IResponse {
    categories: Array<
      Partial<Category> & {
        page?: Pick<
          Page,
          "id" | "user_id" | "published" | "title" | "image" | "name" | "color"
        >;
        parent?: Pick<
          Category,
          "id" | "title" | "star" | "icon" | "products" | "visits" | "parent_id"
        >;
        childes?: Array<
          Pick<Category, "id" | "parent_id" | "title" | "star" | "icon">
        >;
      }
    >;
    total: number;
    parent_folders: Category;
  }

  export interface IParams {
    /**
     * Filter categories that contain this ID.
     */
    contain?: number;

    /**
     * Index to start fetching categories from, useful for pagination.
     */
    offset: number;

    /**
     * Maximum number of categories to fetch.
     */
    limit: number;

    /**
     * Fetch categories updated after this date (ISO 8601 format).
     */
    updated_at?: string;

    /**
     * Field to sort categories by.
     * Example: 'id', 'name', 'title'.
     */
    sortBy?:
      | "id"
      | "name"
      | "title"
      | "star"
      | "icon"
      | "parent_id"
      | "visits"
      | "products"
      | "categories"
      | "vendor_id"
      | "page_id"
      | "created_at"
      | "updated_at";

    /**
     * Sort categories in descending order.
     */
    sortDesc?: boolean;

    /**
     * Search query to filter categories.
     */
    search?: string;

    /**
     * Whether to include children categories.
     */
    children?: boolean;

    /**
     * Whether to include parent category.
     */
    parent?: boolean;

    /**
     * Whether to include a custom page template.
     */
    page?: boolean;
  }
}
