import styled from "styled-components";
import BarChartStatistics from "../../components/BarChartStatistics";
import { BreakFluidCard } from "./components/BreakFluidCard";
import { EnergyCard } from "./components/EnergyCard";
import MilesStatistics from "./components/MilesStatistics";
import { RangeCard } from "./components/RangeCard";
import { TireWearCard } from "./components/TireWearCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: var(--size-30);
`;

const StatisticsWrapper = styled.div`
  margin-top: var(--size-24);
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <EnergyCard chartValue={45} />
          <RangeCard chartValue={66} />
          <BreakFluidCard chartValue={9} />
          <TireWearCard chartValue={25} />
        </CardWrapper>
        <StatisticsWrapper>
          <MilesStatistics />
        </StatisticsWrapper>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;
