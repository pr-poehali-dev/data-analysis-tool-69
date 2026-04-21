import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С чего начинается работа?",
      answer:
        "Первая консультация — это знакомство и оценка ситуации. Я выслушаю вас, задам вопросы и вместе мы определим запрос и план работы. Никакого давления и готовых советов с порога.",
    },
    {
      question: "Сколько длится консультация?",
      answer:
        "Каждая консультация длится 60 минут. Этого времени достаточно, чтобы глубоко поработать с темой без спешки.",
    },
    {
      question: "Нужно ли приходить вдвоём?",
      answer:
        "Зависит от запроса. Парные консультации возможны и рекомендуются при работе с отношениями. Индивидуальные сессии тоже эффективны — иногда важно начать с себя.",
    },
    {
      question: "Конфиденциально ли всё, что я расскажу?",
      answer:
        "Абсолютно. Всё, что происходит на сессии, остаётся между нами. Я следую профессиональному кодексу этики психолога.",
    },
    {
      question: "Сколько консультаций обычно нужно?",
      answer:
        "Зависит от запроса. Краткосрочная работа занимает 5–8 сессий, глубокая терапевтическая работа — дольше. Обсудим на первой встрече.",
    },
    {
      question: "Можно ли перенести запись?",
      answer:
        "Да, перенести сессию можно бесплатно при уведомлении за 24 часа. Напишите мне — договоримся о новом времени.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}