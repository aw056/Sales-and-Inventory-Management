import { createFileRoute, Outlet } from "@tanstack/react-router";
import AppSidebar from "#/components/AppSidebar";
import HeaderSidebar from "#/components/HeaderSidebar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "#/components/ui/sidebar";

export const Route = createFileRoute("/(app)")({
	component: AppSidebarLayout,
});

function AppSidebarLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<HeaderSidebar />
				<main className="p-8">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
