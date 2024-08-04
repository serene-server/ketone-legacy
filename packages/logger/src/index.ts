export const log = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.log("LOGGER: ", ...args);
};

export const debug = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.debug("DEBUG: ", ...args);
};

export const info = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.info("INFO: ", ...args);
};

export const error = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.error("ERROR: ", ...args);
};

export const warn = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.warn("WARN: ", ...args);
};
