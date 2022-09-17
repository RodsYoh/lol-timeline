import { Sidebar } from "~/modules/Sidebar";
import {
  Background,
  CalendarWrapper,
  CardsWrapper,
} from "~/modules/Timeline/components/TimelineWrapper";
import { Wrapper } from "~/modules/Wrapper/Wrapper";
import { data } from "~/data";

export default function Index() {
  return (
    <Wrapper>
      <Sidebar />
      <Background />
      <CalendarWrapper data={data} />
      <CardsWrapper data={data} />
    </Wrapper>
  );
}
