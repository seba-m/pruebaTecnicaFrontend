import { get } from '@/utils/httpClient'

const getPrecio = () => {
    return get('actual');
}

const getHistorico = () => {
    return get('historico');
}

const GeneralService = {
    getPrecio,
    getHistorico
}

export default GeneralService;