import { useMutation, useQuery } from "@tanstack/react-query";
import { GetOrder, GetOrder2, PostOrder as PostOrderApi ,UpdateOrder as UpdateOrderApi,
     signup as signupApi,signin as signinApi,getuser as getuserApi, signout as signoutApi} from "./utils";
import { useState } from "react";

export function usePostOrderUser(){
    const {mutate:postOrder,isPending}= useMutation({
        mutationFn:PostOrderApi,
        onSuccess:()=>{
            console.log('user order data create')
            
        },
        onError:()=>{
            console.log('fail add order user data')
        },
    })
    return {postOrder,isPending}
}

export function useUpdate(){
    const {mutate:updateOrder,isPending}= useMutation({
        mutationFn:({column,value,dataUpdate})=>UpdateOrderApi(column,value,dataUpdate),
        onSuccess:()=>{
            console.log('user order data updated')  
        },
        onError:()=>{
            console.log('fail update order user data')
        },
    })
    return {updateOrder,isPending}
}

export function useGetOrder(id){
    const {isLoading,data,error} = useQuery({
        queryFn:()=>GetOrder(id),
        queryKey:['order']
    })
    return {isLoading,data,error}
}

export function useGetOrder2(id){
    const {isLoading,data,error,refetch} = useQuery({
        queryFn:()=>GetOrder2(id),
        queryKey:['order2'],
        enabled:false
    })
    return {isLoading,data,error,refetch}
}

export function useSignup() {
    const [errMsg,setErrMsg]=useState("")
  const {mutate: signup} = useMutation({
    mutationFn: signupApi,
    onError: (error) => setErrMsg(error.message),
    onSuccess: () => console.log("sucess"),
  });
  return {signup,errMsg};
}


export function useSignIn() {
  const [errMsg, setErrMsg] = useState("");
  const { mutate: signin } = useMutation({
    mutationFn: signinApi,
    onError: (error) => setErrMsg(error.message),
    // onSuccess: (data) => {
    //   sessionStorage.setItem("session", JSON.stringify(data.data.session));
    // },
  });
  return { signin, errMsg };
}

export function useGetUser(){
    const {isLoading,data,error} = useQuery({
        queryFn: getuserApi,
        queryKey: ['user']
    })
    return {isLoading,data,error}
}

export function useSignout(){
    // console.log('signout')
    const {mutate:signout} = useMutation({
        mutationFn:signoutApi
    })
    return {signout}
}