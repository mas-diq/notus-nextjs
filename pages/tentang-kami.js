/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import AOS from "aos";

export default function TentangKami() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Tentang Kami | MD Dental Care</title>
      </Head>
      <IndexNavbar fixed />
      <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
        <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
          <div
            className="w-full md:w-8/12 lg:w-8/12 px-4 items-center"
            data-aos="fade-up"
          >
            <h2 className="text-5xl mb-2 font-semibold leading-normal">
              Beberapa Foto dari MD Dental Care
            </h2>
            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Berikut Beberapa Foto dari MD Dental Care MD Dental Care yang
              terletak di Jl. Kav. Perkebunan Raya No.174B, Bencongan Indah,
              Kec. Klp. Dua, Kabupaten Tangerang, Banten.
            </p>

            <div className="justify-center flex flex-wrap items-center mt-24 bg-blueGray-100">
              <div className="w-full" data-aos="fade-up">
                <div className="justify-center flex flex-wrap relative -mt-12">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Pintu Masuk
                    </h5>
                    {/*<Link href="/auth/login">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_1.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Ruang Depan
                    </h5>
                    {/*<Link href="/profile">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_2.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Ruang Tunggu
                    </h5>
                    {/*<Link href="/landing">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_3.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Peralatan Praktik
                    </h5>
                    {/*<Link href="/auth/login">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_4.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Ruang Praktik
                    </h5>
                    {/*<Link href="/profile">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_5.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Rak Peralatan
                    </h5>
                    {/*<Link href="/landing">*/}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/photos/pic_6.png"
                      />
                    </div>
                    {/*</Link>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
