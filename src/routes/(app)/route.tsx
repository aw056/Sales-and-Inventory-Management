import { createFileRoute, Outlet } from "@tanstack/react-router";
import AppSidebar from "#/components/AppSidebar";
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
				<main>
					<SidebarTrigger />
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
