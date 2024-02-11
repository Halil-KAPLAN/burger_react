import "../../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label htmlFor="name">Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı girin..."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi girin..."
          />
          <label htmlFor="message">Mesajınız</label>
          <textarea rows="6" name="message" placeholder="Mesajınızı girin..." />
        </form>
      </div>
    </div>
  );
};

export default Contact;
