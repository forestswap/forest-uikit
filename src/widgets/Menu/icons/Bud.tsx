import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 511 511" {...props}>
            <path d="m380.702 177.582c3.974-7.019 7.039-14.646 9.098-22.691 4.786-18.696 7.614-52.913 6.725-81.361-1.401-44.774-10.848-67.879-29.728-72.712-26.317-6.738-49.723 29.653-63.283 53.41-27.347-53.618-66.807-55.388-95.022-.026-13.484-23.62-36.976-60.115-63.275-53.384-18.88 4.833-28.326 27.938-29.728 72.712-.89 28.448 1.938 62.665 6.724 81.359 2.059 8.043 5.121 15.671 9.093 22.69l-2.101 12.909c-17.749 77.947 9.89 159.539 65.929 212.356 11.812 11.132 28.49 14.611 44.872 11.184v81.985c0 8.836 7.163 16 16 16s16-7.164 16-16v-81.907c16.501 3.455 33.163-.226 44.872-11.262 53.882-50.784 81.784-128.512 67.606-204.266m-26.133-164.949c8.651 19.862 6.796 68.151 3.996 92.226-8.907-17.307-22.421-35.15-41.946-35.077 15.612-32.08 30.376-51.349 37.95-57.149zm-102.344 226.957c-10.096-17.084-22.255-32.598-36.103-46.207 5.238-19.726 12.106-37.721 19.417-50.807 8.658-15.499 15.108-18.987 16.686-18.987 1.515 0 7.729 3.304 16.121 17.986 12.519 21.902 19.041 48.861 20.032 51.757-13.868 13.621-26.045 29.153-36.153 46.258zm-46.372-109.393c-6.056 11.462-11.734 25.484-16.535 40.74-8.91-6.319-18.294-11.953-28.083-16.849 3.083-10.883 6.889-21.456 10.909-30.099 7.344-15.79 13.455-21.179 15.499-22.121 2.483 1.105 9.799 7.973 18.21 28.329zm109.278 40.74c-4.808-15.268-10.496-29.286-16.536-40.727 8.43-20.393 15.757-27.245 18.215-28.342 2.299 1.042 9.282 7.41 17.437 26.473 3.626 8.477 6.612 17.364 8.976 25.744-9.793 4.896-19.18 10.531-28.092 16.852zm-62.906-146.46c3.587 0 15.536 10.893 27.678 43.259.336.896.756 1.733 1.227 2.529-4.32 9.827-7.878 19.039-10.323 26.732-11.959-7.221-25.205-7.222-37.167.005-2.417-7.592-5.933-16.719-10.181-26.413.113-.265.229-.527.329-.801 12.378-33.902 24.711-45.311 28.437-45.311zm-102.39-11.738c16.03 12.39 38.528 57.038 37.803 57.038-18.229 0-31.918 15.937-41.768 34.951-2.736-23.616-4.653-71.95 3.965-91.989zm63.465 345.822c-45.43-42.817-69.39-108.146-58.693-171.791 56.322 31.642 92.1 91.328 96.924 153.502 1.195 15.398-26.997 28.875-38.231 18.289zm77.85 0c-3.276 3.089-7.928 4.09-12.809 3.684 3.909-7.617 5.751-15.98 5.094-24.449-1.671-21.535-6.453-42.635-14.223-62.956 4.238-4.911 22.596-55.466 80.631-88.07 10.689 63.6-13.233 128.946-58.693 171.791z"/>
        </Svg>
    );
};

export default Icon;