export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Тренер" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О психологе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш семейный психолог
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 12 лет практики в области семейной психологии. Специализируюсь на помощи парам
              в кризисных ситуациях, восстановлении отношений и работе с детско-родительскими конфликтами.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Работаю по системно-семейному и когнитивно-поведенческому подходу. Каждая консультация —
              это безопасное пространство, где вас выслушают без осуждения и помогут найти выход.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Дипломированный психолог</p>
                  <p className="text-sm text-muted-foreground">Членство в Ассоциации семейных психологов</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">300+ семей</p>
                  <p className="text-sm text-muted-foreground">Восстановили гармонию в отношениях</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Онлайн и офлайн</p>
                  <p className="text-sm text-muted-foreground">Консультации в удобном для вас формате</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}