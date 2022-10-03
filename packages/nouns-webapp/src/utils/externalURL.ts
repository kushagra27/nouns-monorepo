export enum ExternalURL {
  docs,
  discord,
  twitter,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.docs:
      return 'https://docs.publicnouns.wtf';
    case ExternalURL.discord:
      return 'https://discord.gg/Fc7uTwHqJK';
    case ExternalURL.twitter:
      return 'https://twitter.com/PublicNouns';
  }
};