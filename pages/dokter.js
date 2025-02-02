/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";
import AOS from "aos";
import { useEffect } from "react";

export default function Dokter() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Dokter | MD Dental Care</title>
      </Head>
      <IndexNavbar fixed />
      <div className="justify-center flex flex-wrap items-center pt-20 pb-20 bg-blueGray-100">
        <div className="bg-blueGray-100 justify-center flex flex-wrap items-center pt-20">
          <div
            className="w-full md:w-8/12 lg:w-8/12 px-4 items-center"
            data-aos="fade-up"
          >
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-teeth text-xl"></i>
            </div>
            <h3 className="text-5xl mb-2 font-semibold leading-normal">
              Bekerja Sama dengan 5 Dokter Gigi
            </h3>
            <p className="text-2xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              MD Dental Care telah bekerja sama dengan 4 Dokter Gigi umum dan 1
              Dokter Gigi Spesialis bedah mulut rujukan.
            </p>
            <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              5 Dokter tersebut adalah sebagai berikut :
            </p>
            <div className="block pb-6">
              <span className="text-xl font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Drg. Mita Derayanti
              </span>
              <span className="text-xl font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Drg. M Ihsan Pramadya
              </span>
              <span className="text-xl font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Drg. Ikrimah
              </span>
              <span className="text-xl font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Drg. Elia Roza
              </span>
              <span className="text-xl font-semibold inline-block py-1 px-4  rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2 shadow">
                Drg. Santi Anggraini SpBM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex flex-wrap items-center bg-blueGray-100 pb-20">
        <div className="-mt-24 max-w-sm px-12" data-aos="fade-up">
          <div className=" bg-white shadow-lg rounded-full-bot text-center p-4">
            <button>
              <img
                alt="..."
                className="rounded-full w-full mx-auto p-1 bg-white"
                src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945658/MD%20Dental%20Care/assets/drg_mita_derayanti_vrco46.png"
              />
              <p className="text-2xl text-purple-main mt-2 mb-4 font-bold">
                Drg. Mita Derayanti
              </p>
              <p className="text-lg mb-4 px-4 font-semibold">
                Praktek Selasa, Kamis dan Sabtu (Pukul 08.00 - 11.00)
              </p>
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
            <button>
              <img
                alt="..."
                className="rounded-full w-full mx-auto p-1 bg-white"
                src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945659/MD%20Dental%20Care/assets/drg_ikrimah_izchau.png"
              />
              <p className="text-2xl text-purple-main mt-2 mb-4 font-bold">
                Drg. Ikrimah
              </p>
              <p className="text-lg mb-4 px-4 font-semibold">
                Praktek Rabu dan Jum'at (Pukul 08.00 - 11.00)
              </p>
            </button>
          </div>
        </div>

        <div className="-mt-12 max-w-sm px-12" data-aos="fade-up">
          <div className="bg-white shadow-lg rounded-full-bot text-center p-4">
            <button>
              <img
                alt="..."
                className="rounded-full w-full mx-auto p-1 bg-white"
                src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945659/MD%20Dental%20Care/assets/drg_ihsan_hrxls1.png"
              />
              <p className="text-2xl text-purple-main mt-2 mb-4 font-bold">
                Drg. M Ihsan Pramadya
              </p>
              <p className="text-lg mb-4 px-4 font-semibold">
                Praktek Senin, Rabu dan Jum'at (Pukul 17.00 - 20.00)
              </p>
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-full-top text-center p-4 mt-8">
            <button>
              <img
                alt="..."
                className="rounded-full w-full mx-auto p-1 bg-white"
                src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945660/MD%20Dental%20Care/assets/drg_elia_roza_bw4tjj.png"
              />
              <p className="text-2xl text-purple-main mt-2 mb-4 font-bold">
                Drg. Elia Roza
              </p>
              <p className="text-lg mb-4 px-4 font-semibold">
                Praktek Selasa, Kamis dan Sabtu (Pukul 17.00 - 20.00)
              </p>
            </button>
          </div>
        </div>

        <div className="-mt-24 max-w-sm px-12" data-aos="fade-up">
          <div className=" bg-white shadow-lg rounded-full text-center p-4">
            <button>
              <img
                alt="..."
                className="rounded-full w-full mx-auto p-1 bg-white"
                src="https://res.cloudinary.com/deoqy5q0p/image/upload/v1674945659/MD%20Dental%20Care/assets/drg_santi_z6g7jp.png"
              />
              <p className="text-2xl text-purple-main mt-2 mb-4 font-bold">
                Drg. Santi Anggraini SpBM
              </p>
              <p className="text-lg mb-4 px-4 font-semibold">
                (Praktek dengan Perjanjian)
              </p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
