const CustomersSection = () => (
  <section className="bg-gray-100 py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-8 sm:mb-12">
        Our Customers
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4'].map((customer) => (
          <div
            key={customer}
            className="w-32 sm:w-40 h-16 sm:h-20 bg-white rounded-lg shadow-md flex items-center justify-center"
          >
            <span className="text-gray-500">{customer} Logo</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomersSection;
