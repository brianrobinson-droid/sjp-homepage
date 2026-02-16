/**
 * Content abstraction layer.
 * Currently reads from local JSON (via i18next).
 * In production, this will be replaced with AEM Content Fragment / SPA Editor SDK calls.
 */

export interface ContentSource {
  get(key: string): string;
  getArray<T>(key: string): T[];
}

/**
 * Placeholder for AEM GraphQL content fetching.
 * When AEM is available, replace this with actual AEM Headless SDK calls.
 */
export async function fetchAEMContent(path: string): Promise<Record<string, unknown> | null> {
  const aemHost = process.env.NEXT_PUBLIC_AEM_HOST;
  if (!aemHost) return null;

  try {
    const response = await fetch(`${aemHost}/graphql/execute.json/${path}`);
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

/**
 * Returns the AEM publish host for asset URLs.
 * Falls back to local assets when AEM is not configured.
 */
export function getAssetUrl(localPath: string): string {
  const aemHost = process.env.NEXT_PUBLIC_AEM_HOST;
  if (aemHost) {
    return `${aemHost}${localPath}`;
  }
  return localPath;
}
