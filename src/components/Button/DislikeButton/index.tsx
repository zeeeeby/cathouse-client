import React from 'react';
import styles from './Dislike.module.scss';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    width?: string;
    height?: string;
}
export const DislikeButton: React.FC<IProps> = ({
    active = false,
    width,
    height,
    ...props
}) => {
    return (
        //@ts-ignore
        <div onClick={props.onClick} className={styles.wrapper} style={{ width, height }}>
            {!active ? (
                <svg
                    //@ts-ignore
                    myAttr="true"
                    fill="#A1A6B0"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <g>
                            <path
                                d="M266.609,324.826l-47.567-40.136l48.271-46.232c3.222-3.085,4.902-7.445,4.586-11.896
                            c-0.315-4.45-2.597-8.528-6.223-11.128l-77.292-55.411l53.786-76.02c2.366-3.344,3.262-7.512,2.478-11.533
                            c-0.783-4.021-3.178-7.547-6.627-9.759c-24.722-15.849-53.371-24.276-82.854-24.372c-0.174,0-0.342-0.001-0.516-0.001
                            c-41.121,0-79.854,16.04-109.104,45.195C16.176,112.81,0,151.683,0,192.993c0,39.465,14.866,77.042,41.861,105.809l147.682,157.37
                            c10.43,11.115,25.154,17.49,40.396,17.49h0.001c7.039,0,13.132-4.895,14.647-11.769l26.997-122.373
                            C272.785,334.078,270.869,328.419,266.609,324.826z M218.491,440.926c-2.627-1.326-5.029-3.106-7.073-5.284L63.736,278.271
                            C41.981,255.089,30,224.802,30,192.993c0-33.278,13.043-64.605,36.727-88.211c23.587-23.511,54.798-36.443,87.928-36.443
                            c0.138,0,0.277,0,0.415,0.001c18.454,0.06,36.497,4.166,52.962,11.973l-52.747,74.552c-4.764,6.733-3.198,16.049,3.506,20.854
                            l74.724,53.57l-47.27,45.274c-3.073,2.943-4.752,7.053-4.617,11.305c0.134,4.253,2.067,8.249,5.319,10.992l53.39,45.048
                            L218.491,440.926z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M466.447,83.529c-29.253-29.155-67.978-45.19-109.099-45.19c-0.177,0-0.355,0-0.532,0.001h0.001
                            c-29.229,0.098-57.641,8.386-82.214,23.974c-1.906,1.089-3.579,2.599-4.872,4.456l-53.836,77.33
                            c-4.661,6.695-3.117,15.887,3.476,20.692l82.701,60.276l-46.827,47.021c-2.899,2.912-4.478,6.886-4.365,10.994
                            c0.111,4.107,1.904,7.99,4.958,10.739l41.002,36.91l-29.381,124.483c-1.054,4.462-0.008,9.16,2.837,12.754
                            c2.845,3.594,7.177,5.691,11.761,5.691h0.003c15.242,0,29.968-6.375,40.398-17.49l147.683-157.37
                            C497.134,270.035,512,232.458,512,192.993C512,151.68,495.822,112.805,466.447,83.529z M448.264,278.272L303.682,432.339
                            l24.396-103.363c1.259-5.333-0.49-10.928-4.563-14.594l-35.881-32.301l48.043-48.243c3.09-3.103,4.669-7.4,4.324-11.766
                            c-0.345-4.366-2.579-8.362-6.118-10.941l-84.98-61.938l43.671-62.729c19.349-11.792,41.531-18.05,64.344-18.126h0.001
                            c0.144,0,0.283-0.001,0.428-0.001c33.125,0,64.338,12.932,87.924,36.439c23.686,23.606,36.73,54.936,36.73,88.215
                            C482,224.802,470.019,255.089,448.264,278.272z"
                            />
                        </g>
                    </g>
                </svg>
            ) : (
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <g>
                            <path
                                d="M271.39,340.732l-61.587-46.077c-4.721-3.532-5.037-10.499-0.653-14.443l50.879-45.786
			c4.476-4.028,4.036-11.175-0.901-14.623l-83.703-58.456c-4.252-2.97-5.277-8.832-2.284-13.067l71.146-100.7
			c-24.319-15.063-52.958-23.814-83.644-23.914C72.232,23.377,0,95.365,0,183.776c0,42.372,16.46,80.9,43.334,109.538l0.001,0.002
			L212.65,473.737c8.536,9.096,20.371,14.34,32.814,14.598l29.471-138.161C275.696,346.605,274.312,342.918,271.39,340.732z"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M351.34,23.666c-22.215,0.075-43.355,4.69-62.566,12.94l-73.399,103.887c-2.95,4.176-2.002,9.946,2.13,12.958
			l22.722,16.561l67.047,46.823c4.937,3.448,5.378,10.595,0.901,14.623L248,285.609l-0.09,0.09l56.826,42.514
			c2.922,2.186,4.306,5.873,3.545,9.442L276.412,487.06c8.706-2.096,16.704-6.679,22.938-13.323l169.314-180.421
			C495.539,264.677,512,226.149,512,183.776C512,95.358,439.757,23.368,351.34,23.666z"
                            />
                        </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </svg>
            )}
        </div>
    );
};
