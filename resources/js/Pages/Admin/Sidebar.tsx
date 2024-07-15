import { createContext, ReactNode, useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import profile from "../../../assets/profile.png";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

const SidebarContext = createContext({
    expanded: true,
});
const Sidebar: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const [expanded, setExpanded] = useState(true);
    const { auth } = usePage<PageProps>().props;
    return (
        <div className="hidden sm:flex">
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-2xl">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img
                            src={logo}
                            className={`overflow-hidden transition-all ${
                                expanded ? "w-32" : "w-0"
                            }`}
                        />
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" />
                        <div
                            className={`flex justify-between items-center overflow-hidden transition-all ${
                                expanded ? "w-52 ml-3" : "w-0"
                            } `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold">
                                    {auth.user.name}
                                </h4>
                                <span className="text-xs text-gray-600">
                                    {auth.user.email}
                                </span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;

type SidebarItemProps = {
    icon: ReactNode;
    text: string;
    href: string;
    className?: string;
};

export function SidebarItem({ icon, text, href, className }: SidebarItemProps) {
    const { expanded } = useContext(SidebarContext);
    return (
        <Link
            className={`relative hidden sm:flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${className}`}
            href={href}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>
            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </Link>
    );
}
