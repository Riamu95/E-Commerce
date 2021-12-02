import React, { useEffect, Suspense } from "react";
import { GlobalStyle } from "./global.styles";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./Redux/User/user.selector";
import DirectoryComponent from "./Components/Directory/Directory.component";
import { selectIsFetching } from "./Redux/Collections/collection.selector";
import { fetchCollectionsStart } from "./Redux/Collections/CollectionActions";
import WithSpinner from "./Components/WithSpinner/WithSpinner.component";
import Spinner from "./Components/Spinner/Spinner.component";
import { IsUserAuthenticatedStart } from "./Redux/User/user-actions";

const DirectorySpinnerComponent = WithSpinner(DirectoryComponent);

const Shop = React.lazy(() => import("./Pages/Shop/Shop.component"));

const SignInAndSignUp = React.lazy(() =>
  import("./Pages/SignInAndSignUp/SignInAndSignUp.component")
);

const SignUpComponent = React.lazy(() =>
  import("./Components/SignUp/SignUp.component")
);

const CheckoutPage = React.lazy(() =>
  import("./Pages/Checkout/Checkout.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(IsUserAuthenticatedStart());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  const currentUser = useSelector((state) => selectCurrentUser(state));
  const isFetching = useSelector((state) => selectIsFetching(state));

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <DirectorySpinnerComponent isLoading={isFetching} {...props} />
          )}
        />

        <Suspense fallback={<Spinner />}>
          <Route path="/shop" component={Shop} />
          <Route exact path="/contact" component={Shop} />

          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/shop" /> : <SignInAndSignUp />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              currentUser ? <Redirect to="/shop" /> : <SignUpComponent />
            }
          />

          <Route exact path="/checkout" component={CheckoutPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
