import React from "react";
import { Layout } from "./layouts/default";
import { Card } from "./components/card/card";
import { Icons } from "./components/icons";
import { Components } from "./components";

export const App = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/12">
            <Card>
              <div>
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-5 lg:translate-y-7">
                    <img
                      src="/logo.jpg"
                      alt="logo"
                      className="rounded-full w-24 h-24 lg:w-32 lg:h-32 border-2 border-slate-300"
                    />
                  </div>
                  <div>
                    <img
                      src="/background.jpg"
                      alt="card"
                      className="h-32 lg:h-48 w-full "
                    />
                  </div>
                </div>
                <main className="py-10 px-7 mt-8">
                  <header className="text-center">
                    <h1 className=" font-semibold text-gray-700 text-[15px] lg:text-lg">
                      Mitramas Infosys Global
                    </h1>
                    <p className="text-gray-500 mb-6 text-[12px] lg:text-sm">
                      Layanan IT
                    </p>
                    <div className="flex items-center justify-center gap-1 text-green-600 font-mediumanslate-x-1 lg:-translate-x-2">
                      <Icons.Pencil />
                      <p className="text-[11px] font-semibold ">
                        Sunting Profile
                      </p>
                    </div>
                  </header>
                  <article className="my-7">
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">
                        Status Perusahaan
                      </p>
                      <div className="flex justify-between">
                        <p className="text-green-600 font-medium">Aktif</p>
                        <Components.SwitchButton />
                      </div>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">
                        Singkatan
                      </p>
                      <p className="text-gray-700 font-medium">MIG</p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">
                        Alamat Perusahaan
                      </p>
                      <p className="text-gray-700 font-medium">
                        Jl. Tebet Raya No.42, Jakarta Selatan
                      </p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">
                        Penganggung Jawab (PIC)
                      </p>
                      <p className="text-gray-700 font-medium">Jhon Doe</p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">
                        Tanggal PKP
                      </p>
                      <p className="text-gray-700 font-medium">03 Maret 2021</p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">Email</p>
                      <p className="text-green-700 font-medium flex gap-3 items-end">
                        <Icons.Envelope />
                        <span className="underline underline-offset-4">
                          mig@mitrasolusi.group
                        </span>
                      </p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">No. Telp</p>
                      <p className="text-green-700 font-medium flex gap-3 items-center">
                        <Icons.Phone />
                        <span>021-5678-1234</span>
                      </p>
                    </section>
                    <section className="mb-3">
                      <p className="text-gray-500 text-[13px] mb-2">No. Telp</p>
                      <p className="text-green-700 font-medium flex gap-3 items-center">
                        <Icons.Web />
                        <span className="underline underline-offset-4">
                          mitramas.com
                        </span>
                      </p>
                    </section>
                  </article>
                </main>
              </div>
            </Card>
          </div>
          <div className="w-full lg:w-9/12">
            <Card>
              <div className="py-5 px-7">
                <header className="flex items-center justify-between mb-3">
                  <h1 className="text-gray-600 font-bold text-lg lg:text-xl">
                    Lokasi
                  </h1>
                  <a href="" className="text-green-600">
                    Lihat Semua
                  </a>
                </header>
                <main className="py-3 flex flex-col lg:flex-row gap-3">
                  <section className="bg-green-700 text-white p-4 rounded flex justify-between items-center w-full">
                    <Icons.OfficeBuilding />
                    <div>
                      <h1 className="text-[22px] font-bold">20</h1>
                      <span className="font-light text-[12px]">Induk</span>
                    </div>
                  </section>
                  <section className="bg-green-600 text-white p-4 rounded flex justify-between items-center w-full">
                    <Icons.Setting />
                    <div>
                      <h1 className="text-[22px] font-bold text-end">3</h1>
                      <span className="font-light text-[12px]">
                        Sub Lokasi Level 1
                      </span>
                    </div>
                  </section>
                  <section className="bg-green-500 text-white p-4 rounded flex justify-between items-center w-full">
                    <Icons.Home w={"w-[4rem]"} h={"h-[4rem]"} />
                    <div>
                      <h1 className="text-[22px] font-bold text-end">3</h1>
                      <span className="font-light text-[12px]">
                        Sub Lokasi Level 1
                      </span>
                    </div>
                  </section>
                </main>
              </div>
            </Card>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-16 mt-4">
              <div>
                <div className="grid grid-rows-1 gap-2 lg:gap-9">
                  <Card>
                    <main className="px-4 py-4 lg:px-8">
                      <header className="flex justify-between items-end">
                        <h1 className="text-md lg:text-2xl text-gray-700 font-bold">
                          Akun Bank
                        </h1>
                        <button className="bg-green-600 flex align-center items-center gap-1 py-1 px-3 rounded text-white">
                          <Icons.Plus />
                          <span className="text-[12px] lg:text-sm">
                            Tambah Akun Bank
                          </span>
                        </button>
                      </header>
                      <article className="my-3 mb-3">
                        <div className="flex gap-2 lg:gap-7 mb-4">
                          <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-lime-600 h-24 w-6/12 lg:w-3/12 rounded relative">
                            <span className="text-white absolute right-0 bottom-0 p-3 font-semibold text-lg">
                              VISA
                            </span>
                          </div>
                          <div className="w-9/12">
                            <header className="flex gap-2 items-center justify-between">
                              <h5 className="text-[12px] lg:text-lg font-bold text-gray-700">
                                Bank KB Bukopin
                              </h5>
                              <div className="flex items-center gap-2">
                                <div className="text-green-500">
                                  <Icons.Pencil />
                                </div>
                                <div className="text-red-500">
                                  <Icons.Trash />
                                </div>
                              </div>
                            </header>
                            <div className="mt-5">
                              <p className="text-[12px] lg:text-sm text-gray-500">
                                **** 0876 - Yusron Taufiq
                              </p>
                              <p className="text-[12px] lg:text-sm text-gray-400">
                                IDR
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 lg:gap-7 mb-4">
                          <div className="bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400 h-24 w-6/12 lg:w-3/12 rounded relative">
                            <span className="text-white absolute right-0 bottom-0 p-3 font-semibold text-lg">
                              VISA
                            </span>
                          </div>
                          <div className="w-9/12">
                            <header className="flex gap-2 items-center justify-between">
                              <h5 className="text-[12px] lg:text-lg font-bold text-gray-700">
                                Citybank, NA
                              </h5>
                              <div className="flex items-center gap-2">
                                <div className="text-green-500">
                                  <Icons.Pencil />
                                </div>
                                <div className="text-red-500">
                                  <Icons.Trash />
                                </div>
                              </div>
                            </header>
                            <div className="mt-5">
                              <p className="text-[12px] lg:text-sm text-gray-500">
                                **** 5525 - Si Tampan
                              </p>
                              <p className="text-[12px] lg:text-sm text-gray-400">
                                IDR
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </main>
                  </Card>
                  <Card>
                    <div className="px-4 py-4 lg:px-6">
                      <header className="flex items-center justify-between">
                        <h1 className="text-md lg:text-2xl font-bold text-gray-700">
                          Relasi
                        </h1>
                        <a
                          href=""
                          className="text-green-500 text-[13px] lg:text-sm"
                        >
                          Lihat Semua
                        </a>
                      </header>
                      <main className="mt-0 lg:mt-[5.5rem]">
                        <div className="flex items-center gap-4 py-0 lg:py-3">
                          <Icons.Share />
                          <div className="flex flex-col">
                            <h1 className="text-[25px] font-bold text-gray-700">
                              20
                            </h1>
                            <span className="text-[12px] text-gray-500">
                              Memiliki
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 py-0 lg:py-3">
                          <Icons.Share />
                          <div className="flex flex-col">
                            <h1 className="text-[25px] font-bold text-gray-700">
                              108
                            </h1>
                            <span className="text-[12px] text-gray-500">
                              Menggunakan
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 py-0 lg:py-3">
                          <Icons.Share />
                          <div className="flex flex-col">
                            <h1 className="text-[25px] font-bold text-gray-700">
                              67
                            </h1>
                            <span className="text-[12px] text-gray-500">
                              Meminjam
                            </span>
                          </div>
                        </div>
                      </main>
                    </div>
                  </Card>
                </div>
              </div>
              <Card>
                <div className="px-4 py-5 lg:px-8">
                  <header>
                    <h1 className="text-md lg:text-2xl font-bold text-gray-700">
                      Aktivitas
                    </h1>
                  </header>
                  <main className="mt-4">
                    <article className="mt-0 lg:mt-12">
                      <h5 className="text-[14px] lg:text-lg text-gray-700 font-medium">
                        Yusron baru saja menambahkan lokasi baru Kantor Cabang
                        Jagakarsa
                      </h5>
                      <small className="text-gray-400">Hari ini, 06:00</small>
                    </article>
                    <article className="mt-0 lg:mt-12">
                      <h5 className="text-[14px] lg:text-lg text-gray-700 font-medium">
                        Bintang baru saja menghapus sublokasi KCP Tebet 4 dari
                        induk Kantor Cabang Tebet
                      </h5>
                      <small className="text-gray-400">Kemaren, 17:52</small>
                    </article>
                    <article className="mt-0 lg:mt-12">
                      <h5 className="text-[14px] lg:text-lg text-gray-700 font-medium">
                        Yusron baru saja menambahkan lokasi baru Kantor Cabang
                        Bekasi
                      </h5>
                      <small className="text-gray-400">Kemaren, 17:52</small>
                    </article>
                  </main>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
