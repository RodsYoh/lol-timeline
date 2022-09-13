export const Checkbox = (props: CheckboxProps) => {
  const {} = props;
  return <input type="checkbox" />;
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label identifying the component.
   * This will show right next to the checkbox.
   */
  label: string;
}
