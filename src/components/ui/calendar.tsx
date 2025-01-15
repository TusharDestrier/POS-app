import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const [selectedYear, setSelectedYear] = React.useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = React.useState<number>(new Date().getMonth());

  // Year Range: 2000 - 2050 (customize as needed)
  const years = Array.from({ length: 81 }, (_, i) => 1980 + i);
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(e.target.value));
  };

  return (
    <div className="">
      {/* 🔥 Year and Month Dropdown */}
      <div className="flex justify-center space-x-2 p-3 pb-0">
        {/* 📅 Year Selector */}
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border rounded-md p-1 text-sm flex-1 "
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* 📅 Month Selector */}
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="border rounded-md p-1 text-sm flex-1"
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* 🗓️ Updated DayPicker */}
      <DayPicker
        showOutsideDays={showOutsideDays}
        month={new Date(selectedYear, selectedMonth)} // 📌 Set month & year dynamically
        onMonthChange={(date) => {
          setSelectedYear(date.getFullYear());
          setSelectedMonth(date.getMonth());
        }}
        className={cn('p-3', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: cn(
            'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
            props.mode === 'range'
              ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              : '[&:has([aria-selected])]:rounded-md'
          ),
          day: cn(buttonVariants({ variant: 'ghost' }), 'h-8 w-8 p-0 font-normal aria-selected:opacity-100'),
          day_selected: 'bg-primary text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground',
          day_outside: 'text-muted-foreground opacity-50',
          day_disabled: 'text-muted-foreground opacity-50',
          ...classNames,
        }}
        components={{
          IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
          IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = 'Calendar';
export { Calendar };
