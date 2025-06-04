// Cart component
import React from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    const message = `🛍️ *Novo Pedido - Ateliê Amanda Maia*\n\n` +
      cartItems.map(item => 
        `📦 ${item.name}\n` +
        `💰 ${formatPrice(item.price)} x ${item.quantity}\n` +
        `💵 Subtotal: ${formatPrice(item.price * item.quantity)}\n`
      ).join('\n') +
      `\n🔸 *Total: ${formatPrice(cartTotal)}*\n\n` +
      `Gostaria de finalizar este pedido! 😊`;

    const whatsappUrl = `https://wa.me/5518999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-container" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Meu Carrinho</h2>
          <button className="cart-close" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <p>Seu carrinho está vazio</p>
              <span>Adicione produtos para começar!</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <p className="payment-info">
                  💳 Parcelamento disponível<br/>
                  💰 10% desconto no PIX
                </p>
              </div>

              <div className="cart-actions">
                <button 
                  className="btn-clear" 
                  onClick={clearCart}
                >
                  Limpar Carrinho
                </button>
                <button 
                  className="btn-whatsapp" 
                  onClick={handleWhatsAppOrder}
                >
                  <span className="whatsapp-icon">📱</span>
                  Finalizar no WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;