import React, { useState, useCallback, memo } from 'react';
import FAQItem from './FAQItem';
import { faqItems } from '../data/faqData';

export const FAQAccordion = memo(function FAQAccordion() {
  // First item open by default
  const [openId, setOpenId] = useState(faqItems[0]?.id || null);

  const handleToggle = useCallback((id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div className="faq-accordion-group" role="tablist" aria-multiselectable="false">
      {faqItems.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
});

export default FAQAccordion;
