import { Info } from "lucide-react";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "#/components/ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";

export default function ProductTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Products</TableHead>
					<TableHead>Categories</TableHead>
					<TableHead>Selling Price</TableHead>
					<TableHead>Stock</TableHead>
					<TableHead>Status</TableHead>
					<TableHead></TableHead>
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
								<EmptyDescription>No data found in products. </EmptyDescription>
							</EmptyHeader>
						</Empty>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
