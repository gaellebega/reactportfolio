
const Portfolios = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-teal-500">My Recent Projects</h2>
            <p className="mt-4 text-gray-300">
              Over the past few months, I've been deeply engaged in a series of exciting projects that have expanded my skills and perspectives. From developing innovative mobile applications, my recent work reflects a commitment to leveraging technology for impactful solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href=" https://gaellebega.github.io/age-calculator/"
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-200 hover:shadow-teal-300"
            >
              <img src="/im2.png" className="mx-auto h-32" alt="" />
              <h2 className="mt-4 text-xl font-bold text-teal-400">Age calculator</h2>
              <p className="mt-1 text-sm text-gray-300">
                The Age Calculator project is a simple web application where users can enter their birthdate, and the application will calculate their age based on the current date.
              </p>
            </a>

            <a
              href=" https://gaellebega.github.io/Random-Emoji2/"
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-200 hover:shadow-teal-300"
            >
              <img src="/im1.png" className="mx-auto h-32" alt="" />
              <h2 className="mt-4 text-xl font-bold text-teal-400">Random Emojis</h2>
              <p className="mt-1 text-sm text-gray-300">
                The Random Emoji Face project is a fun and interactive web application that generates a random emoji face based on the user's mood.
              </p>
            </a>

            <a
              href="https://countries-app4.onrender.com"
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-200 hover:shadow-teal-300"
            >
              <img src="/countryapp.png" className="mx-auto h-32" alt="" />
              <h2 className="mt-4 text-xl font-bold text-teal-500">Country APIs</h2>
              <p className="mt-1 text-sm text-gray-300">
                The Country APIs application allows users to search for a specific country using its name or ISO code. It provides details such as population, area, capital, and official language.
              </p>
            </a>

            <a
              href=" https://gaellebega.github.io/roll-diceB/"
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-200 hover:shadow-teal-300"
            >
              <img src="/im3.png" className="mx-auto h-32" alt="" />
              <h2 className="mt-4 text-xl font-bold text-teal-500">Roll Dice</h2>
              <p className="mt-1 text-sm text-gray-300">
                The Roll Dice project is a web application that simulates a six-sided die. It generates a random number and displays it to the user.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolios;



