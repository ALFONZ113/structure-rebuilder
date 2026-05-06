
import React from 'react';
import CommunityReviews from '@/components/CommunityReviews';

const CommunityReviewsSection = () => {
  return (
    <section id="hodnoceni-komunity" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hodnocení uživatelů</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Přečtěte si recenze a zkušenosti dalších uživatelů s poskytovateli internetu
          </p>
        </div>
        <CommunityReviews />
      </div>
    </section>
  );
};

export default CommunityReviewsSection;
