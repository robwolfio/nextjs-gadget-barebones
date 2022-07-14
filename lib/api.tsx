import { BrowserSessionStorageType, Client } from "@gadget-client/ysw";

export const api =
  typeof window !== "undefined"
    ? new Client({
        authenticationMode: {
          browserSession: {
            storageType: BrowserSessionStorageType.Durable,
          },
        },
      })
    : new Client({});