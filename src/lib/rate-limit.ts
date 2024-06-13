import getIp from "./get-ip";

const ipMap = new Map<string, { tries: number; nextTryTimestamp: number }>();

const rateLimit = (limitInSeconds = 10) => {
  const ip = getIp();

  if (!ip) {
    return;
  }

  const limitInMilliseconds = limitInSeconds * 1000;

  const currentTimestamp = new Date().getTime();

  if (!ipMap.has(ip)) {
    ipMap.set(ip, {
      tries: 1,
      nextTryTimestamp: new Date().getTime() + limitInMilliseconds,
    });
    return;
  }

  const entry = ipMap.get(ip);

  if (!entry) {
    return;
  }

  if (entry?.nextTryTimestamp > currentTimestamp) {
    const tries = entry.tries + 1;
    const nextTryTimestamp =
      entry.nextTryTimestamp + tries * limitInMilliseconds;

    ipMap.set(ip, {
      tries,
      nextTryTimestamp,
    });

    throw new Error(
      `Uh oh, you've been trying too many times. ${new Date(
        nextTryTimestamp
      ).getMinutes()}`
    );
  } else {
    ipMap.delete(ip);
  }
};

export default rateLimit;
