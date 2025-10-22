"use client";

import { GanttChartSquare } from "lucide-react";
import Link from "next/link";

import { COLORS } from "@/constants/color.constants";

import { LogoutButton } from "./LogoutButton";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";

export function Sidebar() {
    return (
        <aside className="border-r border-r-slate-600 h-full bg-[#141515] flex flex-col justify-between">
            <div>
                <Link
                    href="/i"
                    className="flex items-center gap-2.5 p-3 border-b border-b-slate-600"
                >
                    <GanttChartSquare color={COLORS.primary} size={38} />
                    <span className="text-2xl font-bold relative">
                        RED Planner
                        <span className="absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal">
                            beta
                        </span>
                    </span>
                </Link>
                <div className="p-3 relative">
                    <LogoutButton />
                    {MENU.map((item) => (
                        <MenuItem item={item} key={item.link} />
                    ))}
                </div>
            </div>
            <footer className="text-xs opacity-40 font-normal text-center p-layout">
                2024 &copy; With love from{" "}
                <a
                    href="https://www.youtube.com/c/redgroup/?sub_confirmation=1"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary text-brand-300 transition-colors"
                >
                    RED Group
                </a>
                . <br /> All rights reserved.
            </footer>
        </aside>
    );
}
