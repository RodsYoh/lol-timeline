import { createContext } from "react";

export const TabGroup = (props: TabGroupProps) => {
  return <div />;
};

export const TabContext = createContext<TabContextProps>({
  onChange: () => null,
  currentlySelected: "",
});

interface TabGroupProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  onChange: (e: React.SyntheticEvent, newValue: string) => void;
  currentlySelected: string;
  children: React.ReactNode;
}

interface TabContextProps {
  onChange: TabGroupProps["onChange"];
  currentlySelected: TabGroupProps["currentlySelected"];
}
