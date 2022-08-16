import styled from "styled-components";
import BarChartStatistics from "../../../components/BarChartStatistics";
import ButtonGroupStatistics from "./ButtonGroupStatistics";
import HeaderTextStatistics from "./HeaderTextStatistics";

const data = [
  {
    name: "1 PM",
    value: 4000,
    id: "id-1",
  },

  {
    name: "2 PM",
    value: 3000,
    id: "id-2",
  },

  {
    name: "3 PM",
    value: 2000,
    id: "id-3",
  },

  {
    name: "4 PM",
    value: 2780,
    id: "id-4",
  },

  {
    name: "5 PM",
    value: 1890,
    id: "id-5",
  },

  {
    name: "6 PM",
    value: 2390,
    id: "id-6",
  },

  {
    name: "7 PM",
    value: 3490,
    id: "id-7",
  },
];

const Wrapper = styled.div`
  padding: var(--size-16) var(--size-32);
  background-color: var(--color-white);
  border-radius: var(--size-14);
  gap: var(--size-14);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 700;
  color: var(--color-dark2);
`;

const MilesStatistics = () => {
  return (
    <Wrapper>
      <HeaderTextStatistics title="Miles" />
      <Content>
        <ButtonGroupStatistics />
        <Text>256 Miles</Text>
      </Content>
      <BarChartStatistics
        dataKey="value"
        data={data}
        chartHeight={198}
        chartWidth={398}
      />
    </Wrapper>
  );
};

export default MilesStatistics;
