export const HeroCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-3 rounded-md bg-slate-900 text-white">
      <h2 className="text-xl font-medium">Jagalah Kesehatan Anda</h2>
      <p className="w-4/5 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente
        natus modi quae.
      </p>
      <button className="w-full rounded-md p-2 mt-9 text-lg bg-[#13629D] bg-opacity-80 hover:bg-opacity-100">
        Buat Appointment
      </button>
    </div>
  );
};
