import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shared/ui/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="pt-35">
      <div className="max-w-xl w-full mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold hover:no-underline">
              Какие документы нужны для быстрого заселения?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Достаточно паспорта РФ и ваучера
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold hover:no-underline">
              Могу ли я отказаться от брони?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Да, конечно. Вы можете отказаться от брони в любое время, вплоть
              до 24 часов до времени заселения.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold hover:no-underline">
              Вдруг что-то пойдёт не так?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Если возникнут проблемы - наша поддержка на связи и готова помочь
              в любой день недели
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
