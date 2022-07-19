const PROFILES = [
  "jabala",
  "jacques",
  "jenni",
  "jolee",
  "jake",
  "jana",
  "jude",
  "josephine",
  "jack",
  "jerry",
  "jocelyn",
  "jess",
  "jia",
  "jeane",
  "jodi",
  "jon",
  "jeri",
  "joe",
  "julie",
  "josh",
  "james",
  "jazebelle",
  "jean",
  "jordan",
  "jaqueline",
  "jed",
  "jane",
  "jai",
];

export const getRandomImage = () => {
  const random = Math.floor(Math.random() * PROFILES.length);
  const imageRandom = `https://joeschmoe.io/api/v1/${PROFILES[random]}`;
  return imageRandom;
};
