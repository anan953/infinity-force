import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`/dashboard`} component={lazy(() => import(`./home`))} />
        <Route path={`/Scholars`} component={lazy(() => import(`./home`))} />
        <Route path={`/Leaderboard`} component={lazy(() => import(`./home`))} />
        <Route path={`/Settings`} component={lazy(() => import(`./home`))} />
        <Route path={`/payment`} component={lazy(() => import(`./payments`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
