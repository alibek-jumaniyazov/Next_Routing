import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
    title: "Next Typescript",
    description: "Mini project Api",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <Header />
                {children}
            </body>
        </html>
    );
}
