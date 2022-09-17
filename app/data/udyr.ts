const spotlight: TimelineEvent = {
  backgroundCategory: "release",
  borderCategory: "champions",
  description:
    "Life is in the struggle, not the victory. Fight by instinct alone with Udyr, the Spirit Walker.",
  endDate: "2022-09-20",
  startDate: "2022-09-10",
  image: "https://assets.5pots.com/file/cincopots/timeline/udyr-trailer.jpg",
  name: "Gameplay trailer",
  url: "https://www.youtube.com/watch?v=kfyDoF658HA",
};

const skins: TimelineEvent = {
  backgroundCategory: "release",
  borderCategory: "skins",
  description: "Spirit Guard Udyr takes a new form on the rift!",
  endDate: "2022-09-20",
  startDate: "2022-09-10",
  image: "https://assets.5pots.com/file/cincopots/timeline/udyr-skins.jpg",
  name: "Spirit Guard Udyr",
  url: "https://www.youtube.com/watch?v=Ji_POnks-v4",
};

export const udyr: TimelineEvent = {
  champions: [{ championId: "Udyr", name: "Udyr" }],
  backgroundCategory: "pbe",
  borderCategory: "champions",
  description: "The Udyr champion update is now testing on the PBE!",
  endDate: "2022-09-20",
  startDate: "2022-09-10",
  image: "https://assets.5pots.com/file/cincopots/timeline/udyr.jpg",
  name: "Udyr",
  url: "https://www.leagueoflegends.com/pt-br/news/dev/um-udyr-para-cada-ocasiao/",
  isFeatured: true,
  subEvents: [spotlight, skins],
};
