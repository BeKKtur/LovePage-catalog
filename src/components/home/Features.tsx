export function Features() {
  return (
    <section className="features section">
      <div>
        <p className="eyebrow">ПРОДУМАНО ДО МЕЛОЧЕЙ</p>
        <h2>
          Всё, что нужно —<br />
          <em>в одном приглашении.</em>
        </h2>
        <p>
          Красота, которая умеет быть полезной.
          <br />
          Ваши гости найдут всю информацию по одной ссылке.
        </p>
      </div>
      <div className="feature-list">
        {[
          "Фотографии",
          "Музыка",
          "Дата и время",
          "Таймер до события",
          "Адрес и 2ГИС",
          "RSVP",
          "Dress Code",
          "Программа вечера",
          "История пары",
          "Пожелания",
          "Анимации",
          "Ваши тексты",
        ].map((x, i) => (
          <div key={x}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
