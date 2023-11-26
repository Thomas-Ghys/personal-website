import { CoreState } from "./core-state";

export const getCurrentRouteState = (coreState: CoreState): string => coreState.currentRoute;
export const getPreviousRouteState = (coreState: CoreState): string => coreState.previousRoute;