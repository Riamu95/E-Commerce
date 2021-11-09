import { userActionTypes } from "./UserAcionTypes";

export const GoogleStartSignIn = () => (
{
    type : userActionTypes.GOOGLE_START_SIGNIN
});

export const SignInSuccess = data => (
{
    type : userActionTypes.SIGNIN_SUCCESS,
    payload : data
});

export const SignInFail = data => (
{
    type : userActionTypes.SIGNIN_FAIL,
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

export const IsUserAuthenticatedStart = () => (
{
        type : userActionTypes.IS_USER_AUTHENTICATED,
});

export const UserSignUp = data => (
{
    type : userActionTypes.USER_SIGN_UP,
    payload : data
});

export const UserSignUpStart = () => (
{
    type : userActionTypes.USER_SIGN_UP_START
});

export const UserSignUpSuccess = data => (
{
    type : userActionTypes.USER_SIGN_UP_SUCCESS,
    payload : data
});

export const UserSignUpFail = data => (
{
    type : userActionTypes.USER_SIGN_OUT_FAIL,
    error : data
});