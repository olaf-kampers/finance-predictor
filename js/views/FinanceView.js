export class FinanceView {
    constructor() {
        this.form = document.getElementById('calculatorForm');
        this.startMonth = document.getElementById('startMonth');
        this.startYear = document.getElementById('startYear');
        this.endMonth = document.getElementById('endMonth');
        this.endYear = document.getElementById('endYear');
        this.result = document.getElementById('result');
        this.futureValue = document.getElementById('futureValue');
    }

    populateDropdowns(months, years) {
        // Populate months
        months.forEach((month, index) => {
            [this.startMonth, this.endMonth].forEach(select => {
                select.innerHTML += `<option value="${index + 1}">${month}</option>`;
            });
        });

        // Populate years
        years.forEach(year => {
            [this.startYear, this.endYear].forEach(select => {
                select.innerHTML += `<option value="${year}">${year}</option>`;
            });
        });
    }

    getFormData() {
        return {
            startingValue: parseFloat(document.getElementById('startingValue').value),
            annualReturn: parseFloat(document.getElementById('annualReturn').value),
            monthlyContribution: parseFloat(document.getElementById('monthlyContribution').value),
            startMonth: parseInt(this.startMonth.value),
            startYear: parseInt(this.startYear.value),
            endMonth: parseInt(this.endMonth.value),
            endYear: parseInt(this.endYear.value)
        };
    }

    displayResult(value) {
        this.result.classList.add('visible');
        this.futureValue.textContent = 
            `$${value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }

    onSubmit(callback) {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            callback();
        });
    }

    showError(message) {
        alert(message);
    }
}