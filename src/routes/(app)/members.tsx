import { createFileRoute } from "@tanstack/react-router";
import { Info, Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "#/components/ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";

export const Route = createFileRoute("/(app)/members")({
	component: RouteComponent,
});

function RouteComponent() {
	const roleItems = [
		{
			title: "Owner",
			description: "Full access: settings, members, reports, voiding sales",
		},
		{
			title: "Inventory Staff",
			description: "Products, categories, inventory, suppliers and reports",
		},
		{
			title: "Cashier",
			description: "POS, sales history, customers and viewing products",
		},
	];
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Members & Roles</h2>
					<p className="font-light text-muted-foreground text-sm">
						Manage who can access this business. Revoked access takes effect
						immediately.
					</p>
				</div>
				<div className="place-self-end flex items-center gap-2">
					<Button size="lg">
						<Plus /> <span>Add member</span>
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{roleItems.map((role) => (
					<Card key={role.title}>
						<CardHeader>
							<CardTitle>{role.title}</CardTitle>
							<CardDescription>{role.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>

			<Card>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead></TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Role</TableHead>
								<TableHead>Status</TableHead>
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell colSpan={6}>
									<Empty>
										<EmptyHeader>
											<EmptyMedia>
												<Info />
											</EmptyMedia>
											<EmptyTitle>No data</EmptyTitle>
											<EmptyDescription>
												No data found in members & roles.{" "}
											</EmptyDescription>
										</EmptyHeader>
									</Empty>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
