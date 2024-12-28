import './commands'
export function gerarCPF() {
    function randomiza(n) {
      return Math.floor(Math.random() * n);
    }
  
    function mod(dividendo, divisor) {
      return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
    }
  
    const n1 = randomiza(10);
    const n2 = randomiza(10);
    const n3 = randomiza(10);
    const n4 = randomiza(10);
    const n5 = randomiza(10);
    const n6 = randomiza(10);
    const n7 = randomiza(10);
    const n8 = randomiza(10);
    const n9 = randomiza(10);
  
    const d1 =
      11 -
      mod(
        n1 * 10 +
          n2 * 9 +
          n3 * 8 +
          n4 * 7 +
          n5 * 6 +
          n6 * 5 +
          n7 * 4 +
          n8 * 3 +
          n9 * 2,
        11
      );
    const digito1 = d1 >= 10 ? 0 : d1;
  
    const d2 =
      11 -
      mod(
        n1 * 11 +
          n2 * 10 +
          n3 * 9 +
          n4 * 8 +
          n5 * 7 +
          n6 * 6 +
          n7 * 5 +
          n8 * 4 +
          n9 * 3 +
          digito1 * 2,
        11
      );
    const digito2 = d2 >= 10 ? 0 : d2;
  
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${digito1}${digito2}`;
  }
  module.exports = { gerarCPF };
