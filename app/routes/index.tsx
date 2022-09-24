import { Sidebar } from "~/modules/Sidebar";
import { Wrapper } from "~/modules/Wrapper/Wrapper";
import { Background, CalendarWrapper } from "~/modules/Timeline";
import { CardsWrapper } from "~/modules/Cards/CardsWrapper";
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
