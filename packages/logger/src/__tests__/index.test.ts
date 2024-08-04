import { log, error, warn, debug, info } from "..";

jest.spyOn(global.console, "log");
jest.spyOn(global.console, "debug");
jest.spyOn(global.console, "info");
jest.spyOn(global.console, "error");
jest.spyOn(global.console, "warn");

describe("@repo/logger", () => {
  it("prints a message", () => {
    log("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toHaveBeenCalledWith("LOGGER: ", "hello");
  });

  it("prints a debug message", () => {
    debug("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.debug).toHaveBeenCalledWith("DEBUG: ", "hello");
  });

  it("prints an info message", () => {
    info("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.info).toHaveBeenCalledWith("INFO: ", "hello");
  });

  it("prints an error message", () => {
    error("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.error).toHaveBeenCalledWith("ERROR: ", "hello");
  });

  it("prints a warning", () => {
    warn("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.warn).toHaveBeenCalledWith("WARN: ", "hello");
  });
});
