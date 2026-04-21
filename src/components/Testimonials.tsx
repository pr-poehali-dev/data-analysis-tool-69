export function Testimonials() {
  const testimonials = [
    {
      name: "Анна и Дмитрий",
      role: "Семейная пара, 8 лет вместе",
      image: "/professional-woman-headshot.png",
      quote:
        "Мы были на грани развода. После 6 совместных сессий научились говорить друг с другом по-новому. Сейчас наша семья стала крепче, чем когда-либо.",
    },
    {
      name: "Ольга Смирнова",
      role: "Мама троих детей",
      image: "/professional-woman-smiling.png",
      quote:
        "Постоянные конфликты с мужем разрушали нашу семью. Психолог помогла нам понять причины и выстроить здоровые границы. Дети стали спокойнее — и мы тоже.",
    },
    {
      name: "Михаил Петров",
      role: "Отец, восстановил отношения с сыном",
      image: "/professional-man-headshot.png",
      quote:
        "Я не понимал, почему сын перестал со мной разговаривать. Три сессии — и мы снова общаемся. Рекомендую всем, кто хочет сохранить семью.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории клиентов</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы семей, которым помогли</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}