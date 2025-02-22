export const log = {
  info: (message: string) => {
    if (process.env.NODE_ENV === "development") {
      console.info(`%cINFO: ${message}`, "color: blue;");
    }
  },
  warn: (message: string) => {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`%cWARN: ${message}`, "color: orange;");
    }
  },
  error: (message: string) => {
    console.error(`%cERROR: ${message}`, "color: red;");
  },
  debug: (message: string) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(`%cDEBUG: ${message}`, "color: green;");
    }
  },
};
