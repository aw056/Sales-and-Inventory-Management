import { addDays, format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Field } from "./ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function DatePickerRange() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(new Date().getFullYear(), 0, 20),
		to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
	});
	return (
		<Popover>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						size="lg"
						className="justify-start font-light text-xs px-2 text-ellipsis"
					>
						<CalendarDays />
						{date?.from ? (
							date.to ? (
								<div className="truncate">
									{format(date.from, "LLL dd, y")} -{" "}
									{format(date.to, "LLL dd, y")}
								</div>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				}
			/>
			<PopoverContent className="w-auto">
				<Calendar
					mode="range"
					defaultMonth={date?.from}
					selected={date}
					onSelect={setDate}
					numberOfMonths={2}
				/>
			</PopoverContent>
		</Popover>
	);
}
