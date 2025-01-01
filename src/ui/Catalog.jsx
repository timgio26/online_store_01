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
      <div className="bg-primary-200 flex flex-col justify-between w-72">
        <Sidecart />
        <BasicModal />
      </div>
      <div className="bg-primary-100 flex-1 px-10 py-5 overflow-scroll">
        <Sort />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
