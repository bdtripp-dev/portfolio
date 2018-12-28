<?php
/**
 * Created by PhpStorm.
 * User: Brian
 * Date: 10/21/2018
 * Time: 6:53 PM
 */
// TODO : Need to hash DB_PASSWORD?

//online version
//const DB_SERVER = '127.0.0.1';
//const DB_USER = 'bdtrippc';
//const DB_PASSWORD = 'qIHICCAdcfUr9GuoLnOp';
//const DB_DATABASE = 'bdtrippc_portland_art_supply';

//offline version
const DB_SERVER = '127.0.0.1';
const DB_USER = 'portland_art';
const DB_PASSWORD = 'qIHICCAdcfUr9GuoLnOp';
const DB_DATABASE = 'portland_art_supply';

/*
 * users Table
 */
const USERS_TABLE = 'users';

const USER_ID_FIELD = 'UserID';
const USERS_USERNAME_FIELD = 'Username';
const USERS_HASH_FIELD = 'PasswordHash';

/*
 * account_data Table
 */
const ACCOUNT_DATA_TABLE = 'account_data';

const ACCOUNT_DATA_USER_ID_FIELD = 'UserID';
const ACCOUNT_DATA_SESSION_DATA_FIELD = 'SessionData';

/*
 * product_manufacturer Table
 */

const PRODUCT_MANUFACTURER_TABLE = 'product_manufacturer';

const PRODUCT_MANUFACTURER_ID_FIELD = 'ManufacturerID';
const PRODUCT_MANUFACTURER_NAME_FIELD = 'ManufacturerName';

/*
 * product_category Table
 */

const PRODUCT_CATEGORY_TABLE = 'product_category';

const PRODUCT_CATEGORY_ID_FIELD = 'CategoryID';
const PRODUCT_CATEGORY_NAME_FIELD = 'CategoryName';

/*
 * product_subcategory Table
 */

const PRODUCT_SUBCATEGORY_TABLE = 'product_subcategory';

const PRODUCT_SUBCATEGORY_ID_FIELD = 'SubcategoryID';
const PRODUCT_SUBCATEGORY_CATEGORY_ID_FIELD = 'CategoryID';
const PRODUCT_SUBCATEGORY_NAME_FIELD = 'SubcategoryName';

/*
 * product_shape Table
 */

const PRODUCT_SHAPE_TABLE = 'product_shape';

const PRODUCT_SHAPE_ID_FIELD = 'ShapeID';
const PRODUCT_SHAPE_DESCRIPTION_FIELD = 'ShapeDescription';

/*
 * product_color Table
 */

const PRODUCT_COLOR_TABLE = 'product_color';

const PRODUCT_COLOR_ID_FIELD = 'ColorID';
const PRODUCT_COLOR_NAME_FIELD = 'ColorName';

/*
 * product_size Table
 */

const PRODUCT_SIZE_TABLE = 'product_size';

const PRODUCT_SIZE_ID_FIELD = 'SizeID';
const PRODUCT_SIZE_DESCRIPTION_FIELD = 'SizeDescription';

/*
 * product_group Table
 */

const PRODUCT_GROUP_TABLE = 'product_group';

const PRODUCT_GROUP_ID_FIELD = 'ProductGroupID';
const PRODUCT_GROUP_CATEGORY_ID_FIELD = 'CategoryID';
const PRODUCT_GROUP_SUBCATEGORY_ID_FIELD = 'SubcategoryID';
const PRODUCT_GROUP_MANUFACTURER_ID_FIELD = 'ManufacturerID';
const PRODUCT_GROUP_DESCRIPTION_FIELD = 'GroupDescription';
const PRODUCT_GROUP_INFORMATION_FIELD = 'GroupInformation';
const PRODUCT_GROUP_CODE_FIELD = "GroupCode";

/*
 * product_item Table
 */
const PRODUCT_ITEM_TABLE = 'product_item';

const PRODUCT_ITEM_ID_FIELD = 'ProductItemID';
const PRODUCT_ITEM_GROUP_ID_FIELD = 'ProductGroupID';
const PRODUCT_ITEM_SIZE_ID_FIELD = 'SizeID';
const PRODUCT_ITEM_COLOR_ID_FIELD = 'ColorID';
const PRODUCT_ITEM_SHAPE_ID_FIELD = 'ShapeID';
const PRODUCT_ITEM_PRICE_FIELD = 'Price';

/*
 * Misc
 */

const QUANTITY_FIELD = 'Quantity';
const SUBTOTAL_FIELD = 'Subtotal';
const TOTAL_FIELD = "Total";