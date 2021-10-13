import styled from 'styled-components';

export const Banner = styled.div`
    @media screen and (max-height: 550px) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 220px;
        @media screen and (max-height: 400px) {
            display: none;
        }
    }
    img {
        display: block;
        margin: 0 auto;
        -webkit-user-drag: none;
    }
`;

export const Div = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        p {
            padding: 10px 0;
            color: #fff;
        }

        input {
            text-align: center;
            padding: 10px 50px;
            display: block;
        }

        button {
            background-color: #ff7700;
            display: block;
            margin: 20px auto 0 auto;
            padding: 10px 50px;
            color: #fff;
            font-weight: 600;
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
            }
        }
    }
`;