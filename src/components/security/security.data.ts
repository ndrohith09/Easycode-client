
export type PangeaSecurityDataType = {
  pid: number;
  name: string; 
  is_active : boolean;
  token: string;
};

export enum PangeaServicesTypeEnum {
  "Secure Audit Log" = "Secure Audit Log",
  "Redact" = "Redact",
  "Embargo" = "Embargo",
  "File Intel" = "File Intel",
  "Domain Intel" = "Domain Intel",
  "URL Intel" = "URL Intel",
  "Vault" = "Vault",
  "AuthN" = "AuthN",
  "File Scan" = "File Scan",
  "Secure Share (Beta)" = "Secure Share (Beta)",
  "Sanitize (Beta)" = "Sanitize (Beta)",

}

export const PangeaServicesDataEnumMapping: Record<
  PangeaServicesTypeEnum,
  { desc: string; img: string }
> = {
    [PangeaServicesTypeEnum["Secure Audit Log"]]: {
        desc: "Tamperproof audit",
        img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockTwoToneIcon"><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"></path><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Redact"]]: {
        desc: "Remove sensitive info from a string",
        img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BorderColorTwoToneIcon"><path d="m16.81 8.94-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Embargo"]]: {
        desc: "Check digital export restrictions",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DoNotDisturbTwoToneIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></svg>',         
    },
    [PangeaServicesTypeEnum["File Intel"]]: {
        desc: "Malicious behavior check on a file",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TagTwoToneIcon"><path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Domain Intel"]]: {
        desc: "Malicious behavior check on a domain",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DnsTwoToneIcon"><path d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity=".3"></path><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z"></path></svg>',
    },
    [PangeaServicesTypeEnum["URL Intel"]]: {
        desc: "Retrieve intelligence report for a URL",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanguageTwoToneIcon"><path d="M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4c.96 1.66 2.49 2.93 4.33 3.56-.6-1.11-1.06-2.31-1.38-3.56H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8c-.96-1.65-2.49-2.93-4.33-3.56.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4c1.84-.63 3.37-1.91 4.33-3.56h-2.95c-.32 1.25-.78 2.45-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z" opacity=".3"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Vault"]]: {
        desc: "Manage secrets and keys",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VpnKeyTwoToneIcon"><path d="M11.71 10.33C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4h2v-4h2v-2H11.94l-.23-.67zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" opacity=".3"></path><path d="M7 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c2.72 0 5.17-1.58 6.32-4H16v4h6v-4h2V9H13.32C12.17 6.58 9.72 5 7 5zm15 8h-2v4h-2v-4h-6.06l-.23.67C11.01 15.66 9.11 17 7 17c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.11 0 4.01 1.34 4.71 3.33l.23.67H22v2zM7 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>',
    },
    [PangeaServicesTypeEnum["AuthN"]]: {
        desc: "Secure login and user management",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserTwoToneIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"></path><path d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11L5 6.3zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z" opacity=".3"></path></svg>',
        
    },
    [PangeaServicesTypeEnum["File Scan"]]: {
        desc: "Scan a file for malware",
    img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FlipTwoToneIcon"><path d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2v2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zm10-2v2h2c0-1.1-.9-2-2-2zm-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Secure Share (Beta)"]]: {
        desc: "Securely share files and folders",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="UploadFileTwoToneIcon"><path d="M13 4H6v16h12V9h-5V4zm3 11h-3v4h-2v-4H8l4.01-4L16 15z" opacity=".3"></path><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path><path d="M8 15h3v4h2v-4h3l-3.99-4z"></path></svg>',
    },
    [PangeaServicesTypeEnum["Sanitize (Beta)"]]: {
        desc: "Sanitize files of malicious content, PII, and links",
            img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CleaningServicesTwoToneIcon"><path d="M11 3h2v8h-2zm5 10H8c-1.65 0-3 1.35-3 3v5h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-5c0-1.65-1.35-3-3-3z" opacity=".3"></path><path d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"></path></svg>',
    }
};

// export const PangeaSecurityData: PangeaSecurityDataType[] = [
//   {
//     id: 1,
//     name: "Secure Audit Log",
//     desc: "Tamperproof audit",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockTwoToneIcon"><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"></path><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>',
//   },
//   {
//     id: 2,
//     name: "Redact",
//     desc: "Remove sensitive info from a string",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BorderColorTwoToneIcon"><path d="m16.81 8.94-3.75-3.75L4 14.25V18h3.75l9.06-9.06zM6 16v-.92l7.06-7.06.92.92L6.92 16H6zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2 20h20v4H2z"></path></svg>',
//   },
//   {
//     id: 3,
//     name: "Embargo",
//     desc: "Check digital export restrictions",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DoNotDisturbTwoToneIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></svg>',
//   },
//   {
//     id: 4,
//     name: "File Intel",
//     desc: "Malicious behavior check on a file",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TagTwoToneIcon"><path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4zm-6 4h-4v-4h4v4z"></path></svg>',
//   },

//   {
//     id: 5,
//     name: "Domain Intel",
//     desc: "Malicious behavior check on a domain",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DnsTwoToneIcon"><path d="M5 9h14V5H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5S7.83 8.5 7 8.5 5.5 7.83 5.5 7 6.17 5.5 7 5.5zM5 19h14v-4H5v4zm2-3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity=".3"></path><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-1 6H5v-4h14v4zm-12-.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 6H5V5h14v4zM7 8.5c.83 0 1.5-.67 1.5-1.5S7.83 5.5 7 5.5 5.5 6.17 5.5 7 6.17 8.5 7 8.5z"></path></svg>',
//   },
//   {
//     id: 6,
//     name: "URL Intel",
//     desc: "Retrieve intelligence report for a URL",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanguageTwoToneIcon"><path d="M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4c.96 1.66 2.49 2.93 4.33 3.56-.6-1.11-1.06-2.31-1.38-3.56H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8c-.96-1.65-2.49-2.93-4.33-3.56.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4c1.84-.63 3.37-1.91 4.33-3.56h-2.95c-.32 1.25-.78 2.45-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z" opacity=".3"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>',
//   },
//   {
//     id: 7,
//     name: "Vault",
//     desc: "Manage secrets and keys",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VpnKeyTwoToneIcon"><path d="M11.71 10.33C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4h2v-4h2v-2H11.94l-.23-.67zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" opacity=".3"></path><path d="M7 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c2.72 0 5.17-1.58 6.32-4H16v4h6v-4h2V9H13.32C12.17 6.58 9.72 5 7 5zm15 8h-2v4h-2v-4h-6.06l-.23.67C11.01 15.66 9.11 17 7 17c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.11 0 4.01 1.34 4.71 3.33l.23.67H22v2zM7 9c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>',
//   },

//   {
//     id: 8,
//     name: "AuthN",
//     desc: "Secure login and user management",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VerifiedUserTwoToneIcon"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"></path><path d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11L5 6.3zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z" opacity=".3"></path></svg>',
//   },
//   {
//     id: 9,
//     name: "File Scan",
//     desc: "Scan a file for malware",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FlipTwoToneIcon"><path d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2v2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zm10-2v2h2c0-1.1-.9-2-2-2zm-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"></path></svg>',
//   },
//   {
//     id: 10,
//     name: "Secure Share (Beta)",
//     desc: "Securely share files and folders",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="UploadFileTwoToneIcon"><path d="M13 4H6v16h12V9h-5V4zm3 11h-3v4h-2v-4H8l4.01-4L16 15z" opacity=".3"></path><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path><path d="M8 15h3v4h2v-4h3l-3.99-4z"></path></svg>',
//   },

//   {
//     id: 11,
//     name: "Sanitize (Beta)",
//     desc: "Sanitize files of malicious content, PII, and links",
//     img: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium active css-8i2n93" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CleaningServicesTwoToneIcon"><path d="M11 3h2v8h-2zm5 10H8c-1.65 0-3 1.35-3 3v5h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-5c0-1.65-1.35-3-3-3z" opacity=".3"></path><path d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"></path></svg>',
//   },
// ];
