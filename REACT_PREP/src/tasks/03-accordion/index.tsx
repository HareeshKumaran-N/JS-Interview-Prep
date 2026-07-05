import './styles.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  mode?: 'single' | 'multiple';
}

export default function Accordion({ items, mode = 'single' }: AccordionProps) {
  // TODO: track open section id(s); for mode="single" only one at a time,
  // for mode="multiple" independent toggles

  return (
    <div className="accordion" data-mode={mode}>
      {items.map((item, index) => (
        <div className="accordion__item" key={index}>
          <button className="accordion__header" type="button" aria-expanded={false}>
            <span className="accordion__title">{item.title}</span>
            <span className="accordion__icon">+</span>
          </button>
          <div className="accordion__content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
