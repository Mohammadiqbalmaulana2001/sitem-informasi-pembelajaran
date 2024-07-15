import NavLink from "@/Components/NavLink";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div
            className={`${
                isOpen ? "block" : "hidden"
            } fixed inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-800 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
        >
            <div className="flex items-center justify-center mt-8">
                <div className="flex items-center">
                    <span className="text-white text-2xl mx-2 font-semibold">
                        Dashboard
                    </span>
                </div>
            </div>

            <nav className="mt-10">
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    href={route("welcome")}
                    active={route().current("welcome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Settings
                </NavLink>
                <NavLink
                    href={route("welcome")}
                    active={route().current("welcome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    Profile
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
