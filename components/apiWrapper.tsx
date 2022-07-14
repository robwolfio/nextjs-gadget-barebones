import { Provider } from "@gadgetinc/react";
import { api } from "../lib/api";
import React from "react";

function NextApiWrapper(props) {
  return <Provider value={api.connection.currentClient}>{props.children}</Provider>;
}
export default NextApiWrapper;