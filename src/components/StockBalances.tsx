import { Info } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "./ui/empty";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export default function StockBalances() {
	return (
		<Card>
			<CardHeader>
				<FieldGroup>
					<div className="grid grid-cols-6 gap-4">
						<Field className="col-span-2">
							<Input placeholder="Search product..." />
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
							<TableHead>Products</TableHead>
							<TableHead>Balance</TableHead>
							<TableHead>Condition</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell colSpan={5}>
								<Empty>
									<EmptyHeader>
										<EmptyMedia>
											<Info />
										</EmptyMedia>
										<EmptyTitle>No data</EmptyTitle>
										<EmptyDescription>
											No data found in stock balances.{" "}
										</EmptyDescription>
									</EmptyHeader>
								</Empty>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
