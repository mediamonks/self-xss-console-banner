/**
 * @description Displays a self-xss banner. It's recommended to keep logs on production at a minimum to make sure the
 * banner displays.
 *
 * @param clearConsole Clear console before displaying banner
 * @param heading First heading for drawing user attention
 * @param headingImpact Second heading for explaining possible impact of self-xss
 * @param body Additional information
 */
export default function selfXssConsoleBanner(
  clearConsole: boolean = false,
  heading?: string,
  headingImpact?: string,
  body?: string
) {
  if (typeof window === "undefined" || typeof console === "undefined") {
    return;
  }

  const hasProcess = typeof process !== "undefined";
  const logHeading =
    heading || (hasProcess && process.env.SELF_XSS_HEADING) || "🛑 Warning!";
  const logHeadingImpact =
    headingImpact ||
    (hasProcess && process.env.SELF_XSS_BODY_ALARMING) ||
    "Pasting anything in here could give attackers access to your account.";
  const logBody =
    body ||
    (hasProcess && process.env.SELF_XSS_BODY) ||
    "Unless you understand exactly what you are doing, close this window and stay safe.";

  clearConsole && console.clear();

  console.log(
    "%c" + `${logHeading}`,
    "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"
  );
  console.log(
    "%c" + `${logHeadingImpact}`,
    "font-size: 18px; font-weight: bold; color: red;"
  );
  console.log("%c" + `${logBody}`, "font-size: 16px;");
}
