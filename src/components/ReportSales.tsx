import { Info } from "lucide-react";
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

export default function ReportSales() {
	return (
		<Card>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Transactions</TableHead>
							<TableHead>Total Sales</TableHead>
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
											No data found in report sales.{" "}
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
