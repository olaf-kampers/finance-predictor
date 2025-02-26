export class FinanceModel {
    constructor() {
        this.months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.currentYear = new Date().getFullYear();
        this.yearRange = 50;
    }

    calculateMonthsBetweenDates(startMonth, startYear, endMonth, endYear) {
        return (endYear - startYear) * 12 + (endMonth - startMonth);
    }

    calculateFutureValue(startingValue, annualReturn, numberOfMonths, monthlyContribution) {
        const yearlyReturn = annualReturn / 100;
        const monthlyReturn = yearlyReturn / 12;
        let futureValue = startingValue;

        for (let x = 0; x < numberOfMonths; x++){
            futureValue *= (1 + monthlyReturn);
            futureValue += monthlyContribution;
        }

        return futureValue;
    }

    getMonths() {
        return this.months;
    }

    getYearRange() {
        const years = [];
        for (let year = this.currentYear; year <= this.currentYear + this.yearRange; year++) {
            years.push(year);
        }
        return years;
    }

    validateDateRange(startMonth, startYear, endMonth, endYear) {
        const months = this.calculateMonthsBetweenDates(startMonth, startYear, endMonth, endYear);
        return months > 0;
    }
}