import EarningCard from "./EarningsCard/EarningsCard.jsx";
import SalesCard from "./SalesCard/SalesCard.jsx";
import OrdersCard from "./OrdersCard/OrdersCard.jsx";
import ConversionCard from "./ConversionCard/ConversionCard.jsx";
import RevenueSourceCard from "./RevenueSourceCard/RevenueSourceCard.jsx";
import CustomerHabitsCard from "./CustomerHabitsCard/CustomerHabitsCard.jsx";

import "./AnalyticsGridSection.css";

const AnalyticsGridSection = () => {
  return (
    <div className="analytics-grid">
      <EarningCard />
      <SalesCard />
      <OrdersCard />
      <ConversionCard />
      <RevenueSourceCard />
      <CustomerHabitsCard />
    </div>
  );
};
export default AnalyticsGridSection;
