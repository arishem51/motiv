import { Icons } from "../../../assets";
import { Card, ChartValue } from "./Card";

const RangeCard = (props: ChartValue) => {
  return (
    <Card
      title="Range"
      variant="secondary"
      chartColor="var(--color-red)"
      icon={<Icons.Range />}
      {...props}
    />
  );
};

export { RangeCard };
