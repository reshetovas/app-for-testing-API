import React from 'react';
import RequestsRevo from "./components/requestsCase"
import ContractRevo from "./components/contractCase"
import OutPaymentRevo from "./components/outPaymentCase"
import PaymentPlanRevo from "./components/paymentPlanCase"
import IncPaymentRevo from "./components/incPaymentCase"
import CalculationRevo from "./components/calculationCase"
import {RequestsControllers, ContractControllers, OutgoinigPaymentControllers, PaymentPlanControllers, IncomingPaymentControllers, CalculationControllers} from "./controllers/index.js"

function App() {
  return (
    <React.Fragment>
    <RequestsRevo pushRequests={() => RequestsControllers.pushRequests()}/>
    <ContractRevo pushContract={() => ContractControllers.pushContract()}/>
    <OutPaymentRevo pushOutPayment={() => OutgoinigPaymentControllers.pushOutPayment()}/>
    <PaymentPlanRevo pushPaymentPlan={() => PaymentPlanControllers.pushPaymentPlan()}/>
    <IncPaymentRevo pushIncPayment={() => IncomingPaymentControllers.pushIncPayment()}/>
    <CalculationRevo pushCalculation={() => CalculationControllers.pushCalculation()}/>
    </React.Fragment>
  );
}

export default App;