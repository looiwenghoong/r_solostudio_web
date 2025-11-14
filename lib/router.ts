type RouteKey = keyof typeof ROUTES;

const ROUTES = {
  home: {
    path: "/",
    description: "Landing page",
  },
  privacyPolicy: {
    path: "/rifin/privacy_policy",
    description: "Rifin privacy policy page",
  },
} as const;

/**
 * Central routing helper to avoid scattering hard-coded paths.
 */
export class Router {
  static path(route: RouteKey) {
    return ROUTES[route].path;
  }

  static info(route: RouteKey) {
    return ROUTES[route];
  }

  static list() {
    return { ...ROUTES };
  }
}
