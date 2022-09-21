import { useTheme } from "@emotion/react";

export const CardFrame = (props: CardFrameProps) => {
  const { borderCategory, backgroundCategory } = props;
  const theme = useTheme();

  return (
    <>
      <svg
        className="card-frame card-frame--background"
        viewBox="0 0 350 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.9347 0L326.181 12.2842L330.777 8.26427L344.528 28.3079L341.863 131.088L326.751 140.867L308.459 153.618L22.5184 149.654L4.98033 131.106L7.57244 128.19L4.72296 29.3737L8.749 18.8657L17.61 15.4254L43.2737 5.8336"
          fill={theme.color[backgroundCategory]}
        />
      </svg>
      <svg
        className="card-frame card-frame--border"
        viewBox="0 0 350 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.4683 1.54348C129.824 4.12373 231.965 2.01092 310.776 1.54348M39.4683 1.54348C145.837 4.42289 252.849 1.44999 310.776 1.54348M39.4683 1.54348C21.4154 1.88003 3.80381 9.52728 3.38099 38.2466M39.4683 1.54348C22.0405 4.68465 8.30783 5.24557 3.38099 38.2466M310.776 1.54348C338.59 -0.700214 341.458 7.47057 346.863 38.2466M310.776 1.54348C336.476 2.40356 343.131 22.2042 346.863 38.2466M346.863 38.2466C349.382 60.3095 350.025 69.0973 346.863 111.653M346.863 38.2466C348.003 58.4959 342.855 86.2242 346.863 111.653M346.863 111.653C350.76 130.238 328.902 155.311 310.776 148.356M346.863 111.653C352.194 131.453 333.627 147.608 310.776 148.356M310.776 148.356C245.991 146.636 191.263 155.087 39.4683 148.356M310.776 148.356C222.037 143.887 127.14 142.335 39.4683 148.356M39.4683 148.356C14.0803 153.946 10.2197 136.539 3.38099 111.653M39.4683 148.356C11.4882 152.787 -1.84 131.322 3.38099 111.653M3.38099 111.653C-2.20767 86.5047 3.85897 60.6648 3.38099 38.2466M3.38099 111.653C-0.0935414 88.6549 0.69696 64.2547 3.38099 38.2466"
          stroke={theme.color[borderCategory]}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

interface CardFrameProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
}
