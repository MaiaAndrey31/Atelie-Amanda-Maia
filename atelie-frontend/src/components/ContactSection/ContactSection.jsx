// ContactSection component
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    eventDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento:

👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🎉 Categoria: ${formData.category}
📅 Data do Evento: ${formData.eventDate}

📝 Descrição do Pedido:
${formData.description}

Aguardo retorno! 😊`;

    const whatsappUrl = `https://wa.me/5518999999999?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        description: '',
        eventDate: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '(18) 99999-9999',
      link: 'https://wa.me/5518999999999'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'contato@atelieamandamaia.com',
      link: 'mailto:contato@atelieamandamaia.com'
    },
    {
      icon: '📍',
      title: 'Localização',
      value: 'Adamantina - SP',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Horário',
      value: 'Seg - Sex: 9h às 18h',
      link: '#'
    }
  ];

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p>Vamos criar algo especial para sua festa! Solicite seu orçamento personalizado.</p>
        </div>

        <div className="contact-content">
          {/* Informações de Contato */}
          <div className="contact-info">
            <h3>Fale Conosco</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link !== '#' ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram Embed */}
            <div className="instagram-section">
              <h4>Nos siga no Instagram</h4>
              <div className="instagram-feed">
                <a 
                  href="https://instagram.com/atelieamandamaia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  <span className="instagram-icon">📷</span>
                  @atelieamandamaia
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Orçamento */}
          <div className="contact-form">
            <h3>Solicite seu Orçamento</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(18) 99999-9999"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Data do Evento</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoria de Interesse *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Velas Personalizadas">Velas Personalizadas</option>
                  <option value="Topos de Bolo">Topos de Bolo</option>
                  <option value="Lembrancinhas">Lembrancinhas</option>
                  <option value="Família Personalizada">Família Personalizada</option>
                  <option value="Funko Pop">Funko Pop</option>
                  <option value="Chaveiros">Chaveiros</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Descrição do Pedido *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Descreva seu pedido: tema da festa, cores preferidas, quantidades, detalhes especiais..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="whatsapp-icon">💬</span>
                    Enviar pelo WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* WhatsApp Flutuante */}
        <a 
          href="https://wa.me/5518999999999" 
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
        >
          <span className="whatsapp-icon">💬</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;