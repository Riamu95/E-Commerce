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

export const ArrowContainer = styled.div`
        width : 100%;
        height : 20px;
        display : flex;
        flex-direction: row;
        justify-content : space-between;
        margin-top: 10px;
        opacity : 0%;
`;
export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
      }
`;

const ArrowCSS = css `

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

    &:hover ${ArrowContainer}{
        opacity: 100%;
    }

    @media screen and (max-width: 800px) {
        align-items: center;
      }
`;