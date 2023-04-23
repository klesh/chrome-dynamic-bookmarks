import getCurrentBrowser from "../getCurrentBrowser";

const browser = getCurrentBrowser();
const runtime = browser.runtime;

export function logInfo(msg: string, ...optionalParams: unknown[]) {
  if (!msg) {
    return;
  }
  if (!optionalParams) {
    console.log(msg);
  } else {
    console.log(msg, ...optionalParams);
  }
}

export function logError(errMsg: string | null | undefined) {
  if (errMsg) {
    console.error(errMsg);
  }
}
export function logWarn(msg: string | null | undefined) {
  if (msg) {
    console.warn(msg);
  }
}

/**
 * Checks if there is an error, if found calls callback function and returns `true` else `false`
 */
export function checkAndHandleError(onErrorFound = logError) {
  if (runtime.lastError) {
    onErrorFound(runtime.lastError.message);
    return true;
  }
  return false;
}

export default {
  logError,
  logWarn,
  checkAndHandleError,
};
