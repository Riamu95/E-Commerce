import { userActionTypes } from "./UserAcionTypes";
import { auth, provider, createUserProfileDocument } from "../../firebase/firebase.utils";
import { put, takeLatest, all ,call } from 'redux-saga/effects';
import { GoogleSignInSuccess, GoogleSignInFail, EmailSignInSuccess, EmailSignInFail
, UserSignOutStart , UserSignOutSuccess, UserSignOutFail } from "./user-actions";

function* onGoogleStartSignIn()
{
   const userAuth = yield auth.signInWithPopup(provider);
    if(userAuth)
    {
        try {
            const userRef = yield createUserProfileDocument(userAuth.user, '');
            const userSnapshot = yield userRef.get();
            yield put(GoogleSignInSuccess({id : userSnapshot.id, ...userSnapshot.data()}));
        }catch(err)
        {
            yield put(GoogleSignInFail({ error: err}));
        }
    }
};

function* GoogleStartSignIn()
{
   yield takeLatest(userActionTypes.GOOGLE_START_SIGNIN, onGoogleStartSignIn);
};

function* onEmailStartSignIn(data)
{
    try {
        const userAuth = yield auth.signInWithEmailAndPassword(data.payload.email,data.payload.password);
         const userRef = yield call(createUserProfileDocument,userAuth.user, '');
         const snapshot = yield userRef.get();
         yield put(EmailSignInSuccess({ id : snapshot.id, ...snapshot.data() }));
    }
    catch ( err) {
        yield put(EmailSignInFail({ error: err}));
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

export function* userSagas()
{
    yield all([call(GoogleStartSignIn), call(EmailStartSignIn), call(UserSignOut)]);
};
