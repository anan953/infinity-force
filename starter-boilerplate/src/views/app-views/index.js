import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/dashboard`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/Scholars`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/Leaderboard`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/Settings`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/payment`}
          component={lazy(() => import(`./payments`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
