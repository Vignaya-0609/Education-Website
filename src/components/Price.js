import React from 'react';

const priceDetails = [
    {
        plan: "BASIC PLAN",
        price: "₹ 49k",
        description: "Ideal for individuals starting out, offering essential features to begin your journey with a budget-friendly approach."
    },
    {
        plan: "BEGINNER PLAN",
        price: "₹ 69k",
        description: "Perfect for beginners who want more tools and resources to advance their skills and knowledge."
    },
    {
        plan: "PREMIUM PLAN",
        price: "₹ 89k",
        description: "For those seeking a comprehensive set of features, providing advanced tools for in-depth learning and growth."
    },
    {
        plan: "ULTIMATE PLAN",
        price: "₹ 129k",
        description: "The complete package, offering all features and tools for maximum benefit, designed for serious learners."
    },
];

function Price() {
  return (
    <section className='price' id='pricing'>
        <h3>OUR PRICING</h3>
        <h2>Pricing & Packages</h2>
        <div className='pricing'>
            {priceDetails.map((item, index) => (
                <div className='price-card' key={index}>
                    <h4>{item.plan}</h4>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                    <button>Get Started</button>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Price;
