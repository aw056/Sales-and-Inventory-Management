import { createFileRoute } from "@tanstack/react-router";
import { Info, Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
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

export const Route = createFileRoute("/(app)/categories")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Categories</h2>
					<p className="font-light text-muted-foreground text-sm">
						Group products so they're easy to find
					</p>
				</div>
				<div className="place-self-end">
					<Button size="lg">
						<Plus /> <span>Add category</span>
					</Button>
				</div>
			</div>

			<Card>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead></TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Products</TableHead>
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell colSpan={4}>
									<Empty>
										<EmptyHeader>
											<EmptyMedia>
												<Info />
											</EmptyMedia>
											<EmptyTitle>No data</EmptyTitle>
											<EmptyDescription>
												No data found in categories.{" "}
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
