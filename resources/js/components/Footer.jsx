import React from "react";
const Footer = () => {
    return (
        <section className="flex-col bg-gray-900 items-center justify-center text-white h-80 w-full space-y-10 font-sans px-12 mt-40 font-light text-xs">
            <div className="w-1/2 h-1/8 space-x-2">
                <div className="logo w-auto p-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-auto fill-white"
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
                <p className="w-5/6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis quae asperiores illum voluptatum, corrupti facere
                    ab odio eligendi eius atque qui libero, praesentium aperiam
                    quaerat itaque ipsam suscipit molestiae saepe?
                </p>
            </div>
            <div className="w-1/2 h-auto justify-start space-x-16">
                <div className="fotlist flex-col ml-20 space-y-2">
                    <p>Home</p>
                    <p>Portofolio</p>
                    <p>Blog</p>
                    <p>About</p>
                </div>
                <div className="line h-24 bg-white"></div>
                <div className="fotlist flex-col ml-20 space-y-2">
                    <p>Home</p>
                    <p>Portofolio</p>
                    <p>Blog</p>
                    <p>About</p>
                </div>
                <div className="line h-24 bg-white"></div>
                <div className="fotlist flex-col ml-20 space-y-2">
                    <p>Home</p>
                    <p>Portofolio</p>
                    <p>Blog</p>
                    <p>About</p>
                </div>
            </div>
        </section>
    );
};
export default Footer;
