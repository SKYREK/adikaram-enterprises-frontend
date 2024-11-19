"use client";
import React, { useState } from "react";
import { FaCog, FaFileInvoice, FaHome, FaRoute, FaSignOutAlt } from "react-icons/fa";
import { FaShop, FaUserGroup } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";

export default function AdminLayout() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div
				className={`${
					isOpen ? "w-64" : "w-16"
				} bg-gray-800 text-white flex flex-col transition-all duration-300`}
			>
				{/* Sidebar Header */}
				<div className="flex items-center gap-2 p-4">
					<img
						src="/favicon.png"
						alt="Adikaram Enterprises Logo"
						className="w-8 h-8 cursor-pointer"
						onClick={toggleSidebar} // Logo acts as the toggle button
					/>
					{isOpen && (
						<div className="flex items-center justify-between w-full">
							<h1 className="text-lg font-bold whitespace-nowrap">
								Adikaram Enterprises
							</h1>
						</div>
					)}
				</div>

				{/* Menu Items */}
				<div className="flex-1 flex flex-col gap-4 mt-4">
					<NavItem icon={<FaHome />} label="Home" isOpen={isOpen} />
					<NavItem icon={<FaUserGroup />} label="Users" isOpen={isOpen} />
					<NavItem icon={<FaRoute />} label="Routes" isOpen={isOpen} />
                    <NavItem icon={<FaShop />} label="Shops" isOpen={isOpen} />
                    <NavItem icon={<MdWarehouse />} label="Stock" isOpen={isOpen} />
                    <NavItem icon={<FaFileInvoice />} label="Bills" isOpen={isOpen} />
					<NavItem icon={<FaCog />} label="Settings" isOpen={isOpen} />
					<NavItem icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 bg-gray-100 p-6">
				<h1 className="text-2xl font-bold">Admin Page Content</h1>
				{/* Add your main content here */}
			</div>
		</div>
	);
}

interface NavItemProps {
	icon: JSX.Element;
	label: string;
	isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isOpen }) => {
	return (
		<div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer">
			<div className="text-xl">{icon}</div>
			{isOpen && <span className="text-sm">{label}</span>}
		</div>
	);
};
