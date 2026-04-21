import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const faqSection = document.getElementById("faq")
    faqSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-accent py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-accent-foreground mb-6 text-balance">
          Готовы сделать первый шаг к гармонии?
        </h2>
        <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Сотни семей уже нашли путь друг к другу. Первая консультация — это не страшно.
          Это начало настоящих изменений.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleBookSession}
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent text-base"
          >
            Записаться на консультацию
          </Button>
          <Button
            onClick={handleLearnMore}
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
          >
            Частые вопросы
          </Button>
        </div>
        <p className="text-sm text-accent-foreground/80 mt-8">
          Конфиденциально • Без осуждения • Первая консультация уже на этой неделе
        </p>
      </div>
    </section>
  )
}