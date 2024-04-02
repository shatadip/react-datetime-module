declare module 'index' {
    export function getCurrentTime(format?: string): string;
    export function distanceToNow(targetTime: string | number | Date, options?: { includeSeconds?: boolean; addSuffix?: boolean; addPrefix?: boolean }): string;
    export function convertToUnixTimestamp(targetTime?: string): number;
    export function convertFromUnixTimestamp(timestamp: number, format?: string, options?: { showTimeZone?: boolean }): string;
    export function getCurrentTimezone(): string;
}

export {};