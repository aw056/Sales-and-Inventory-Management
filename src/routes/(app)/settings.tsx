import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div>
				<h2 className="font-heading text-2xl mb-2">Business Settings</h2>
				<p className="font-light text-muted-foreground text-sm">
					Configuration your business.
				</p>
			</div>
		</div>
	);
}
