import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const faqs = [
  { q: 'What is included in a cabin stay?', a: 'Every stay includes your cabin accommodation, daily breakfast (delivered or at the lodge), nightly dinner at The Table, access to the spa grounds and natural rock hot tub, use of all trails and outdoor amenities, firewood, and a welcome provisions basket.' },
  { q: 'Is Limberlost family-friendly?', a: 'The Grove cabin is designed with families in mind and includes a lofted bunk room and family-friendly amenities. Our grounds are safe and welcoming for children of all ages. We do ask that The Hearth bar remain an adults-only space after 8 PM.' },
  { q: 'What should I bring?', a: "We provide all linens, towels, toiletries, and robes. We recommend comfortable outdoor clothing, sturdy walking shoes, and layers for cool evenings. Swimwear for the hot tub. Everything else, we've thought of." },
  { q: 'Is there Wi-Fi and cell service?', a: 'Yes. High-speed Wi-Fi is available in all cabins and common areas. Cell service is available but can be spotty in some areas of the grounds. We consider this a feature.' },
  { q: 'What is your cancellation policy?', a: 'Reservations cancelled more than 14 days before check-in receive a full refund. Cancellations within 14 days are eligible for a credit toward a future stay. Same-day cancellations are non-refundable.' },
  { q: 'Can I host an event at Limberlost?', a: 'We welcome intimate gatherings, retreats, and small weddings. For groups of 10 or more, please contact us directly to discuss private buyout options and custom event planning.' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        e.target.reset();
      }, 3000);
    }, 1000);
  }

  return (
    <>
      <PageHero label="Visit" title="Reservations" subtitle="Begin planning your retreat to the Illinois countryside" />

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            <Reveal className="contact__form-wrapper">
              <span className="section__label">Inquire</span>
              <h2 className="section__title">Reserve Your Stay</h2>
              <p>Complete the form below and our team will respond within 24 hours with availability and rates. For immediate assistance, call us directly.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="check-in">Preferred Check-in</label>
                    <input type="date" id="check-in" name="check-in" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="check-out">Preferred Check-out</label>
                    <input type="date" id="check-out" name="check-out" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cabin">Preferred Cabin</label>
                  <select id="cabin" name="cabin">
                    <option value="">No preference</option>
                    <option value="prairie">The Prairie (sleeps 2)</option>
                    <option value="grove">The Grove (sleeps 4)</option>
                    <option value="ridgeline">The Ridgeline (sleeps 6)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" name="guests" defaultValue="2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Special Requests or Questions</label>
                  <textarea id="message" name="message" rows="4" />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--full"
                  disabled={status !== 'idle'}
                >
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Inquiry Sent' : 'Send Inquiry'}
                </button>
              </form>
            </Reveal>

            <Reveal className="contact__info">
              <div className="info-card">
                <h3>Contact</h3>
                <p><strong>Phone</strong><br />(312) 555-0192</p>
                <p><strong>Email</strong><br />hello@limberlost.com</p>
              </div>

              <div className="info-card" id="directions">
                <h3>Getting Here</h3>
                <p>Limberlost is located in the rolling countryside of northern Illinois, approximately 90 minutes south of downtown Chicago.</p>
                <p><strong>From Chicago</strong><br />Take I-55 South to Exit 217. Follow County Road 14 west for 8 miles. Limberlost entrance will be on your right.</p>
                <p><strong>Address</strong><br />Limberlost Retreat<br />Rural Route 14<br />Illinois</p>
              </div>

              <div className="info-card">
                <h3>Seasons &amp; Hours</h3>
                <p><strong>Cabin Season</strong><br />April through November</p>
                <p><strong>Restaurant</strong><br />Breakfast: 7:30 – 10:00 AM<br />Dinner: 6:00 – 9:00 PM</p>
                <p><strong>The Hearth Bar</strong><br />4:00 PM – Late</p>
                <p><strong>Spa</strong><br />9:00 AM – 7:00 PM<br />Hot tub: Dawn – 10:00 PM</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="faq">
        <div className="container">
          <span className="section__label section__label--center">Common Questions</span>
          <h2 className="section__title section__title--center">FAQ</h2>
          <div className="faq__list">
            {faqs.map((faq) => (
              <Reveal key={faq.q}>
                <details className="faq-item">
                  <summary className="faq-item__question">{faq.q}</summary>
                  <p className="faq-item__answer">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
