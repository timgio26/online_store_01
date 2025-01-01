import { useMutation } from "@tanstack/react-query";
import { PostOrder as PostOrderApi } from "./utils";

export function usePostOrderUser(){
    const {mutate:postOrder,isPending}= useMutation({
        mutationFn:PostOrderApi,
        onSuccess:(data)=>{
            console.log('user order data create',data)
            
        },
        onError:()=>{
            console.log('fail add order user data')
        },
    })
    return {postOrder,isPending}
}