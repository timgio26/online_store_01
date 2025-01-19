import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { GetData } from "../utils/utils";
import { Sidecart } from "./Sidecart";
import { ItemCard } from "./ItemCard";
import { BasicModal } from "./Modals";
import { Sort } from "./Sort";
import { Paginate } from "./Paginate";
import { useMemo } from "react";
import { LoadingContainer } from "./LoadingContainer";

import { Carousel } from "./Carousel";

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


//Projectandi26!

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const page = searchParams.get("page");
  // console.log(sortBy)
  const {isLoading,isPending,data={},error,} = useQuery({
    queryKey: ["product", sortBy,page],
    queryFn: () => GetData({ sortBy,page}),
  });

  // console.log(data)

  const {data:db_produk=[],count=0}= data

  const db_produk_memo = useMemo(()=>db_produk,[db_produk])



  return (
    // <div className="flex flex-row h-svh overflow-y-auto">
    <>
      <div className="bg-primary-100 hidden md:flex md:flex-col justify-between w-72">
        <Sidecart />
        <BasicModal />
      </div>
      <div className="flex-1 px-1 md:px-10 py-2 overflow-scroll">
        <Carousel slides={SLIDES} options={OPTIONS} />
        <Sort />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-3">
          {!isLoading ? (
            db_produk_memo.map((each) => <ItemCard key={each.id} data={each} />)
          ) : (
            <LoadingContainer/>
          )}
        </div>
        {!isLoading && <Paginate count={count}/>}
        
      </div>
    </>

    // </div>
  );
}
