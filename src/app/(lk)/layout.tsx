import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.scss";
import { SITE_NAME } from "@/constants/seo.constants";
import { TanstackProvider } from "../../providers/tanstackProvider";
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";

const zen = Noto_Sans({
    subsets: ["cyrillic", "latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-zen",
    style: ["normal"],
});

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <TanstackProvider>
                    <DashboardLayout>{children}</DashboardLayout>
                </TanstackProvider>
            </body>
        </html>
    );
}
