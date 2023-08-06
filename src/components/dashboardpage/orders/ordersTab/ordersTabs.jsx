import OpenOrders from "../openOrders/OpenOrders";
import PrevTransaction from "../prevTransactions/PrevTransaction"

const OrderTabs = ({ activeRow, setActiveRow }) => {
  switch (activeRow) {
    case "openOrders":
      return <OpenOrders activeRow={activeRow} setActiveRow={setActiveRow} />;
    case "prevTransactions":
      return <PrevTransaction  activeRow={activeRow} setActiveRow={setActiveRow} />;
    default:
      return <OpenOrders />;
  }
};
export default OrderTabs;
