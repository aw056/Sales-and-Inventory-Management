import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import DatePickerRange from "#/components/DatePickerRange";
import ReportLowStocks from "#/components/ReportLowStocks";
import ReportProducts from "#/components/ReportProducts";
import ReportSales from "#/components/ReportSales";
import ReportStockMovements from "#/components/ReportStockMovements";
import ReportTransactions from "#/components/ReportTransactions";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "#/components/ui/field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";

export const Route = createFileRoute("/(app)/reports")({
	component: RouteComponent,
});

function RouteComponent() {
	const cardItems = [
		{
			label: "Total Sales",
			value: 1000000,
		},
		{
			label: "Completed transaction",
			value: 100,
		},
		{
			label: "Product sold",
			value: 30,
		},
		{
			label: "Low stock",
			value: 5,
		},
	];
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Reports</h2>
					<p className="text-muted-foreground font-light text-sm">
						Calculated from stored data. Total sales exclude voided
						transactions.
					</p>
				</div>
				<div className="flex items-center gap-2 place-self-end">
					<Button size="lg" variant="outline">
						<Download /> <span>Export CSV</span>
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{cardItems.map((item) => (
					<Card key={item.label}>
						<CardContent>
							<small className="text-muted-foreground">{item.label}</small>
							<h2 className="text-xl font-semibold">{item.value}</h2>
						</CardContent>
					</Card>
				))}
			</div>

			<Tabs defaultValue="sales">
				<TabsList variant="line">
					<TabsTrigger value="sales">Sales</TabsTrigger>
					<TabsTrigger value="transactions">Transactions</TabsTrigger>
					<TabsTrigger value="by product">By product</TabsTrigger>
					<TabsTrigger value="stock movement">Stock movements</TabsTrigger>
					<TabsTrigger value="low stock">Low stock</TabsTrigger>
				</TabsList>
				<FieldGroup>
					<div className="grid grid-cols-6 gap-4 mt-4">
						<Field className="col-span-2">
							<FieldLabel className="text-muted-foreground">
								Filter by date range:
							</FieldLabel>
							<DatePickerRange />
						</Field>
						<Field orientation="horizontal" className="place-self-end">
							<Button size="lg">Filter</Button>
							<Button size="lg" variant="ghost">
								Reset
							</Button>
						</Field>
					</div>
				</FieldGroup>
				<TabsContent value="sales">
					<ReportSales />
				</TabsContent>
				<TabsContent value="transactions">
					<ReportTransactions />
				</TabsContent>
				<TabsContent value="by product">
					<ReportProducts />
				</TabsContent>
				<TabsContent value="stock movement">
					<ReportStockMovements />
				</TabsContent>
				<TabsContent value="low stock">
					<ReportLowStocks />
				</TabsContent>
			</Tabs>
		</div>
	);
}
