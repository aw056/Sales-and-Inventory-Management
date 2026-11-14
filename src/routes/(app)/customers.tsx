import { createFileRoute } from "@tanstack/react-router";
import { Info, Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "#/components/ui/empty";
import { Field, FieldGroup } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Select } from "#/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";

export const Route = createFileRoute("/(app)/customers")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Customers</h2>
					<p className="font-light text-muted-foreground text-sm">
						Customer details are optional and collected only as needed.
					</p>
				</div>
				<div className="place-self-end flex items-center gap-2">
					<Button size="lg">
						<Plus /> <span>Add customer</span>
					</Button>
				</div>
			</div>

			<Card>
				<CardHeader>
					<FieldGroup>
						<div className="grid grid-cols-6 gap-4">
							<Field className="col-span-2">
								<Input placeholder="Search customer..." />
							</Field>
							<Field orientation="horizontal">
								<Button size="lg">Search</Button>
								<Button size="lg" variant="ghost">
									Reset
								</Button>
							</Field>
						</div>
					</FieldGroup>
				</CardHeader>

				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead></TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Phone</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Notes</TableHead>
								<TableHead>Purchases</TableHead>
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell colSpan={7}>
									<Empty>
										<EmptyHeader>
											<EmptyMedia>
												<Info />
											</EmptyMedia>
											<EmptyTitle>No data</EmptyTitle>
											<EmptyDescription>
												No data found in products.{" "}
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
