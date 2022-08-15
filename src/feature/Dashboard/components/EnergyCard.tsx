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

export { EnergyCard };
