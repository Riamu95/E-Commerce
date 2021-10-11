import styled, { css  } from "styled-components";
import { LeftArrowLogo, RightArrowLogo } from './CollectionPreview.component';

export const TitleContainer = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    width: 100px;
    &:hover {
    cursor: pointer;
    }
`;


export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ArrowCSS = css `
    opacity: 0%;
    &:hover {
        cursor: pointer;
    }
`;
export const LeftArrowContainer = styled(LeftArrowLogo)`
   ${ArrowCSS}
`;

export const RightArrowContainer = styled(RightArrowLogo)`
   ${ArrowCSS}
`;



export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    &:hover ${LeftArrowContainer},${RightArrowContainer} {
        opacity: 100%;
    }
`;