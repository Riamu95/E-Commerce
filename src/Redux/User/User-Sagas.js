import { userActionTypes } from "./UserAcionTypes";
import { auth, provider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { put, takeLatest, all ,call } from 'redux-saga/effects';
import { SignInSuccess, SignInFail
,  UserSignOutSuccess, UserSignOutFail, UserSignUpFail, UserSignUpSuccess } from "./user-actions";

function* onGoogleStartSignIn()
{
   const userAuth = yield auth.signInWithPopup(provider);
    if(userAuth)
    {
        try {
            const userRef = yield createUserProfileDocument(userAuth.user, '');
            yield getSnapshotFromUserAuth(userRef);
        }catch(err)
        {
            yield put(SignInFail({ error: err}));
        }
    }
};

function* GoogleStartSignIn()
{
   yield takeLatest(userActionTypes.GOOGLE_START_SIGNIN, onGoogleStartSignIn);
};

function* getSnapshotFromUserAuth(user)
{
    try {
         const userRef = yield call(createUserProfileDocument,user, '');
         const snapshot = yield userRef.get();
         yield put(SignInSuccess({ id : snapshot.id, ...snapshot.data() }));
    }
    catch (err) {
        yield put(SignInFail({ error: err}));
    }
};

function* onEmailStartSignIn({ payload : {email, password }})
{
    try {
        const userAuth = yield auth.signInWithEmailAndPassword(email,password);
        yield call(getSnapshotFromUserAuth,userAuth.user);
    }
    catch ( err) {
        yield put(SignInFail({ error: err}));
    }
};

function* onUserSignOut()
{
    try {
        yield auth.signOut();
        yield put(UserSignOutSuccess());
    }
    catch ( err) {
        yield put(UserSignOutFail({ error: err}));
    }
   
};

function* EmailStartSignIn()
{
   yield takeLatest(userActionTypes.EMAIL_START_SIGNIN, onEmailStartSignIn);
};

function* UserSignOut()
{
   yield takeLatest(userActionTypes.USER_SIGN_OUT_START, onUserSignOut);
};

function* isUserAuthenticated()
{
    try{
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
    yield put(SignInFail(error));
  }
}

function* onIsUserAuthenticated()
{
    yield takeLatest(userActionTypes.IS_USER_AUTHENTICATED, isUserAuthenticated)
}

function* SignUp({payload : { email, password, displayName }})
{
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
           password);
        yield put(UserSignUpSuccess());
        yield call(getSnapshotFromUserAuth,user);
    }
    catch (err) 
    {
        yield put(UserSignUpFail(err));
    }; 
};

function* onSignUpStart()
{
    yield takeLatest(userActionTypes.USER_SIGN_UP_START, SignUp);
};

export function* userSagas()
{
    yield all([
        call(GoogleStartSignIn),
        call(EmailStartSignIn),
        call(UserSignOut),
        call(onIsUserAuthenticated),
        call(onSignUpStart)
    ]);
};
