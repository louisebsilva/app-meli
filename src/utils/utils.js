export const formatPrice = (price) => {
  const currency = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return currency.format(price);
};
