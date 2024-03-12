"use client";
import { getNewsCategory } from "@/api/api";
import slugify from "@/context/slug";
import { usePathname } from "next/navigation";
import { split } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import { TNews } from "../page";

type Props = {
    params: {
        name: string;
        title: string;
    };
};
// export type TNews = {
//     id: number;
//     author: string;
//     urlToImage: string;
//     title: string;
// };

export default function page({ params: { name, title } }: Props) {
    const pathname = usePathname();
    const path = pathname.split("/").length;
    const newsGetTitle = pathname.split("/")[path - 1];
    const [news, setNews] = useState<TNews>();

    console.log(title, name);
    useEffect(() => {
        async function getContent() {
            const response = await getNewsCategory({ name });
            const data = response.articles.find(
                (item: any) => slugify(item.title) === newsGetTitle
            );
            setNews(data);
        }
        getContent();
    }, []);

    return (
        <div>
            <div className="flex flex-col p-3 w-[400px] bg-slate-700 text-white cursor-pointer">
                <img
                    src={news?.urlToImage}
                    alt=""
                    className="w-[400px] h-[200px]"
                />
                <p>{news?.author}</p> <br />
                <span>{news?.title}</span>
            </div>
        </div>
    );
}
