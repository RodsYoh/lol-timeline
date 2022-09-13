import { useTheme } from "@emotion/react";
import { Typography } from "../Typography";
import { getRandomCheckboxBackground, getRandomCheckboxFrame } from "./helpers";
import { CheckboxContainer } from "./styles";

export const Checkbox = (props: CheckboxProps) => {
  const { label, category = "rumor", checked, id, ...other } = props;
  const theme = useTheme();

  return (
    <CheckboxContainer htmlFor={id}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {checked && (
          <path
            d={getRandomCheckboxBackground()}
            fill={theme.color[category]}
          />
        )}
        <path
          d={getRandomCheckboxFrame()}
          stroke={theme.color[category]}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <Typography htmlTag="strong">{label}</Typography>
      <input type="checkbox" checked={checked} {...other} />
    </CheckboxContainer>
  );
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label identifying the component.
   * This will show right next to the checkbox.
   */
  label: string;
  /**
   * Category that defines the checkbox color
   */
  category?: "skins" | "changes" | "champions" | "pbe" | "release" | "rumor";
}
