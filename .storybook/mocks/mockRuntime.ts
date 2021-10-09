import { JestChrome } from "jest-chrome/types/jest-chrome";
import { responseTypes } from "../../src/shared/constants";

const mockRuntime = (chrome: JestChrome) => {
  chrome.runtime.sendMessage.mockImplementation((_, callback) => {
    if (typeof callback === "function") {
      callback({
        type: responseTypes.ERROR,
        message: "Browser messaging is not allowed in storybook",
      });
    }
  });
};
export default mockRuntime;
