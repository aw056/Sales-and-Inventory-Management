import { createFileRoute } from "@tanstack/react-router";
import { Download, Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import ProductFilter from "#/features/products/components/ProductFilter";
import ProductTable from "#/features/products/components/ProductTable";

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
					<ProductFilter />
				</CardHeader>

				<CardContent>
					<ProductTable />
				</CardContent>
			</Card>
		</div>
	);
}
