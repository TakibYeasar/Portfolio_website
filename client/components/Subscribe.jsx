
export function Subscribe() {
  return (
    <div>
      <h3 className="my-0 text-sm font-semibold tracking-wider uppercase">
        Newsletter
      </h3>
      <p className="mt-4 text-base ">
        Get new articles delivered to your inbox!
      </p>
      <form className="relative flex my-4 space-y-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email-address"
          placeholder="bobloblaw@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 bg-white dark:bg-dark border-gray-300 dark:border-gray-400 rounded-full placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#F8FAFC] dark:focus:ring-offset-midnight"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-full hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
        >
        </button>
      </form >
    </div>
  )
};