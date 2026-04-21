export function Benefits() {
  const benefits = [
    {
      icon: "🤝",
      title: "Безопасная атмосфера",
      description: "Консультации без осуждения — вас выслушают и поймут",
    },
    {
      icon: "⏰",
      title: "Гибкое расписание",
      description: "Сессии в удобное для вас время, включая вечер и выходные",
    },
    {
      icon: "💑",
      title: "Работа с парами",
      description: "Совместные и индивидуальные консультации для восстановления связи",
    },
    {
      icon: "🏠",
      title: "Онлайн и офлайн",
      description: "Выбирайте формат: видеозвонок из дома или личная встреча в кабинете",
    },
    {
      icon: "🧠",
      title: "Доказательные методы",
      description: "Когнитивно-поведенческий и системно-семейный подходы",
    },
    {
      icon: "🌱",
      title: "Долгосрочный результат",
      description: "Инструменты для самостоятельной работы над отношениями",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему выбирают меня</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для восстановления отношений
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Профессиональная поддержка на каждом этапе — от первого визита до устойчивых изменений в семье
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}