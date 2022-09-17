/**
 * Categories availables for the user to filter
 */
type Category = "skins" | "changes" | "champions" | "pbe" | "release" | "rumor";

/**
 * Event is one item on the timeline or in the card list.
 */
interface TimelineEvent {
  /**
   * Revelant champions for that event
   */
  champions?: { name: string; championId: string }[];
  /**
   * Information source
   */
  url?: string;
  /**
   * Name of the event
   */
  name: string;
  /**
   * Description of the event
   */
  description?: string;
  /**
   * Event's initial date on format YYYY-MM-DD
   *
   * @remarks
   * Will write this manually. Later it will be a Date.
   */
  startDate: string;
  /**
   * Event's initial date on format YYYY-MM-DD
   *
   * @remarks
   * Will write this manually. Later it will be a Date.
   */
  endDate: string;
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
  /**
   * Event's image. Required for events that will be featured
   */
  image?: string;
  /**
   * Sub events to render as card when the user performs an action in the
   * timeline
   */
  subEvents?: TimelineEvent[];
  /**
   * If the event is featured, it will appear as card during
   * the initial app state
   */
  isFeatured?: boolean;
}
