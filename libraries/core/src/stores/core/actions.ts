import { createAction, props } from "@ngrx/store";

export const SetCurrentRouteStateAction = createAction(
	'[CORE] Setting current route state',
	props<{currentRoute: string}>()
)

export const NavigateToRouteAction = createAction(
	'[CORE] navigate to route',
	props<{routeToNavigateTo: string}>()
)

export const OpenBlankTargetAction = createAction(
	'[CORE] open a blank target with route',
	props<{route: string}>()
)