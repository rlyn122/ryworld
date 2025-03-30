const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="center mb-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4 uppercase drop-shadow-sm">You&apos;ve found me</h2>
        <p className="mb-6">  
          Welcome to my little corner of the internet! I&apos;m just a college student,
          about to graduate soon, who needs to eat. Just real attempts, mid-ahh food photography, and occasional
          triumphs that I&apos;m using to stay accountable to myself.
        </p>
        <p>
          Drop me a line at <a href="mailto:ryanlin232@gmail.com" className="text-blue-600 hover:underline">ryanlin232@gmail.com</a>!
        </p>
        <p className="mb-6">
        </p>
      </section>
    </div>
  );
};

export default AboutPage;