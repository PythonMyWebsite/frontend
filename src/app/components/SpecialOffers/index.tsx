import PriceIcon from "../../../../public/icon-price.png";
import DeliveryIcon from "../../../../public/delivery-icon.png";
import DealIcon from "../../../../public/deal-icon.png";
import WideIcon from "../../../../public/wide-icon.png";
import ReturnICon from "../../../../public/return-icon.png";
import Item from "./Item";

const offerList = [
  {
    name: "Best prices & offers",
    desciption: "Orders $50 or more",
    icon: PriceIcon,
  },

  {
    name: "Free delivery",
    desciption: "24/7 amazing services",
    icon: DeliveryIcon,
  },

  {
    name: "Great daily deal",
    desciption: "When you sign up",
    icon: DealIcon,
  },

  {
    name: "Wide assortment",
    desciption: "Mega Discounts",
    icon: WideIcon,
  },

  {
    name: "Easy returns",
    desciption: "Within 30 days",
    icon: ReturnICon,
  },
];

function SpecialOffers() {
  return (
    <div className="px-52 mt-20 h-32 flex gap-2 justify-between mb-52">
      {offerList.map((item, index) => (
        <Item
          key={index}
          icon={item.icon}
          name={item.name}
          description={item.desciption}
        />
      ))}
    </div>
  );
}

export default SpecialOffers;
