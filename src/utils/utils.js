import { faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dzanjlfmchzdirukrrlt.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

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

export async function GetData({sortBy}) {
  console.log(sortBy)
  const [col,how]=sortBy?sortBy.split("-"):["",""]
  // console.log(col,how)
  let q=supabase.from("db_produk").select("*", { count: 'exact', head: false });

  if(col&&how){
    q=q.order(col,{ ascending: how==="asc" })
    // console.log(col,how)
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

export const DATA_PER_PAGE =20
