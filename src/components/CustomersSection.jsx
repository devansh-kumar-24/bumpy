const CustomersSection = () => (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-12">Our Customers</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4'].map((customer) => (
            <div key={customer} className="w-40 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
              <span className="text-gray-500">{customer} Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default CustomersSection;
  