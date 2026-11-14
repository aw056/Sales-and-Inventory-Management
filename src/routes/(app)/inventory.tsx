import { createFileRoute } from "@tanstack/react-router";
import { Plus, Settings2 } from "lucide-react";
import StockBalances from "#/components/StockBalances";
import { Button } from "#/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";

export const Route = createFileRoute("/(app)/inventory")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div className="grid grid-cols-2">
				<div>
					<h2 className="font-heading text-2xl mb-2">Inventory</h2>
					<p className="text-muted-foreground font-light text-sm">
						Stock balances and movement history. Every stock change is recorded
						and traceable.
					</p>
				</div>
				<div className="flex items-center gap-2 place-self-end">
					<Button size="lg" variant="outline">
						<Settings2 /> <span>Stock adjusment</span>
					</Button>
					<Button size="lg">
						<Plus /> <span>Stock in</span>
					</Button>
				</div>
			</div>

			<Tabs defaultValue="balances">
				<TabsList variant="line">
					<TabsTrigger value="balances">Stock balances</TabsTrigger>
					<TabsTrigger value="history">Movement history</TabsTrigger>
				</TabsList>
				<TabsContent value="balances">
					<StockBalances />
				</TabsContent>
				<TabsContent value="history"></TabsContent>
			</Tabs>
		</div>
	);
}
