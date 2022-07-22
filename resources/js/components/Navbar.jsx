import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import Gmail from "./images/gmail.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const linearGradientStop;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={`${
                scrollPosition > 0 ? "shadow-sm" : "mt-5"
            } flex sticky justify-between h-14 px-10 top-0 z-40 bg-white`}
        >
            <div className="logo w-auto p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-auto fill-gray-900 hover:fill-blue-500"
                    viewBox="0 0 199.9382 100"
                >
                    <path
                        d="M490.51332,480.05369a47.357,47.357,0,0,0-9.63469-15.63848,44.45208,44.45208,0,0,0-14.59745-10.26627A44.98375,44.98375,0,0,0,447.89,450.407a46.68315,46.68315,0,0,0-33.96374,14.29618,48.0579,48.0579,0,0,0-9.92744,15.73514,53.01489,53.01489,0,0,0-3.59991,19.66754,49.74258,49.74258,0,0,0,3.89266,19.57369,50.31953,50.31953,0,0,0,10.51087,15.92855,47.774,47.774,0,0,0,15.76443,10.55319A49.82486,49.82486,0,0,0,450.03022,550a58.26487,58.26487,0,0,0,20.53326-3.456c1.26972-.47426,2.53432-1.01647,3.79577-1.59942l-14.45241-14.45229a35.81389,35.81389,0,0,1-8.70964,1.08383,27.933,27.933,0,0,1-19.36434-7.48394,29.735,29.735,0,0,1-9.10671-15.1686h70.29019a1,1,0,0,0,1-1v-8.00908A54.908,54.908,0,0,0,490.51332,480.05369Zm-68.12125,11.99225q1.94433-10.936,8.7584-17.46014a24.102,24.102,0,0,1,33.18444.19123,31.32294,31.32294,0,0,1,8.85724,17.26891Z"
                        transform="translate(-400.39895 -450)"
                    />
                    <circle cx="183.9382" cy="77.6642" r="14" />
                    <path
                        d="M488.9418,548.07294a1,1,0,0,0,.85414,1.52h86.5412a21.14413,21.14413,0,0,1-21.12147-20.17078,1.00209,1.00209,0,0,0-.9935-.97266H530.5625a1,1,0,0,1-.85523-1.51827l45.7-75.413A1,1,0,0,0,574.552,450H488.01634a21.1441,21.1441,0,0,1,21.12148,20.17093.99623.99623,0,0,0,.98667.97267c3.92614.00061,18.738.00143,23.88129.0017a.997.997,0,0,1,.847,1.52Z"
                        transform="translate(-400.39895 -450)"
                    />
                </svg>
            </div>

            <ul className="navlist flex px-4 list-none items-center text-gray-600">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portofolio">Portofolio</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>

            <div className="relative z-50">
                <button
                    className="logo h-full w-auto"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-auto fill-gray-900 stroke-current stroke-0.1 hover:stroke-blue-500 hover:fill-blue-500"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                    <Transition
                        show={isOpen}
                        enter="transition ease-in-out duration-150"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in-out duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className={`
          ${
              scrollPosition > 0
                  ? "shadow-[0px_2px_3px_0px_rgba(0,0,0,0.1)]"
                  : ""
          }
          absolute font-title flex-col top-[3.5rem] right-0 w-36 h-auto bg-white`}
                        >
                            <div className="dropitem h-full">
                                <a href="https://www.gmail.com" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[1.2rem] m-1 h-auto"
                                        viewBox="0 0 838.18915 838.18915"
                                    >
                                        <path
                                            className="fill-[#475993]"
                                            d="M79.67572,231.29669V769.48584a150,150,0,0,0,150,150H494.50629s.37005-196.65613.86175-290.483c.03974-7.58-2.02-9.50311-9.42554-9.33093-21.53588.50048-43.09118.23559-64.63842.15618-15.55689-.05737-22.3548-6.89978-22.425-22.56243q-.1983-44.22489-.21072-88.45057A22.03646,22.03646,0,0,1,420.562,486.80188c22.092-.14771,44.18928-.257,66.27662.09662,6.20471.0993,7.80268-1.8656,7.81208-7.895.0531-34.08856-1.30726-68.2124.75567-102.25983,2.72-44.891,17.15973-84.793,52.52643-114.77936,26.58087-22.537,58.17877-32.69867,92.39624-34.92034,30.76849-1.99769,61.62335-.79651,92.439-.79627,15.21533.00012,21.83343,6.8183,21.94207,22.09192q.26194,36.8203.00318,73.64386c-.10132,15.52942-6.93079,22.18768-22.60639,22.41815-18.81512.27661-37.67-.26135-56.43774.79633-17.34656.97754-33.34216,5.97424-42.87079,22.52026a49.39485,49.39485,0,0,0-6.32513,20.11835c-2.99567,31.3006-.76679,62.69275-1.49994,94.03467-.13617,5.82305,3.79535,4.86834,7.20624,4.87121q50.73221.04248,101.46441.02136c20.352.00653,26.68915,7.47675,24.17743,27.73011-3.52173,28.39825-6.72858,56.83557-10.1217,85.25006-1.71778,14.38452-8.053,20.05523-22.592,20.08551-29.73.06183-59.46533.31982-89.18708-.17865-8.01562-.13452-10.43042,1.5802-10.41986,10.08172.11658,93.28235-.23968,196.47058-.48333,289.7533H767.86487a150,150,0,0,0,150-150V231.29669a150,150,0,0,0-150-150H229.67572A150,150,0,0,0,79.67572,231.29669Z"
                                            transform="translate(-79.67572 -81.29669)"
                                        />
                                    </svg>
                                    <p className="w-3/5 text-sm font-medium">
                                        ezweb
                                    </p>
                                </a>
                            </div>
                            <div className="dropitem h-full">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[1.2rem] m-1 h-auto"
                                        viewBox="0 0 48 48"
                                        width="16px"
                                        height="16px"
                                    >
                                        <path
                                            fill="#4caf50"
                                            d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                                        />
                                        <path
                                            fill="#1e88e5"
                                            d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                                        />
                                        <polygon
                                            fill="#e53935"
                                            points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                                        />
                                        <path
                                            fill="#c62828"
                                            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                                        />
                                        <path
                                            fill="#fbc02d"
                                            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                                        />
                                    </svg>
                                    <p className="w-3/5 text-sm font-medium">
                                        ezweb
                                    </p>
                                </a>
                            </div>
                            <div className="dropitem h-full">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[1.2rem] m-1 h-auto"
                                        viewBox="0 0 840 840"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="color"
                                                x1="875.21495"
                                                y1="124.78505"
                                                x2="125.11226"
                                                y2="874.88774"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0.15252"
                                                    stopColor="#9101db"
                                                />
                                                <stop
                                                    offset="0.34684"
                                                    stopColor="#c912ac"
                                                />
                                                <stop
                                                    offset="0.4732"
                                                    stopColor="#ef1e8d"
                                                />
                                                <stop
                                                    offset="0.53056"
                                                    stopColor="#fa2184"
                                                />
                                                <stop
                                                    offset="0.66889"
                                                    stopColor="#fd6c58"
                                                />
                                                <stop
                                                    offset="0.85775"
                                                    stopColor="#fdcf1c"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill="url('#color')"
                                            d="M80,230V770A150,150,0,0,0,230,920H770A150,150,0,0,0,920,770V230A150,150,0,0,0,770,80H230A150,150,0,0,0,80,230ZM681.22723,831.22723H318.77277a150,150,0,0,1-150-150V318.77277a150,150,0,0,1,150-150H681.22723a150,150,0,0,1,150,150V681.22723A150,150,0,0,1,681.22723,831.22723Z"
                                            transform="translate(-80 -80)"
                                        />
                                        <circle
                                            fill="url('#color')"
                                            cx="633.25505"
                                            cy="206.63791"
                                            r="52.14712"
                                        />
                                        <path
                                            fill="url('#color')"
                                            d="M502.80273,280.38934c-118.34912,0-214.2901,95.94092-214.2901,214.2901s95.941,214.2901,214.2901,214.2901c118.34919,0,214.29017-95.94091,214.29017-214.2901S621.15192,280.38934,502.80273,280.38934Zm0,339.33606a125.04593,125.04593,0,1,1,125.046-125.046A125.04594,125.04594,0,0,1,502.80273,619.7254Z"
                                            transform="translate(-80 -80)"
                                        />
                                    </svg>
                                    <p className="w-3/5 text-sm font-medium">
                                        ezweb
                                    </p>
                                </a>
                            </div>
                        </div>
                    </Transition>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
