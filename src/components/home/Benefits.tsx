export function Benefits() {
  return (
    <section className="benefits section">
      <p className="eyebrow">МЕНЬШЕ БУМАГИ. БОЛЬШЕ ВОЗМОЖНОСТЕЙ.</p>
      <h2>Почему цифровое приглашение?</h2>
      <div>
        {[
          "Не нужно печатать",
          "Легко отправить в WhatsApp и Instagram",
          "Всегда под рукой",
          "Карта и музыка внутри",
          "Информацию можно изменить",
        ].map((x) => (
          <p key={x}>
            <span>✧</span>
            {x}
          </p>
        ))}
      </div>
    </section>
  );
}
