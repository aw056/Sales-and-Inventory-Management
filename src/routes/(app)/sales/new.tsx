import { createFileRoute } from "@tanstack/react-router";
import { Inbox, Search, ShoppingCart } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { Field, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";

export const Route = createFileRoute("/(app)/sales/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div>
				<h2 className="font-heading text-2xl mb-2">Cashier</h2>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-2">
					<div className="mb-4">
						<Field>
							<div className="relative">
								<Input
									placeholder="Search products by name or SKU..."
									className="ps-10"
								/>
								<Search
									className="absolute top-2.5 left-2.5 text-muted-foreground"
									size={16}
								/>
							</div>
						</Field>
					</div>
					<div className="grid grid-cols-3 gap-4">
						{Array.from({ length: 10 }).map((i) => (
							<Card key={i}>
								<CardHeader>
									<CardTitle>Mineral water 600ml</CardTitle>
									<CardDescription>MIN-001</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex justify-between items-end gap-8">
										<p className="font-semibold">IDR 3.500</p>
										<small className="text-muted-foreground">
											235 pcs in stock
										</small>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
				<div>
					<Card>
						<CardHeader className="border-b">
							<CardTitle>
								<div className="flex items-center gap-4">
									<ShoppingCart size={20} />
									<span>Chart</span>
								</div>
							</CardTitle>
						</CardHeader>
						<div className="border-b">
							<CardContent>
								<Empty>
									<EmptyHeader>
										<EmptyMedia variant="icon">
											<Inbox />
										</EmptyMedia>
										<EmptyTitle>Your chart is empty</EmptyTitle>
										<EmptyDescription>
											Pick products on the left to start a sale.
										</EmptyDescription>
									</EmptyHeader>
								</Empty>
							</CardContent>
						</div>
						<div className="px-4 grid gap-4">
							<Tabs className="w-full">
								<TabsList className="w-full">
									<TabsTrigger value="cash">Cash</TabsTrigger>
									<TabsTrigger value="transfer">Transfer</TabsTrigger>
								</TabsList>
								<TabsContent value="cash">
									<Field>
										<FieldLabel>Cash received (IDR)</FieldLabel>
										<Input />
									</Field>
								</TabsContent>
							</Tabs>
							<div>
								<div className="flex items-center justify-between">
									<h2 className="font-semibold text-xl">Total</h2>
									<h2 className="font-semibold text-xl">IDR 0</h2>
								</div>
								<small className="text-muted-foreground">
									The final total is recalculated by the server when the sale is
									confirmed.
								</small>
							</div>
							<Button size="lg">Pay</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
