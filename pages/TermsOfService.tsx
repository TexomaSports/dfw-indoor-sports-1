import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen pt-24 pb-12 font-sans transition-colors duration-300">
      <SEO title="Terms of Service" description="Terms of Service for DFW Indoor Sports." />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600 dark:text-gray-400">
          <p>Last updated: October 2024</p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the DFW Indoor Sports website and facilities.</p>
          <h3>Conditions of Use</h3>
          <p>By accessing this website and our facility, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms.</p>
          <h3>Facility Rules</h3>
          <p>All members and guests must adhere to facility codes of conduct, including safety regulations, equipment usage guidelines, and respect for other patrons. Violation may result in membership termination.</p>
          <h3>Booking & Cancellations</h3>
          <p>Please refer to our Refund Policy page for detailed information regarding booking cancellations and refunds.</p>
          <h3>Limitation of Liability</h3>
          <p>DFW Indoor Sports is not liable for any damages that may occur to you as a result of your misuse of our website or facility.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;