import { useEffect } from 'react';

export default function NotFoundPage(){
    useEffect(()=>{
        document.title = 'Not found - Instagram';
    },[])
    return(
    <div className="bg-gray-background">
        <div className="mx-auth max-w-screen-lg">
            <p className="text-center text-2xl">Not found</p>
        </div>
    </div>);
}