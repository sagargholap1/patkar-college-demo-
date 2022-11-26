// URLS
const API = process.env.BACKEND_URL;
const APP_ID = process.env.APP_ID;
const TENANT_ID = process.env.TENANT_ID;

// DEV URLS
// const api = "https://pvkeh3fj81.execute-api.us-east-1.amazonaws.com";
// const appId = "cr:app:8wNUDo7tlG8w";
// const tenantId = "lavender_yummy_jay";

// PROD URLS
const api = "https://5pqjags417.execute-api.ap-south-1.amazonaws.com";
const appId = "cr:app:8wNUDo7tlG8w";
const tenantId = "lavender_yummy_jay";

console.log(tenantId);
// Types & Enums
import { ApisType } from "@types";

export const apis: ApisType = {
  getContent: (name: string) => {
    // return `${API}/content?app_id=${APP_ID}&content=${name}&tenant_id=${TENANT_ID}`;
    return `${api}/content?app_id=${appId}&content=${name}&tenant_id=${tenantId}`;
  },
};
