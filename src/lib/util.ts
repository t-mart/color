export function toValidHtmlId(input: string): string {
    // Replace spaces with underscores (or you could use dashes)
    let validId = input.replace(/\s+/g, '_');

    // Remove invalid characters - keep letters, digits, underscores, and dashes
    validId = validId.replace(/[^a-zA-Z0-9-_]/g, '');

    // Ensure the first character is not a digit
    if (/^\d/.test(validId)) {
        validId = '_' + validId;
    }

    return validId;
}
