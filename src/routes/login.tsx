import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Boxes, ShieldCheck, Store } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid min-h-screen lg:grid-cols-2">
			<div className="flex flex-col justify-between bg-accent p-12">
				<div className="flex items-center gap-4">
					<div className="bg-emerald-400 p-2 rounded-lg">
						<Store />
					</div>
					<span className="text-lg font-semibold">
						Sales & Inventory Management
					</span>
				</div>
				<div>
					<h2 className="text-4xl font-semibold leading-tight tracking-tight">
						Stok akurat. Penjualan cepat.
						<br />
						Laporan jelas.
					</h2>
					<ul className="mt-8 space-y-2">
						{[
							[Boxes, "Setiap perubahan stok tercatat dan dapat diaudit"],
							[ShieldCheck, "Akses sesuai peran: owner, staf, dan kasir"],
							[BarChart3, "Ringkasan penjualan dan peringatan stok rendah"],
						].map(([I, t], i) => {
							const Icon = I as typeof Boxes;
							return (
								<li key={i} className="flex items-center gap-3">
									<Icon className="size-5 shrink-0 text-brand-500" />
									{t as string}
								</li>
							);
						})}
						<li></li>
					</ul>
				</div>
				<div>
					<p>Untuk usaha kecil dan menengah</p>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Card className="min-w-sm">
					<CardContent>
						<FieldSet>
							<FieldLegend>Masuk ke akun anda</FieldLegend>
							<FieldDescription>
								Gunakan akun yang terdaftar untuk login
							</FieldDescription>
							<FieldGroup>
								<Field>
									<FieldLabel>Email</FieldLabel>
									<Input />
								</Field>
								<Field>
									<FieldLabel>Password</FieldLabel>
									<Input />
								</Field>
							</FieldGroup>
							<Field>
								<Button size="lg">Login</Button>
							</Field>
						</FieldSet>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
