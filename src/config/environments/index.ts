import { env as development } from "./development";

const ENV = {
  development,
};

export default ENV[process.env.REACT_APP_STAGE] || development;
