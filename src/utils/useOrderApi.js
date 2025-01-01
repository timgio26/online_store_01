import { useMutation, useQuery } from "@tanstack/react-query";
import { GetOrder, PostOrder as PostOrderApi , UpdateOrder as UpdateOrderApi} from "./utils";

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