import jest from "jest-mock";
window.jest = jest;

import { chrome } from "jest-chrome";
import mockTabs from "./mockTabs";
import mockRuntime from "./mockRuntime";

mockTabs(chrome);
mockRuntime(chrome);

Object.assign(global, { chrome });
