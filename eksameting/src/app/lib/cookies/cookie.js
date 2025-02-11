import {cookies} from "next/headers";

export async function updateAccessTokenCookies(accessTokenData) {
  const cookieStore = await cookies();

  try {
    if (accessTokenData === null) {
      throw new Error("then null :(");
    }

    const authSession = JSON.stringify(accessTokenData);

    cookieStore.set("auth.session", authSession);

    return;
  } catch (error) {
    console.error(error);
  }
}

export async function getAccessTokenCookies() {
  const cookieStore = await cookies();

  console.log("saving cookies");
  try {
    const authSession = (await cookies()).get("auth.session")?.value;

    console.log("Cookie value:", authSession);

    return JSON.parse(authSession);
  } catch (error) {
    console.error(error);
  }
}