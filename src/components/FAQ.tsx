import { FAQI } from '@/interfaces';

interface FAQProps {
  faq: FAQI;
}

const FAQ = ({ faq }: FAQProps) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${faq.bsPosition}`}
            aria-expanded="false"
            aria-controls={`panelsStayOpen-collapse${faq.bsPosition}`}
          >
            <h3>{faq.question}</h3>
          </button>
        </h2>
        <div id={`panelsStayOpen-collapse${faq.bsPosition}`} className="accordion-collapse collapse ">
          <div className="accordion-body">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
