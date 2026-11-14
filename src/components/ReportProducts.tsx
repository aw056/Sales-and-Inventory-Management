import React from "react";
import { Card, CardContent } from "./ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "./ui/empty";
import { Info } from "lucide-react";

export default function ReportProducts() {
	return (
		<Card>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Qty sold</TableHead>
							<TableHead>Revenue</TableHead>
							<TableHead>Gross profit</TableHead>
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
											No data found in report products.{" "}
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
