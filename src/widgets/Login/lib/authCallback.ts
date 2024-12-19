export default function authCallback(accessToken: string) {
  document.cookie = `access=${accessToken}`;

  // console.log("set cookie", accessToken, CookieNames.ACCESS);
  // Cookies.set(CookieNames.ACCESS, accessToken);
}
