import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

export default function HeaderSidebar() {
	return (
		<div className="border-b shadow h-10 flex items-center justify-between px-6 py-6">
			<div className="flex items-center gap-4">
				<SidebarTrigger size="icon-lg" />
				<span className="font-bold text-sm">Dashboard</span>
			</div>
			<Avatar>
				<AvatarImage />
				<AvatarFallback>OW</AvatarFallback>
			</Avatar>
		</div>
	);
}
