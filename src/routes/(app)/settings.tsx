import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "#/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { Textarea } from "#/components/ui/textarea";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/(app)/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid gap-8">
			<div>
				<h2 className="font-heading text-2xl mb-2">Business Settings</h2>
				<p className="font-light text-muted-foreground text-sm">
					Configuration your business profile.
				</p>
			</div>

			<Card className="max-w-xl">
				<CardContent>
					<FieldGroup className="grid grid-cols-2">
						<Field>
							<FieldLabel>Business name</FieldLabel>
							<Input placeholder="Name of your business..." />
						</Field>
						<Field>
							<FieldLabel>Short name</FieldLabel>
							<Input />
						</Field>
						<Field>
							<FieldLabel>Email</FieldLabel>
							<Input />
						</Field>
						<Field>
							<FieldLabel>Phone number</FieldLabel>
							<Input />
						</Field>
						<Field className="col-span-2">
							<FieldLabel>Address</FieldLabel>
							<Textarea />
						</Field>
						<Field className="col-span-2">
							<FieldLabel>Upload logo</FieldLabel>
						</Field>
					</FieldGroup>
					<Field>
						<Button size="lg">Save change</Button>
					</Field>
				</CardContent>
			</Card>
		</div>
	);
}
