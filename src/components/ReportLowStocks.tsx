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

export default function ReportLowStocks() {
	return (
		<Card>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Categories</TableHead>
							<TableHead>Stock</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell colSpan={4}>
								<Empty>
									<EmptyHeader>
										<EmptyMedia>
											<Info />
										</EmptyMedia>
										<EmptyTitle>No data</EmptyTitle>
										<EmptyDescription>
											No data found in report low stocks.{" "}
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
