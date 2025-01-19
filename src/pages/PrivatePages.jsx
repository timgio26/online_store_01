import { useNavigate } from "react-router";
import { LoadingContainer } from "../ui/LoadingContainer";
import { useGetUser } from "../utils/useOrderApi";
import { useEffect } from "react";

export function PrivatePages({children}){

    const nav=useNavigate()
    const { isLoading, data = {}, error } = useGetUser();

    console.log('isloading',isLoading)
    console.log('data',data)
    console.log('error',error)


    useEffect(()=>{
        if(!isLoading && !error && data?.user===null) nav('/auth')
    },[isLoading,error,data,nav])


    if(isLoading)return <LoadingContainer/>
    if(error)return <div><h1>{"Ops there is error, please refresh :)"}</h1></div>
    

    if(!isLoading && !error && data?.user!==null){
        return(
            children
        )
    }
}