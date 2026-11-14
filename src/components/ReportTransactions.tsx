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

export default function ReportTransactions() {
	return (
		<Card>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Number</TableHead>
							<TableHead>Time</TableHead>
							<TableHead>Method</TableHead>
							<TableHead>Total</TableHead>
							<TableHead>Status</TableHead>
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
											No data found in report transactions.{" "}
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
