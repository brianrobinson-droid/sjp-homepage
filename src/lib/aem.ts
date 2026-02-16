/**
 * AEM SPA Editor SDK integration layer.
 *
 * This module provides the bridge between React components and the
 * Adobe Experience Manager SPA Editor. When running inside AEM,
 * components become editable. When running standalone (e.g., Vercel),
 * components render normally with local/API content.
 *
 * To enable AEM editing:
 * 1. Set NEXT_PUBLIC_AEM_HOST environment variable
 * 2. Configure the AEM page model path
 * 3. Map components using MapTo
 */

import { MapTo } from '@adobe/aem-react-editable-components';

// AEM edit configuration - controls placeholder behaviour in AEM Author
export const AEMEditConfig = {
  emptyLabel: 'SJP Component',
  isEmpty: (props: Record<string, unknown>) => !props || Object.keys(props).length === 0,
};

/**
 * Checks if the app is running within AEM Author mode.
 */
export function isAEMAuthorMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.search.includes('wcmmode=edit') ||
         window.location.search.includes('wcmmode=preview');
}

/**
 * Checks if AEM is configured via environment variables.
 */
export function isAEMConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_AEM_HOST;
}

/**
 * Register a React component with the AEM SPA Editor.
 * This makes the component editable when running inside AEM.
 *
 * @param resourceType - The AEM resource type (e.g., 'sjp/components/hero-banner')
 * @param component - The React component to register
 * @param editConfig - Optional edit configuration override
 */
export function registerAEMComponent(
  resourceType: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>,
  editConfig = AEMEditConfig
) {
  // MapTo registers the component with AEM SPA Editor
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapped = MapTo(resourceType)(component) as any;
  // Store edit config for AEM author mode usage
  if (editConfig && mapped) {
    mapped.__editConfig = editConfig;
  }
}

export { MapTo };
