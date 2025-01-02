import { faker } from "@faker-js/faker";
import { supabase } from "./supabase";

// import {DATA_PER_PAGE} from '../utils/utils'



export const DATA_PER_PAGE =20

export async function Feeddata() {
  const prodname = faker.commerce.productName();
  const prodprice = parseInt(
    faker.commerce.price({ min: 10000, max: 200000, dec: 0 })
  );
  const discountprice = parseInt(
    faker.commerce.price({ min: 0, max: 10000, dec: 0 })
  );
  const prodrating = parseFloat(
    faker.commerce.price({ min: 3, max: 5, dec: 2 })
  );
  const qtysold = parseInt(
    faker.commerce.price({ min: 0, max: 10000, dec: 0 })
  );
  const produrl = faker.image.urlLoremFlickr({
    width: 300,
    heigh: 300,
    category: "product",
  });
  const { data, error } = await supabase
    .from("db_produk")
    .insert([
      {
        product_name: prodname,
        product_price: prodprice,
        discount_price: discountprice,
        img_url: produrl,
        product_rating: prodrating,
        qty_sold: qtysold,
      },
    ])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins cant be loaded");
  }
  console.log("done");
  return { data };
}

export async function GetData({sortBy,page=null}) {

  const [col,how]=sortBy?sortBy.split("-"):["",""]
  // console.log(col,how)
  let q=supabase.from("db_produk").select("*", { count: 'exact', head: false });

  if(col&&how){
    q=q.order(col,{ ascending: how==="asc" })
    // console.log(col,how)
  }
  if(page){
    q=q.range((page-1)*DATA_PER_PAGE, page*DATA_PER_PAGE-1)
  } else {
    q=q.range(0,DATA_PER_PAGE-1)
  }


  const { data=[], error ,count} = await q
  if (error) {
    console.error(error);
    throw new Error("items cant be loaded");
  }
  console.log('count=',count)
  return {count,data};
}

export async function GetDataItem(id) {
  let { data, error } = await supabase.from("db_produk").select("*").eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("this item cant be loaded");
  }
  return data[0];
}

export async function PostOrder(orderUserData) {
  const { data, error } = await supabase
    .from("db_order")
    .insert([orderUserData])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cant create order");
  }
  return { data, error };
}

export async function UpdateOrder(column, value, dataUpdate) {
  console.log(column)
  console.log(value,)
  console.log(dataUpdate)
  const { data, error } = await supabase
    .from("db_order")
    .update(dataUpdate)
    .eq(column, value)
    .select();
  return { data, error };
}

export async function GetOrder(id){
  // console.log(id)
  let { data, error } = await supabase.from("db_order").select("*").eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("this item cant be loaded");
  }
  // console.log(data)
  return data[0];
}


export function prettynum(num) {
  return (
    "Rp. " +
    num
      .toString()
      .split("")
      .reverse()
      .map((each, index) => {
        return index !== 0 && index % 3 === 0 ? each + "," : each;
      })
      .reverse()
      .join("")
  );
}


