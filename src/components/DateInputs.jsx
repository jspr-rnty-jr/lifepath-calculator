import { useEffect, useState } from "react";

const DateInputs = () => {
    const MONTHS = ['January', 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentYear = new Date().getFullYear();

    const [availableDates, setAvailableDates] = useState([]);
    const [years, setYears] = useState([]);

    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDate, setSelectedDate] = useState(1);
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const handleMonthChange = (e) => setSelectedMonth(parseInt(e.target.value, 10));
    const handleDateChange = (e) => setSelectedDate(parseInt(e.target.value, 10));
    const handleYearChange = (e) => setSelectedYear(parseInt(e.target.value, 10));

    useEffect(() => {
        // Generate an array of years from the current year back to 50 years ago
        const yearOptions = Array(currentYear - (currentYear - 50)).fill('').map((_, idx) => currentYear - idx);
        setYears(yearOptions);
    }, []);

    useEffect(() => {
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();  // Create a date object using the selected year and month, and `0` gives us the last day of the previous month
        const dateOptions = Array.from({ length: daysInMonth }, (_, i) => i + 1); // Generate an array of dates (1 to daysInMonth) and update the availableDates state
        setAvailableDates(dateOptions);
    }, [selectedMonth, selectedYear]);

    return (
     <div>
        <div>
            <label htmlFor="month">Month</label>
            <select name="month" id="month" value={selectedMonth} onChange={handleMonthChange}>
                {
                    MONTHS.map((month, i) => (
                        <option key={i} value={i + 1}>{month}</option> // i + 1 to convert from 0-indexed months
                    ))
                }
            </select>
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <select name="date" id="date" value={selectedDate} onChange={handleDateChange}>
                {
                    availableDates.map(date => (
                        <option key={date} value={date}>{date}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <label htmlFor="year">Year</label>
            <select name="year" id="year" value={selectedYear} onChange={handleYearChange}>
                {
                    years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))
                }
            </select>
        </div>
     </div>
    );
}

export default DateInputs;
