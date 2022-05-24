export const styleBanner = {
    display: "flex", flexDirection: "row", alignItems: "center", padding: "8px 12px",

    position: "sticky", height: "64px", left: "0px", top: "0px",

    /* background/default */

    background: "#F7F7F7", /* elevation/2 */

    boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)"
}

export const styleLabel = {
    /* Label */
    height: "12px",

    /* Desktop typography/components/input-label */
    fontFamily: 'Public Sans', fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "12px",

    /* identical to box height, or 75% */
    display: "flex", alignItems: "center", letterSpacing: "0.15px",

    /* text/secondary */
    color: "rgba(6, 6, 9, 0.6)",

    /* Inside auto layout */
    flex: "none", order: "0", alignSelf: "stretch", flexGrow: "0"
}

export const styleDate = {
    /* Text */
    position: "relative", width: "224px", height: "24px",

    /* Desktop typography/components/input-text */
    fontFamily: 'Public Sans', fontStyle: "normal", fontWeight: "400", fontSize: "16px", lineHeight: "24px",

    /* identical to box height, or 150% */
    display: "flex", alignItems: "center", letterSpacing: "0.15px",

    /* text/primary */
    color: "#000000",

    /* Inside auto layout */
    flex: "none", order: "0", flexGrow: "1"
}
export const styleDisabledButton = {

    /* Auto layout */

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",


    left: "59.58%",
    right: "32.22%",
    top: "75%",
    bottom: "3.42%",

    /* action/disabled-background */

    background: "rgba(0, 0, 0, 0.12)",
    borderRadius: 4

}

export const styleEnabledButton = {
    /* Auto layout */

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",


    left: "59.58%",
    right: "32.22%",
    top: "75%",
    bottom: "3.42%",

    /* action/disabled-background */

    background: " #5D6A18",
    borderRadius: 4
}