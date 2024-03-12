import { categoryList } from "@/api/category";
import Link from "next/link";
import React from "react";
type Props = {};

export default function Header({}: Props) {
    console.log(categoryList);

    return (
        <div className="Header">
            <div className="categorys">
                {categoryList.map((item) => (
                    <Link href={`/category/${item.path}`} key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
