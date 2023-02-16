import { get } from '@/utils/httpClient'

const getPrecio = () => {
    return get('actual');
}

const getHistorial = () => {
    return get('historial');
}

const GeneralService = {
    getPrecio,
    getHistorial
}

export default GeneralService;