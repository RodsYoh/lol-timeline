/**
 * Categories availables for the user to filter
 */
type Category = "skins" | "changes" | "champions" | "pbe" | "release" | "rumor";

interface TimelineEvent {
  champions: { name: string; championId: string };
  url: string;
  name: string;
  description: string;
  startDate: string; // Will write this manually. Later it will be a Date.
  endDate: string; // Later it will also be a Date.
  borderCategory: Category;
  backgroundCategory: Category;
}
