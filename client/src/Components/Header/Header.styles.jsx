import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding-bottom: 5px;
    padding-left: 15px;
`;

export const Options = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Option = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;