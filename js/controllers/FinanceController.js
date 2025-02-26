export class FinanceController {
    constructor(model, view, animationView) {
        this.model = model;
        this.view = view;
        this.animationView = animationView;

        // Initialize view
        this.view.populateDropdowns(
            this.model.getMonths(),
            this.model.getYearRange()
        );

        // Set up event handlers
        this.view.onSubmit(() => this.handleCalculate());
    }

    handleCalculate() {
        const formData = this.view.getFormData();

        // Validate date range
        if (!this.model.validateDateRange(
            formData.startMonth, 
            formData.startYear, 
            formData.endMonth, 
            formData.endYear
        )) {
            this.view.showError('End date must be after start date');
            return;
        }

        // Calculate number of months
        const numberOfMonths = this.model.calculateMonthsBetweenDates(
            formData.startMonth,
            formData.startYear,
            formData.endMonth,
            formData.endYear
        );

        // Calculate future value
        const futureValue = this.model.calculateFutureValue(
            formData.startingValue,
            formData.annualReturn,
            numberOfMonths,
            formData.monthlyContribution
        );

        // Update view
        this.view.displayResult(futureValue);
        this.animationView.celebrateResult(futureValue);
    }
}