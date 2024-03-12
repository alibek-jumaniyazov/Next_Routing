import { getNewsCategory } from "@/api/api";
import React, { useEffect, useState } from "react";

type Props = {
    params: {
        name: string;
    };
};

export type TNews = {
   id:number,
   img:string,
   title:string
};


export default function page({ params: { name } }: Props) {

    const [news , setNews] = useState<TNews[]>([])

    // useEffect(() => {
       const data = getNewsCategory(name)
       console.log(data);
       
    // } ,[])

    

    return (
        <div className="Category">
            <div className=""></div>
            {name}
        </div>
    );
}
