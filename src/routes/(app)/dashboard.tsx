import { createFileRoute } from "@tanstack/react-router";
import {
	Banknote,
	Box,
	ChartColumn,
	ReceiptText,
	TriangleAlert,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Field } from "#/components/ui/field";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";

export const Route = createFileRoute("/(app)/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	const items = [
		{
			label: "Today",
			value: 0,
		},
		{
			label: "Last 1 day",
			value: 1,
		},
		{
			label: "Last 7 day",
			value: 7,
		},
		{
			label: "Last 30 day",
			value: 30,
		},
	];

	const stats = [
		{
			label: "Sales",
			value: "Rp 56.000.000",
			icon: Banknote,
		},
		{
			label: "Transactions",
			value: "56.000",
			icon: ChartColumn,
		},
		{
			label: "Products",
			value: "56",
			icon: Box,
		},
		{
			label: "Low Stocks",
			value: "10",
			icon: TriangleAlert,
		},
	];

	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2 items-end">
				<div>
					<h2 className="font-heading text-2xl mb-2">Dashboard</h2>
					<p className="font-light text-muted-foreground text-sm">
						An overview of your business. Sales exclude voided transactions.
					</p>
				</div>
				<Field className="max-w-3xs place-self-end">
					<Select items={items} defaultValue={0}>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{items.map((item) => (
									<SelectItem key={item.label} value={item.value}>
										{item.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</Field>
			</div>

			<div className="grid lg:grid-cols-4 gap-4">
				{stats.map((stat) => (
					<Card key={stat.label}>
						<CardHeader className="flex justify-between items-center">
							<CardDescription>{stat.label}</CardDescription>
							<stat.icon size={20} />
						</CardHeader>
						<CardContent>
							<p className="font-semibold text-xl">{stat.value}</p>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Card className="col-span-2">
					<CardHeader>
						<CardTitle>Salses trend</CardTitle>
						<CardDescription>Sales total</CardDescription>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Top products</CardTitle>
						<CardDescription>By quantity sold</CardDescription>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
			</div>
			<div>
				<Card>
					<CardHeader>
						<CardTitle>Last transactions</CardTitle>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
			</div>
		</div>
	);
}
