import { Button } from "@/components/ui/button"

export function Hero() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Семейная психология</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Гармония в семье начинается здесь
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Профессиональная помощь семейного психолога. Помогаю парам и семьям восстановить доверие,
              наладить общение и найти путь друг к другу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleBookSession}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Записаться на консультацию
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Узнать больше
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">300+</p>
                <p className="text-muted-foreground">Семей помогли</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5</p>
                <p className="text-muted-foreground">Рейтинг клиентов</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">12+</p>
                <p className="text-muted-foreground">Лет практики</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/def2bab1-c388-4db9-8e07-4666737705c4/files/a212a2fb-86b1-4e65-907e-40fe6fb90525.jpg"
              alt="Семейный психолог"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}