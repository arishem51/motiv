import { Icons } from "../../../assets";
import { Card, ChartValue } from "./Card";

const TireWearCard = (props: ChartValue) => {
  return (
    <Card
      {...props}
      variant="secondary"
      chartColor="var(--color-yellow)"
      icon={<Icons.TireWear />}
      title="Tire Wear"
    />
  );
};

export { TireWearCard };
