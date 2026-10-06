export function HowItWorks() {
  return (
    <section className="section how">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / КАК ЭТО РАБОТАЕТ</p>
          <h2>
            От вашей идеи
            <br />
            <em>до одной красивой ссылки.</em>
          </h2>
        </div>
        <p>
          Три простых шага.
          <br />
          Всё остальное мы берём на себя.
        </p>
      </div>
      <div className="steps">
        {[
          ["Выберите дизайн", "Найдите вариант, который подходит именно вам."],
          [
            "Отправьте данные",
            "Имена, дату, фотографии, текст и место проведения.",
          ],
          [
            "Получите готовый сайт",
            "Мы всё настроим и отправим вашу персональную ссылку.",
          ],
        ].map(([t, d], i) => (
          <div key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
