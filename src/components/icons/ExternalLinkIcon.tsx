import React from 'react';
import {a11yHiddenSvgProps} from '../utils/svg';

export function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            width="14"
            height="14"
            fill="currentColor"
            {...a11yHiddenSvgProps}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0.250006C9.58578 0.250007 9.25 0.585794 9.25 1.00001C9.25 1.41422 9.58579 1.75001 10 1.75001L11.1893 1.75L5.71967 7.21966C5.42678 7.51256 5.42678 7.98743 5.71967 8.28032C6.01256 8.57322 6.48744 8.57322 6.78033 8.28032L12.25 2.81065L12.25 3.99999C12.25 4.41421 12.5858 4.74999 13 4.74999C13.4142 4.74999 13.75 4.4142 13.75 3.99999L13.75 0.999997C13.75 0.585784 13.4142 0.25 13 0.25L10 0.250006ZM3.25 3.24999C2.42157 3.24999 1.75 3.92157 1.75 4.74999V10.75C1.75 11.5784 2.42157 12.25 3.25 12.25H9.25C10.0784 12.25 10.75 11.5784 10.75 10.75V6.99999C10.75 6.58578 11.0858 6.24999 11.5 6.24999C11.9142 6.24999 12.25 6.58578 12.25 6.99999V10.75C12.25 12.4068 10.9069 13.75 9.25 13.75H3.25C1.59315 13.75 0.25 12.4068 0.25 10.75V4.74999C0.25 3.09314 1.59315 1.74999 3.25 1.74999H7C7.41421 1.74999 7.75 2.08578 7.75 2.49999C7.75 2.91421 7.41421 3.24999 7 3.24999H3.25Z"
            />
        </svg>
    );
}
