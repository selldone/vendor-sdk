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

export class VAPI {
  selldone_vapi_url = "";

  constructor() {
    this.selldone_vapi_url = SetupService.GetMetaValue("selldone-vapi");
  }

  POST_VENDOR_LOGOUT() {
    return `${this.selldone_vapi_url}/logout`;
  }
  GET_VENDOR_USER() {
    return `${this.selldone_vapi_url}/me`;
  }

  //―――――――――――――――――――――― My vendors ――――――――――――――――――――

  GET_MY_VENDORS() {
    return `${this.selldone_vapi_url}/vendors`;
  }

  POST_MY_VENDOR_INVITE_ACTION(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}`;
  }

  GET_MY_VENDOR_INFO(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}`;
  }

  POST_SEND_ADD_VENDOR_REQUEST() {
    return `${this.selldone_vapi_url}/vendor-request`;
  }
  GER_ADD_VENDOR_REQUEST(shop_id: string | number) {
    return `${this.selldone_vapi_url}/vendor-request/${shop_id}`;
  }

  PUT_ADD_VENDOR_UPDATE_MY_VENDOR_PROFILE(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}`;
  }

  POST_MY_VENDOR_UPLOAD_VENDOR_ICON(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/icon`;
  }
  //―――――――――――――――――――――― Orders ――――――――――――――――――――

  GET_MY_VENDORS_ORDERS(vendor_id: string | number, type: string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders-${type}`;
  }

  GET_MY_VENDORS_ORDER_INFO(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}`;
  }

  POST_UPDATE_MY_VENDOR_ORDER_STATE(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}/state`;
  }
  POST_UPDATE_MY_VENDOR_ORDER_DELIVERY_RETURN(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}/delivery-returned`;
  }

  PUT_REJECT_MY_VENDOR_ORDER(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}/reject`;
  }

  DELETE_REJECT_MY_VENDOR_ORDER(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}/reject`;
  }

  PUT_SET_TRACKING_MY_VENDOR_ORDER(
    vendor_id: string | number,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${vendor_order_id}/tracking`;
  }

  GET_VENDOR_ORDER_TIMELINE(
    vendor_id: string | number,
    type: string,
    vendor_order_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/timeline/${type}/${vendor_order_id}`;
  }

  PUT_MY_VENDOR_SERVICE_ITEM_TASKS(
    vendor_id: string | number,
    basket_id: string | number,
    item_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/orders/${basket_id}/service/${item_id}/tasks`;
  }

  //―――――――――――――――――――――― Payments ――――――――――――――――――――

  GET_MY_VENDOR_PAYMENTS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/payments`;
  }
  POST_MY_VENDOR_PAYMENT_VERIFY(
    vendor_id: string | number,
    payment_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/payments/${payment_id}/verify`;
  }

  GET_MY_VENDOR_ACCOUNT_TRANSACTIONS(
    vendor_id: string | number,
    account_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/accounts/${account_id}/transactions`;
  }

  //―――――――――――――――――――――― Products ――――――――――――――――――――
  GET_MY_VENDOR_INVENTORY_PRODUCTS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/inventory`;
  }
  PUT_MY_VENDOR_INVENTORY_UPDATE_PRODUCT(
    vendor_id: string | number,
    vendor_product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/inventory/${vendor_product_id}`;
  }
  DELETE_MY_VENDOR__INVENTORY_PRODUCT(
    vendor_id: string | number,
    vendor_product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/inventory/${vendor_product_id}`;
  }

  POST_MY_VENDOR_UPLOAD_PRODUCT_COVER(
    vendor_id: string | number,
    product_id: string | number,
    variant_id = null
  ) {
    if (variant_id)
      return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit/upload/cover/${variant_id}`; // Maybe '/' cause problem!
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit/upload/cover`;
  }
  PUT_MY_VENDOR_PRODUCT_IMAGES_ORDER(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/images/order`;
  }
  PUT_MY_VENDOR_PRODUCT_IMAGE_ALT(
    vendor_id: string | number,
    product_id: string | number,
    image_id: number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/images/${image_id}/alt`;
  }
  DELETE_MY_VENDOR_PRODUCT_IMAGE(
    vendor_id: string | number,
    product_id: string | number,
    image_id: number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/images/${image_id}/delete`;
  }

  GET_MY_VENDOR_ALL_MY_PRODUCTS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/all-admin`;
  }

  POST_MY_VENDOR_RESTORE_DELETED_PRODUCT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/restore`;
  }

  POST_MY_VENDOR_CLONE_PRODUCT(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/products/${vendor_id}/clone`;
  }

  PUT_MY_VENDOR_SET_PRODUCT_CATEGORY(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit/category`;
  }

  PUT_MY_VENDOR_SET_CATEGORY_PARENT(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/edit/parent`;
  }

  POST_MY_VENDOR_ADD_PRODUCT(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/product/add`;
  }

  PUT_MY_VENDOR_EDIT_PRODUCT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit`;
  }

  DELETE_MY_VENDOR_PRODUCT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/delete`;
  }
  DELETE_MY_VENDOR_PRODUCTS_BULK(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/bulk-actions/delete-products`;
  }

  PUT_MY_VENDOR_PRODUCT_EXTRA(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/extra`;
  }

  POST_MY_VENDOR_ADD_PRODUCT_RATING(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/rating`;
  }
  DELETE_MY_VENDOR_PRODUCT_RATING(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/rating`;
  }

  POST_MY_VENDOR_ADD_PROS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/pros`;
  }

  DELETE_MY_VENDOR_PROS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/pros`;
  }

  POST_MY_VENDOR_ADD_CONS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/cons`;
  }

  DELETE_MY_VENDOR_CONS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/cons`;
  }

  PUT_MY_VENDOR_UPDATE_PROS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/pros`;
  }
  PUT_MY_VENDOR_UPDATE_CONS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/cons`;
  }

  POST_MY_VENDOR_PRODUCT_ADD_NOTE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/note`;
  }
  DELETE_MY_VENDOR_PRODUCT_NOTE(
    vendor_id: string | number,
    product_id: string | number,
    note_index: number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/note/${note_index}`;
  }

  POST_MY_VENDOR_PRODUCT_SET_TAGS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/tags`;
  }
  POST_MY_VENDOR_PRODUCT_SET_PAGE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/page`;
  }
  GET_MY_VENDOR_PAGE_AUGMENT_STRUCTURE(
    vendor_id: string | number,
    page_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/pages/${page_id}/augment`;
  }

  POST_MY_VENDOR_PRODUCT_SET_OUTPUTS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/outputs`;
  }

  GET_MY_VENDOR_SEARCH_PRODUCT_REPOSITORY_SKU() {
    return `${this.selldone_vapi_url}/product-repository/search`;
  }

  POST_MY_VENDOR_ADD_PRODUCT_BY_REPOSITORY(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/product-repository/add`;
  }

  POST_MY_VENDOR_UPLOAD_PRODUCT_MAIN_IMAGE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit/upload/icon`;
  }

  GET_MY_VENDOR_PRODUCT_FILES(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files`;
  }
  GET_MY_VENDOR_PRODUCT_FILE_UPLOAD_URL(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/edit/upload/url`;
  }
  DELETE_MY_VENDOR_PRODUCT_FILE(
    vendor_id: string | number,
    product_id: string | number,
    file_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files/${file_id}`;
  }
  DOWNLOAD_MY_VENDOR_PRODUCT_FILE(
    vendor_id: string | number,
    product_id: string | number,
    file_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files/${file_id}`;
  }
  PUT_MY_VENDOR_SET_PRODUCT_FILE_NAME(
    vendor_id: string | number,
    product_id: string | number,
    file_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files/${file_id}/name`;
  }
  PUT_MY_VENDOR_SET_PRODUCT_FILES_SORT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files/sort`;
  }
  PUT_MY_VENDOR_SET_PRODUCT_FILE_SAMPLE(
    vendor_id: string | number,
    product_id: string | number,
    file_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/files/${file_id}/sample`;
  }

  POST_MY_VENDOR_EDIT_VARIANT(
    vendor_id: string | number,
    product_id: string | number,
    variant_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variants/${variant_id}/edit`;
  }

  POST_MY_VENDOR_ADD_VARIANT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variant/add`;
  }
  POST_MY_VENDOR_ADD_BULK_VARIANT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variant/add-bulk`;
  }

  DELETE_MY_VENDOR_VARIANT(
    vendor_id: string | number,
    product_id: string | number,
    variant_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variants/${variant_id}/delete`;
  }

  POST_MY_VENDOR_RESTORE_DELETED_VARIANT(
    vendor_id: string | number,
    product_id: string | number,
    variant_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variants/${variant_id}/restore`;
  }

  POST_MY_VENDOR_PRODUCT_QUANTITY(
    vendor_id: string | number,
    product_id: string | number,
    variant_id: string | null = null
  ) {
    if (variant_id !== null)
      return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/variants/${variant_id}/quantity`;

    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/quantity`;
  }

  GET_MY_VENDOR_PRODUCT_INFO_ADMIN(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/admin`;
  }

  POST_MY_VENDOR_CATEGORY_MOVE_PRODUCTS_ORDER(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${
      category_id ? category_id : "root"
    }/products-order`;
  }
  POST_MY_VENDOR_CATEGORY_MOVE_CATEGORIES_ORDER(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${
      category_id ? category_id : "root"
    }/categories-order`;
  }

  // NOT SUPPORTED FOR VENDOR YET!
  POST_MY_VENDOR_ASSIGN_PROFILE_TO_PRODUCTS_IN_CATEGORY(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${
      category_id ? category_id : "root"
    }/bulk-actions/assign-products-profile`;
  }

  GET_MY_VENDOR_PRODUCT_EMBED_PATTERNS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/embed-patterns/product`;
  }

  PUT_MY_VENDOR_PRODUCT_SET_TRANSLATIONS(vendor_id:string|number,product_id:number|string,key:string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/translations/${key}`;
  }
  PUT_MY_VENDOR_CATEGORY_SET_TRANSLATIONS(vendor_id:string|number,category_id:number|string,key:string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/translations/${key}`;
  }
  PUT_MY_VENDOR_CROSS_SELL_SET_TRANSLATIONS(vendor_id:string|number,product_id:number|string,cross_sell_id:number|string,key:string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/cross-sells/${cross_sell_id}/translations/${key}`;
  }
  //―――――――――――――――――――――― Shop > Category ――――――――――――――――――――

  GET_MY_VENDOR_CATEGORIES(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories`;
  }

  POST_MY_VENDOR_ADD_CATEGORY(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/add`;
  }

  PUT_MY_VENDOR_EDIT_CATEGORY(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/edit`;
  }

  DELETE_MY_VENDOR_CATEGORY(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}`;
  }

  POST_MY_VENDOR_UPLOAD_CATEGORY_IMAGE(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/edit/upload`;
  }

  POST_MY_VENDOR_CATEGORY_ADD_NOTE(
    vendor_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/note`;
  }
  DELETE_MY_VENDOR_CATEGORY_NOTE(
    vendor_id: string | number,
    category_id: string | number,
    note_index: number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${category_id}/note/${note_index}`;
  }

  //―――――――――――――――――――――― File type converter ――――――――――――――――――――

  POST_MY_VENDOR_CONVERTER_EXCEL_CSV(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/converter/excel/csv`;
  }

  //―――――――――――――――――――――― SEO ――――――――――――――――――――

  GET_MY_VENDOR_SEO_PREVIEW_PRODUCT(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/seo/preview`;
  }

  //―――――――――――――――――――――― Product Vendor Tab ――――――――――――――――――――

  GET_MY_VENDOR_PRODUCT_VENDORS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/vendors`;
  }
  /*
  PUT_MY_VENDOR_EDIT_PRODUCT_VENDOR(vendor_id,product_id,vendor_product_id) { // Replaced with :PUT_MY_VENDOR_INVENTORY_UPDATE_PRODUCT
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/vendors/${vendor_product_id}`;
  }
*/

  //―――――――――――――――――――――― Export ――――――――――――――――――――
  /**
   *
   * @param vendor_id
   * @param file          excel , csv
   * @returns {string}
   * @constructor
   */
  GET_MY_VENDOR_EXPORT_PRODUCTS(vendor_id: string | number, file: string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${file}`;
  }
  GET_MY_VENDOR_EXPORT_CATEGORIES(vendor_id: string | number, file: string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/categories/${file}`;
  }
  GET_MY_VENDOR_EXPORT_INVENTORY(vendor_id: string | number, file: string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/inventory/${file}`;
  }

  GET_MY_VENDOR_EXPORT_FOR_AUCTION(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/for-auction/excel`;
  }
  GET_MY_VENDOR_EXPORT_FOR_AVAILABLE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/for-available/excel`;
  }

  //―――――――――――――――――――――― Import Products ――――――――――――――――――――

  POST_MY_VENDOR_IMPORT_PRODUCTS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/products`;
  }
  GET_MY_VENDOR_IMPORT_PRODUCTS_LIST(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/products`;
  }
  DELETE_MY_VENDOR_IMPORT_PRODUCT_ITEM(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/products/${product_id}`;
  }
  GET_MY_VENDOR_IMPORT_IMAGES_LIST(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/images`;
  }
  DELETE_MY_VENDOR_IMPORT_IMAGE_ITEM(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/images/${product_id}`;
  }
  PUT_MY_VENDOR_IMPORT_IMAGE_ITEM_TRY(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/import/images/${product_id}/try`;
  }

  GET_MY_VENDOR_IMPORTING_INFO(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/importing`;
  }

  UPLOAD_ARTICLE_BLOG_IMAGE(shop_id: string | number) {
    return `${this.selldone_vapi_url}/shops/${shop_id}/blogs/upload`;
  }

  POST_LIKE_ARTICLE(article_id: string | number) {
    return `${this.selldone_vapi_url}/articles/${article_id}/like`;
  }

  //―――――――――――――――――――――― Link preview ――――――――――――――――――――
  GET_LINK_PREVIEW() {
    return `${this.selldone_vapi_url}/iframe/preview`;
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――――――― Article ―――――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  //―――――――――――――――――――――― Import word file ――――――――――――――――――――

  POST_MY_VENDOR_CONVERTER_WORD_HTML(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/converter/word/html`;
  }

  //―――――――――――――――――――――― Translate ――――――――――――――――――――
  POST_MY_VENDOR_TRANSLATE_PRODUCT_ARTICLE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/translate-article`;
  }

  //―――――――――――――――――――――― User Feedback ――――――――――――――――――――
  // Not exist!

  //―――――――――――――――――――――― Timeline ――――――――――――――――――――
  GET_MY_VENDOR_SHOP_ARTICLES_TIMELINE(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/timeline/articles`;
  }

  //―――――――――――――――――――――― Edit ――――――――――――――――――――
  POST_MY_VENDOR_ADD_EDIT_ARTICLE(vendor_id: string | number, type: string) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/article/${type}/edit`;
  }

  POST_MY_VENDOR_ARTICLE_BODY_AUTO_FIX() {
    return `${this.selldone_vapi_url}/articles/fix`;
  }
  //―――――――――――――――――――――― Upload ――――――――――――――――――――
  /**
   * Upload article image.
   * @param type
   * @returns {string}
   */
  UPLOAD_MY_VENDOR_ARTICLE_IMAGE(vendor_id: string | number, type: String) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/article/${type}/upload`;
  }

  //―――――――――――――――――――――― Delete ――――――――――――――――――――
  DELETE_MY_VENDOR_ARTICLE(
    vendor_id: string | number,
    type: string,
    article_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/article/${type}/${article_id}`;
  }

  //―――――――――――――――――――――― Tags ――――――――――――――――――――
  GET_MY_VENDOR_SHOP_ARTICLE_TAGS(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/articles/tags`;
  }
  POST_MY_VENDOR_SET_SHOP_ARTICLE_TAGS(
    vendor_id: string | number,
    article_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/articles/tags/${article_id}`;
  }

  //―――――――――――――――――――――― Follow ――――――――――――――――――――
  // Not exist!

  //―――――――――――――――――――――― Shop > 🎗️ Ribbon (Subscription) ――――――――――――――――――――

  // TODO: Not implemented yet!
  POST_MY_VENDOR_PRODUCT_RIBBON(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/ribbon`;
  }

  // ▀▀▀▀▀▀▀▀▀ 🌸 Add extra pricing 🌸 ▀▀▀▀▀▀▀▀▀

  POST_MY_VENDOR_PRODUCT_ADD_EXTRA_PRICINGS(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/extra-pricings`;
  }
  PUT_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS(
    vendor_id: string | number,
    product_id: string | number,
    extra_pricing_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/extra-pricings/${extra_pricing_id}`;
  }
  DELETE_MY_VENDOR_PRODUCT_EDIT_EXTRA_PRICINGS(
    vendor_id: string | number,
    product_id: string | number,
    extra_pricing_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/extra-pricings/${extra_pricing_id}`;
  }

  GET_MY_VENDOR_CUSTOM_BADGE(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/badges`;
  }

  POST_MY_VENDOR_SET_PRODUCT_BADGE(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/badges`;
  }

  GET_MY_VENDOR_LOGISTIC_PROFILES(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/logistic-profiles`;
  }

  POST_MY_VENDOR_SAVE_SPEC(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/spec`;
  }
  GET_MY_VENDOR_SPEC_OF_PRODUCT(
    vendor_id: string | number,
    product_code: string
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/wizard/spec/${product_code}`;
  }

  //―――――――――――――――――――――― Agency > Documents ――――――――――――――――――――

  GET_MY_VENDOR_UPLOADED_DOCUMENTS_LIST(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/documents`;
  }
  GET_MY_VENDOR_DOCUMENTS_DOWNLOAD_URL(
    vendor_id: string | number,
    document_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/documents/${document_id}`;
  }
  POST_MY_VENDOR_DOCUMENT_ADD(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/documents`;
  }
  DELETE_MY_VENDOR_DOCUMENT(
    vendor_id: string | number,
    document_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/documents/${document_id}`;
  }

  //―――――――――――――――――――――― Shop > Product Includes ――――――――――――――――――――
  GET_MY_VENDOR_SHOP_INCLUDES(vendor_id: string | number) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/includes`;
  }

  POST_MY_VENDOR_PRODUCT_INCLUDE_SET(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/includes`;
  }

  //―――――――――――――――――――――― Shop > Product > Category ――――――――――――――――――――
  POST_MY_VENDOR_PRODUCT_SET_SHORTCUT_CATEGORIES(
      vendor_id: string | number,
      product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/shortcuts`;
  }

  //―――――――――――――――――――――― AI (CI) ――――――――――――――――――――

  POST_MY_VENDOR_AI_PRODUCT_AUTO_CREATE_SPEC(
    vendor_id: string | number,
    product_id: string | number
  ) {
    return `${this.selldone_vapi_url}/vendors/${vendor_id}/products/${product_id}/ai/spec`;
  }
}
