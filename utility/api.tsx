import { Client, BrowserSessionStorageType } from "@gadget-client/ysw"
export const api = new Client({
  authenticationMode: { browserSession: { storageType: BrowserSessionStorageType.Durable } }
});