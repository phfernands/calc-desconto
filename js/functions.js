const input = document.getElementById("value-buying");
const span1 = document.getElementById("discount-value");
const span2 = document.getElementById("payment-value");

export function getStoreDiscount(value, discountValue) {
  const discount = ((value * discountValue) / 100).toFixed(2);
  return discount;
}

export function getWorkerDiscount(value) {
  const workerDiscount = ((value * 35) / 100).toFixed(2);
  return workerDiscount;
}

export function calculateDiscount(ev) {
  const discountPerCent = ev.currentTarget.dataset.discount;
  const discount = getStoreDiscount(input.value, discountPerCent);
  const valueWithDiscont = (input.value - discount).toFixed(2);
  const workerDiscount = getWorkerDiscount(valueWithDiscont);
  const totalDiscount = parseFloat(workerDiscount) + parseFloat(discount);
  span1.innerText = totalDiscount;
  span2.innerText = (input.value - totalDiscount).toFixed(2);
  input.value = "";
}
