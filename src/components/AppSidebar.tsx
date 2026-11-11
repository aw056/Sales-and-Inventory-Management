import { Link, useRouterState } from "@tanstack/react-router";
import {
	Box,
	Boxes,
	ChartColumnIcon,
	LayoutDashboard,
	ReceiptText,
	Settings,
	ShoppingCart,
	Store,
	Tags,
	Truck,
	UserCog,
	Users,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";

export default function AppSidebar() {
	const path: string | null = useRouterState({
		select: (state) => state.location.pathname,
	});

	const features = [
		{
			label: "Dashboard",
			url: "/dashboard",
			icon: LayoutDashboard,
		},
		{
			label: "Point of sale",
			url: "/sales/new",
			icon: ShoppingCart,
		},
		{
			label: "Sales history",
			url: "/sales",
			icon: ReceiptText,
		},
		{
			label: "Products",
			url: "/Products",
			icon: Box,
		},
		{
			label: "Categories",
			url: "/categories",
			icon: Tags,
		},
		{
			label: "Inventory",
			url: "/inventory",
			icon: Boxes,
		},
		{
			label: "Customers",
			url: "/customers",
			icon: Users,
		},
		{
			label: "Suppliers",
			url: "/suppliers",
			icon: Truck,
		},
		{
			label: "Reports",
			url: "/reports",
			icon: ChartColumnIcon,
		},
		{
			label: "Member & roles",
			url: "/members",
			icon: UserCog,
		},
		{
			label: "Business settings",
			url: "/settings",
			icon: Settings,
		},
	];

	return (
		<Sidebar variant="inset">
			<SidebarHeader>
				<div className="flex items-center gap-2">
					<div className="bg-emerald-400 p-2 rounded-lg">
						<Store />
					</div>
					<div className="grid">
						<h2 className="text-xl font-semibold tracking-widest">SAIM</h2>
						<small className="text-muted-foreground">Sales & Inventory</small>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Features</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{features.map((feature) => (
								<SidebarMenuItem key={feature.label}>
									<SidebarMenuButton
										render={<Link to={feature.url} />}
										isActive={path === feature.url}
										className={
											path === feature.url ? "" : "text-muted-foreground"
										}
									>
										<feature.icon />
										<span>{feature.label}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
