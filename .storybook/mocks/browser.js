import jest from "jest-mock";

window.jest = jest;
Object.assign(global, require("jest-chrome"));
