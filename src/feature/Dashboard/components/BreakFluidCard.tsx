import { Icons } from "../../../assets";
import { Card, ChartValue } from "./Card";

const BreakFluidCard = (props: ChartValue) => {
  return (
    <Card
      {...props}
      variant="secondary"
      chartColor="var(--color-purple)"
      icon={<Icons.BreakFluid />}
      title="Break fluid"
    />
  );
};

export { BreakFluidCard };
