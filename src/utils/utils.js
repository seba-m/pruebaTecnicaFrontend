export const trunc = (numero) => {
    const numeroTruncado = Math.trunc(numero * 100) / 100;
    const numeroFormateado = numeroTruncado.toFixed(2);
    return numeroFormateado;
}
