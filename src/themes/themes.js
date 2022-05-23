export const styleBanner = {
    display: "flex", flexDirection: "row", alignItems: "center", padding: "8px 12px",

    position: "sticky", height: "64px", left: "0px", top: "0px",

    /* background/default */

    background: "#F7F7F7", /* elevation/2 */

    boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)"
}

export const styleLabel = {
    /* Label */
    width: "248px", height: "12px",

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

export const styleMenu = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "0px",
    gap: "16px",

    position: "absolute",
    width: "320px",
    height: "1936px",
    left: "0px",
    top: "64px",

    /* background/paper */
    background: "#FFFFFF",
    /* elevation/16 */
    boxShadow: "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)"
}

export const styleMenuItems = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "6px 16px",
    anchorOrigin: {vertical: 'top', horizontal: 'left'},

    position: "relative",
    height: "100%",
    left: "20px",
    right: "1327px",
    top: "0px",

    /* background/paper */
    background: "#FFFFFF",

}