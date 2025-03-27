const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="center mb-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">You've found me</h2>
        <p className="mb-6">
          Welcome to my little corner of the internet! I'm just a college student,
          about to graduate soon, with a passion for all things food.
        </p>

        <p className="mb-6">
          This blog is my <span className="font-bold text-red-500">imperfect</span> journey to become better at cooking.
          <div className="text-center">
            <span className="font-bold text-orange-500">Blogs:</span> Most days you eat to eat.
            <br></br>
            <span className="font-bold text-pink-500">Recipes:</span> Some days you eat to <span className="font-bold text-red-500">EAT.</span>
            <br></br>
          </div>

        </p>
        <p>
          Just real attempts, mid-ahh food photography, and occasional
          triumphs that I'm using to stay accountable to myself.
        </p>
        <p>
          Drop me a line at <a href="mailto:ryanlin232@gmail.com" className="text-blue-600 hover:underline">ryanlin232@gmail.com</a>!
        </p>
        <p className="mb-6">
        </p>
      </section>

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <blockquote className="italic text-lg leading-relaxed text-gray-700 relative pl-4 border-l-4 border-gray-300 mb-4">
          <p className="mb-4">
            "If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. The extent to which you can walk in someone else's shoes or at least eat their food, it's a plus for everybody.
          </p>
          <p>
            Open your mind, get up off the couch, move."
          </p>
        </blockquote>
        <cite className="block text-right text-gray-600 font-semibold">
          -- Anthony Bourdain
        </cite>
      </div>
    </div>
  );
};

export default AboutPage;