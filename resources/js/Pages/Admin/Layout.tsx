import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import Navbar from "./Navbar";
import {
    Calendar,
    Flag,
    Home,
    Layers,
    LayoutDashboard,
    LifeBuoy,
    Settings,
    StickyNote,
} from "lucide-react";
import { usePage } from "@inertiajs/react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { url } = usePage();
    const { auth }: any = usePage().props;
    const roles = auth.user.roles;
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem
                    icon={<Home size={20} />}
                    text="Home"
                    href="/admin/home"
                    className={
                        url === "/admin/home"
                            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                            : "hover:bg-indigo-50 text-gray-600"
                    }
                />

                <SidebarItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    href="/admin/dashboard"
                    className={
                        url === "/admin/dashboard"
                            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                            : "hover:bg-indigo-50 text-gray-600"
                    }
                />
                <SidebarItem
                    icon={<StickyNote size={20} />}
                    text="Profile"
                    href="/admin/profile"
                    className={
                        url === "/admin/profile"
                            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                            : "hover:bg-indigo-50 text-gray-600"
                    }
                />
                <SidebarItem
                    icon={<Calendar size={20} />}
                    text="Calendar"
                    href="/admin/calendar"
                />
                <SidebarItem
                    icon={<Layers size={20} />}
                    text="Tasks"
                    href="/admin/tasks"
                />
                <SidebarItem
                    icon={<Flag size={20} />}
                    text="Reporting"
                    href="/admin/reporting"
                />
                <hr className="my-3" />
                <SidebarItem
                    icon={<Settings size={20} />}
                    text="Settings"
                    href="/admin/settings"
                />
                <SidebarItem
                    icon={<LifeBuoy size={20} />}
                    text="Help"
                    href="/admin/help"
                />
            </Sidebar>
            <div className="flex flex-col w-full bg-gray-200">
                <Navbar />
                <main className="my-3 mx-3 px-3 py-3 bg-white rounded-md">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
