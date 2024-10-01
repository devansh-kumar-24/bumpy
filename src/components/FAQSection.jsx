import FAQItem from './FAQItem';

const FAQSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center text-black mb-12">FAQs</h2>
      <div className="max-w-3xl mx-auto">
        <FAQItem
          question="How does Bumpy Buddy work?"
          answer="Bumpy Buddy uses advanced AI algorithms to analyze terrain and traffic data, providing you with the smoothest route for your journey."
        />
        <FAQItem
          question="Is Bumpy Buddy available worldwide?"
          answer="Currently, Bumpy Buddy is available in select countries. We're constantly expanding our coverage to bring smooth navigation to more regions."
        />
        <FAQItem
          question="Can I use Bumpy Buddy offline?"
          answer="Yes! Bumpy Buddy offers offline support, so you can navigate seamlessly even in areas with poor connectivity."
        />
      </div>
    </div>
  </section>
);

export default FAQSection;
