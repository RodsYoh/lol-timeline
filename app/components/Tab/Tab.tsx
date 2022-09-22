/**
 * Tab component. Renders a tab that can be selected.
 *
 * @remarks
 * This component is used inside a {@link TabGroup} component.
 *
 * @example
 * ```
 * <Tab value="im-a-tab">I'm a tab!</Tab>
 * ```
 */
export const Tab = (props: TabProps) => {
  return <div />;
};

interface TabProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Title that will be displayed on the tab.
   */
  children: string;
  /**
   * Tab value that will be returned on the `onChange` function.
   */
  value: string;
}
