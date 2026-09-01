import{cookies}from"next/headers";const COOKIE="face_vault_session";
async function sign(){const secret=process.env.AUTH_SECRET||"";if(!secret)return"";const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);const b=await crypto.subtle.sign("HMAC",key,new TextEncoder().encode("face-vault"));return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,"0")).join("")}
export async function authorized(){return Boolean((await sign())&&((await cookies()).get(COOKIE)?.value===await sign()))}export{COOKIE,sign};
