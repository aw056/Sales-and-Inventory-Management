import { createFileRoute } from "@tanstack/react-router";
import { Banknote, ChartColumn, ReceiptText } from "lucide-react";
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

	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2 items-end">
				<div>
					<h2 className="font-heading text-2xl mb-2">Dashboard</h2>
					<p className="font-light text-muted-foreground text-sm">
						Ringkasan operasional bisnis Anda. Penjualan tidak termasuk
						transaksi yang dibatalkan.
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
				<Card>
					<CardHeader className="flex justify-between items-center">
						<CardDescription>Total Penjualan</CardDescription>
						<Banknote size={20} />
					</CardHeader>
					<CardContent>
						<p className="font-semibold text-xl">Rp 123.000</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex justify-between items-center">
						<CardDescription>Total Transaksi</CardDescription>
						<ChartColumn size={20} />
					</CardHeader>
					<CardContent>
						<p className="font-semibold text-xl">123</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex justify-between items-center">
						<CardDescription>Total Transaksi</CardDescription>
						<ChartColumn size={20} />
					</CardHeader>
					<CardContent>
						<p className="font-semibold text-xl">123</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex justify-between items-center">
						<CardDescription>Total Transaksi</CardDescription>
						<ChartColumn size={20} />
					</CardHeader>
					<CardContent>
						<p className="font-semibold text-xl">123</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
