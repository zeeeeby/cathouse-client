import React from 'react';
import styles from './ChatButton.module.scss';
interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    width?: string;
    height?: string;
}
export const ChatButton: React.FC<IProps> = ({ width, height, ...props }) => {
    return (
        
        <div
        //@ts-ignore
            onClick={props.onClick}
            className={styles.wrapper}
            style={{ height, width }}
        >
            <svg
                fill="#A1A6B0"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
            >
                <path
                    stroke-width="30"
                    d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.639,0.933C14.757,57.978,14.879,58,15,58
	c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M58,41c0,2.168-1.832,4-4,4H27.179
	l3.579-4.161c0.36-0.418,0.313-1.05-0.106-1.41c-0.418-0.36-1.051-0.312-1.411,0.106l-4.998,5.811L16,54.414V46c0-0.552-0.448-1-1-1
	H6c-2.168,0-4-1.832-4-4V8c0-2.168,1.832-4,4-4h48c2.168,0,4,1.832,4,4V41z"
                />
            </svg>
        </div>
    );
};
