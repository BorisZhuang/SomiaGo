export const CHANGE_MSRP = "CHANGE_MSRP";
export const CHANGE_DISCOUNT = "CHANGE_DISCOUNT";
export const CHANGE_WEIGHT = "CHANGE_WEIGHT";
export const CHANGE_SHIPPING_RATE = "CHANGE_SHIPPING_RATE";
export const CHANGE_TAX = "CHANGE_TAX";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CHANGE_PROFIT_RATE = "CHANGE_PROFIT_RATE";
export const UPDATE_CALCULATOR = "UPDATE_CALCULATOR";

export const updateCalculator = ({msrp, discount, weight,
  shippingRate, tax, currency, profitRate}) => ({
    type: UPDATE_CALCULATOR,
    msrp,
    discount,
    weight,
    shippingRate,
    tax,
    currency,
    profitRate
});
