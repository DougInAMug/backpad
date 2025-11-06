import { createAuthClient } from "better-auth/svelte"
import type { auth } from "./auth.js";
import {
    inferAdditionalFields,
    passkeyClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:5173",
    plugins: [inferAdditionalFields<typeof auth>(), passkeyClient()],
})