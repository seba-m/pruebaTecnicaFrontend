import { get } from '@/utils/httpClient'

const getVenta = () => {
    return get('actual/venta');
}

const getCompra= () => {
    return get('actual/compra');
}

const getHistorico = () => {
    return get('historico');
}

const GeneralService = {
    getVenta,
    getCompra,
    getHistorico
}

export default GeneralService;