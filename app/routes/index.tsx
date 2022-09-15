import { Sidebar } from "~/modules/Sidebar";
import {
  Background,
  CalendarWrapper,
  CardsWrapper,
} from "~/modules/Timeline/components/TimelineWrapper";
import { Wrapper } from "~/modules/Wrapper/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <Sidebar />
      <Background />
      <CalendarWrapper />
      <CardsWrapper />
    </Wrapper>
  );
}
