export type RobotsDirective = {
  index: boolean;
  follow: boolean;
};

const indexed: RobotsDirective = { index: true, follow: true };
const hidden: RobotsDirective = { index: false, follow: false };

export function robotsFromEnv(value: string): RobotsDirective {
  if (value === "noindex, nofollow") {
    return hidden;
  }

  return indexed;
}
