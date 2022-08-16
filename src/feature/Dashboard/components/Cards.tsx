import { Icons } from "../../../assets";
import { Card, ChartValue } from "./Card";

const EnergyCard = (props: ChartValue) => {
  return (
    <Card
      chartColor={"var(--color-white)"}
      icon={<Icons.Energy />}
      title="Energy"
      {...props}
    />
  );
};

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

export { EnergyCard, BreakFluidCard, RangeCard, TireWearCard };
