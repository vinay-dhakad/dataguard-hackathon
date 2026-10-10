export const SEVERITIES = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
export const ACTIONS = ['FILE_ACCESS', 'DOWNLOAD', 'UPLOAD', 'SHARE', 'EMAIL_ATTACHMENT', 'USB_COPY', 'CLIPBOARD', 'PRINT', 'CLOUD_UPLOAD'];
export const DESTINATIONS = ['', 'USB', 'PERSONAL_CLOUD', 'PERSONAL_EMAIL', 'EXTERNAL_MESSAGING', 'INTERNAL'];
export const PERMISSION_FIELDS = [
  { key: 'can_read', label: 'Read / View', hint: 'Open or view the file' },
  { key: 'can_download', label: 'Download', hint: 'Download a local copy' },
  { key: 'can_share', label: 'Share / Upload', hint: 'Send to another person or cloud' },
  { key: 'can_copy', label: 'Copy', hint: 'Copy to USB or clipboard' },
];
