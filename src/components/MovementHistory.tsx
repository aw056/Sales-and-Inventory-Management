import { Download, Info } from "lucide-react";
import DatePickerRange from "./DatePickerRange";
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
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export default function MovementHistory() {
	return (
		<Card>
			<CardHeader>
				<FieldGroup>
					<div className="grid grid-cols-6 gap-4">
						<Field>
							<Select>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem></SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Field>
							<Select>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem></SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Field>
							<DatePickerRange />
						</Field>
						<Field orientation="horizontal">
							<Button size="lg">Search</Button>
							<Button size="lg" variant="ghost">
								Reset
							</Button>
						</Field>
						<Field className="col-start-6">
							<Button size="lg" variant="outline">
								<Download /> <span>Export CSV</span>
							</Button>
						</Field>
					</div>
				</FieldGroup>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Time</TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Qty</TableHead>
							<TableHead>Balance</TableHead>
							<TableHead>Reason/Note</TableHead>
							<TableHead>Performed by</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell colSpan={7}>
								<Empty>
									<EmptyHeader>
										<EmptyMedia>
											<Info />
										</EmptyMedia>
										<EmptyTitle>No data</EmptyTitle>
										<EmptyDescription>
											No data found in movement history
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
