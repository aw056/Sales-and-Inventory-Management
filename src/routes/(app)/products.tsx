import { createFileRoute } from "@tanstack/react-router";
import { Download, Info, Plus } from "lucide-react";
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

export const Route = createFileRoute("/(app)/products")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Products</h2>
					<p className="font-light text-muted-foreground text-sm">
						Product catalog with current stock from inventory records.
					</p>
				</div>
				<div className="place-self-end flex items-center gap-2">
					<Button variant="outline" size="lg">
						<Download /> <span>Export CSV</span>
					</Button>
					<Button size="lg">
						<Plus /> <span>Add product</span>
					</Button>
				</div>
			</div>

			<Card>
				<CardHeader>
					<FieldGroup>
						<div className="grid grid-cols-6 gap-4">
							<Field className="col-span-2">
								<Input placeholder="Search product by kode or name..." />
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
								<TableHead>Products</TableHead>
								<TableHead>Categories</TableHead>
								<TableHead>Selling Price</TableHead>
								<TableHead>Stock</TableHead>
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
