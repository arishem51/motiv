import styled from "styled-components";
import BarChartStatistics from "../../../components/BarChartStatistics";
import ButtonGroupStatistics from "./ButtonGroupStatistics";
import HeaderTextStatistics from "./HeaderTextStatistics";

const data = [
  {
    label: "1 PM",
    value: 4000,
    id: "id-1",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-1s",
  },
  {
    label: "2 PM",
    value: 3000,
    id: "id-2",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-2s",
  },
  {
    label: "3 PM",
    value: 2000,
    id: "id-3",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-3s",
  },
  {
    label: "4 PM",
    value: 2780,
    id: "id-4",
  },
  {
    label: "Special",
    value: 4000,

    isLine: true,
    id: "id-4s",
  },
  {
    label: "5 PM",
    value: 1890,
    id: "id-5",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-5s",
  },
  {
    label: "6 PM",
    value: 2390,
    id: "id-6",
  },
  {
    label: "Special",
    value: 4000,
    isLine: true,
    id: "id-6s",
  },
  {
    label: "7 PM",
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
        chartWidth={400}
      />
    </Wrapper>
  );
};

export default MilesStatistics;
