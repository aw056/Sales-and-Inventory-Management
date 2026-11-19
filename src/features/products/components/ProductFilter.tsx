import { Button } from "#/components/ui/button";
import { Field, FieldGroup } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";

export default function ProductFilter() {
	return (
		<FieldGroup>
			<div className="grid grid-cols-6 gap-4">
				<Field className="col-span-2">
					<Input placeholder="Search product by kode or name..." />
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
				<Field orientation="horizontal">
					<Button size="lg">Search</Button>
					<Button size="lg" variant="ghost">
						Reset
					</Button>
				</Field>
			</div>
		</FieldGroup>
	);
}
