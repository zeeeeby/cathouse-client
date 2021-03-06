import React from 'react';

interface IProps {
    height?: string;
    width?: string;
}
export const UploadImg: React.FC<IProps> = ({ height, width }) => {
    return (
        <svg
            
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 310 310"
            xmlSpace="preserve"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <path
                    style={{
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: '10px',
                    }}
                    d="M35.6,18.8h180c19.6,0,35.6,16,35.6,35.6v185.2c0,19.6-16,35.6-35.6,35.6h-180
           C16,275.2,0,259.2,0,239.6V54C0,34.8,16,18.8,35.6,18.8z"
                />
                <path
                    style={{
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: '10px',
                    }}
                    d="M116.4,186.4l-52.8-52.8L0,197.2v13.2v28.8c0,19.6,16,35.6,35.6,35.6h180c19.6,0,35.6-16,35.6-35.6
           v-28.8v-39.6l-59.6-60L116.4,186.4z"
                />
                <circle
                    style={{
                        fill: 'black',
                    }}
                    cx="114.8"
                    cy="103.6"
                    r="22.4"
                />
                <circle
                    style={{
                        stroke: 'black',
                        strokeWidth: '10px',
                        fill: 'white',
                    }}
                    cx="251.2"
                    cy="232.4"
                    r="57.6"
                />
            </g>
            <g>
                <path
                    style={{
                        fill: 'black',
                    }}
                    d="M242.8,205.6c0-4.8,3.6-8.4,8.4-8.4c4.4,0,8.4,3.6,8.4,8.4V260c0,4.8-3.6,8.4-8.4,8.4
           s-8.4-3.6-8.4-8.4V205.6z"
                />
                <path
                    style={{
                        fill: 'black',
                    }}
                    d="M245.2,211.2c-3.2-3.2-3.2-8.4,0-11.6s8.4-3.2,11.6,0l19.2,19.2c3.2,3.2,3.2,8.4,0,11.6
           s-8.4,3.2-11.6,0L245.2,211.2z"
                />
                <path
                    style={{
                        fill: 'black',
                    }}
                    d="M245.2,199.6c3.2-3.2,8.4-3.2,11.6,0s3.2,8.4,0,11.6L238,230.4c-3.2,3.2-8.4,3.2-11.6,0
           s-3.2-8.4,0-11.6L245.2,199.6z"
                />
            </g>
        </svg>
    );
};
