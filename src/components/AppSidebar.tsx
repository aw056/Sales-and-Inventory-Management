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
			label: "Cashier (POS)",
			url: "/sales/new",
			icon: ShoppingCart,
		},
		{
			label: "Sale",
			url: "/sale",
			icon: ReceiptText,
		},
		{
			label: "Product",
			url: "/Product",
			icon: Box,
		},
		{
			label: "Category",
			url: "/category",
			icon: Tags,
		},
		{
			label: "Inventory",
			url: "/inventory",
			icon: Boxes,
		},
		{
			label: "Customer",
			url: "/customer",
			icon: Users,
		},
		{
			label: "Supplier",
			url: "/supplier",
			icon: Truck,
		},
		{
			label: "Report",
			url: "/report",
			icon: ChartColumnIcon,
		},
		{
			label: "User",
			url: "/user",
			icon: UserCog,
		},
		{
			label: "Setting",
			url: "/setting",
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
