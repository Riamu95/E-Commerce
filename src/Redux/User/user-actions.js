import { userActionTypes } from "./UserAcionTypes";

export const setCurrentUser = user => (
{
    type : userActionTypes.SET_CURRENT_USER,
    payload : user
});


export const GoogleStartSignIn = () => (
{
    type : userActionTypes.GOOGLE_START_SIGNIN
});

export const GoogleSignInSuccess = data => (
{
    type : userActionTypes.GOOGLE_START_SIGNIN_SUCCESS,
    payload : data
});

export const GoogleSignInFail = data => (
{
    type : userActionTypes.GOOGLE_START_SIGNIN_FAIL,
    error : data
});

export const UserSignOutStart = () => (
{
    type : userActionTypes.USER_SIGN_OUT_START,
});

export const UserSignOutSuccess = () => (
{
    type : userActionTypes.USER_SIGN_OUT_SUCCESS,
});

export const UserSignOutFail = (data) => (
{
    type : userActionTypes.USER_SIGN_OUT_FAIL,
    payload : data
});

export const EmailStartSignIn = data => (
{
    type : userActionTypes.EMAIL_START_SIGNIN,
    payload : data
});
    
export const EmailSignInSuccess = data => (
{
    type : userActionTypes.EMAIL_START_SIGNIN_SUCCESS,
    payload : data
});
    
export const EmailSignInFail = data => (
{
    type : userActionTypes.EMAIL_START_SIGNIN_FAIL,
    error : data
});

