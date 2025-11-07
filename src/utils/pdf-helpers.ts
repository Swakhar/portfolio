// Helper functions for PDF generation

/**
 * Sanitizes text for PDF generation by replacing special characters
 * that may cause encoding issues with the default Helvetica font
 */
export function sanitizeForPDF(text: string): string {
  // Replace common special characters that cause issues
  const replacements: Record<string, string> = {
    'ö': 'oe',
    'ä': 'ae',
    'ü': 'ue',
    'Ö': 'Oe',
    'Ä': 'Ae',
    'Ü': 'Ue',
    'ß': 'ss',
    'é': 'e',
    'è': 'e',
    'ê': 'e',
    'à': 'a',
    'â': 'a',
    'î': 'i',
    'ô': 'o',
    'û': 'u',
    'ç': 'c',
  }

  let sanitized = text
  for (const [char, replacement] of Object.entries(replacements)) {
    sanitized = sanitized.replace(new RegExp(char, 'g'), replacement)
  }

  return sanitized
}

/**
 * Sanitizes an object recursively, converting all string values
 */
export function sanitizeObjectForPDF<T>(obj: T): T {
  if (typeof obj === 'string') {
    return sanitizeForPDF(obj) as unknown as T
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObjectForPDF(item)) as unknown as T
  }

  if (obj && typeof obj === 'object') {
    const sanitized: any = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObjectForPDF(value)
    }
    return sanitized
  }

  return obj
}
