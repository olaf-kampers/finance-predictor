import { FinanceModel } from './models/FinanceModel.js';
import { FinanceView } from './views/FinanceView.js';
import { AnimationView } from './views/AnimationView.js';
import { FinanceController } from './controllers/FinanceController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new FinanceModel();
    const view = new FinanceView();
    const animationView = new AnimationView();
    const controller = new FinanceController(model, view, animationView);
});