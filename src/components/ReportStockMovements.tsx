import { Info } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "./ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export default function ReportStockMovements() {
	return (
		<Card>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Time</TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Qty</TableHead>
							<TableHead>Performed by</TableHead>
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
											No data found in report stock movements.{" "}
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
