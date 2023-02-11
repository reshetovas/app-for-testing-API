import React from 'react';
import StartForm from "./components/Form"
import RequestsRevo from "./components/requestsCase"
import ContractRevo from "./components/contractCase"
import OutPaymentRevo from "./components/outPaymentCase"
import PaymentPlanRevo from "./components/paymentPlanCase"
import IncPaymentRevo from "./components/incPaymentCase"
import CalculationRevo from "./components/calculationCase"
import Test from "./components/test"
import {RequestsControllers, ContractControllers, OutgoinigPaymentControllers, PaymentPlanControllers, IncomingPaymentControllers, CalculationControllers} from "./controllers/index.js"

function App() {
  return (
    <React.Fragment>
    <StartForm/>
    <RequestsRevo pushRequests={() => RequestsControllers.pushRequests()}/>
    <ContractRevo pushContract={() => ContractControllers.pushContract()}/>
    <OutPaymentRevo pushOutPayment={() => OutgoinigPaymentControllers.pushOutPayment()}/>
    <PaymentPlanRevo pushPaymentPlan={() => PaymentPlanControllers.pushPaymentPlan()}/>
    <IncPaymentRevo pushIncPayment={() => IncomingPaymentControllers.pushIncPayment()}/>
    <CalculationRevo pushCalculation={() => CalculationControllers.pushCalculation()}/>
    <Test/>
    </React.Fragment>
  );
}

export default App;