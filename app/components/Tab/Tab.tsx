export const Tab = (props: TabProps) => {
  return <div />;
};

interface TabProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  value: string;
}
