"use client";
import { getNewsCategory } from "@/api/api";
import slugify from "@/context/slug";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
    params: {
        name: string;
    };
};

export type TNews = {
    id: number;
    author: string;
    urlToImage: string;
    title: string;
};

export default function page({ params: { name } }: Props) {
    const [news, setNews] = useState<TNews[]>([]);

    useEffect(() => {
        async function getNews() {
            const data = await getNewsCategory({ name });
            setNews(data.articles);
        }
        getNews();
    }, []);

    return (
        <div className="Category">
            <div className="flex flex-wrap gap-4 text-white">
                {news.map((item, index) => (
                    <Link
                        href={`/category/${
                            name ? name : "technology"
                        }/${slugify(item.title)}`}
                        key={index}
                    >
                        <div className="flex flex-col p-3 w-[400px] bg-slate-700  cursor-pointer">
                            <img
                                src={item.urlToImage}
                                alt=""
                                className="w-[400px] h-[200px]"
                            />
                            <p>{item.author}</p> <br />
                            <span>{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
