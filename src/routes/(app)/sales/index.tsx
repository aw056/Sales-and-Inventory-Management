import { createFileRoute } from "@tanstack/react-router";
import { Download, Inbox, Info } from "lucide-react";
import DatePickerRange from "#/components/DatePickerRange";
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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";

export const Route = createFileRoute("/(app)/sales/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Sales History</h2>
					<p className="font-light text-muted-foreground text-sm">
						All sales transactions and their status.
					</p>
				</div>
				<div className="flex items-center gap-2 place-self-end">
					<Button variant="outline" size="lg">
						<Download />
						<span>CSV</span>
					</Button>
					<Button size="lg">New Sale</Button>
				</div>
			</div>
			<Card>
				<CardHeader>
					<FieldGroup>
						<div className="grid grid-cols-6 gap-4">
							<Field className="col-span-2">
								<Input placeholder="Search transactions number..." />
							</Field>
							<Field>
								<Select>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem></SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
							<Field>
								<DatePickerRange />
							</Field>
							<Field>
								<div className="flex gap-2">
									<Button size="lg">Search</Button>
									<Button variant="ghost" size="lg">
										Reset
									</Button>
								</div>
							</Field>
						</div>
					</FieldGroup>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Number</TableHead>
								<TableHead>Time</TableHead>
								<TableHead>Customers</TableHead>
								<TableHead>Method</TableHead>
								<TableHead>Total</TableHead>
								<TableHead>Status</TableHead>
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
												Nothing found in sales history.{" "}
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
