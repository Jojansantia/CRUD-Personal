import {
    AGREGAR_PERSONA,
    AGREGAR_PERSONA_EXITO,
    AGREGAR_PERSONA_ERROR,
    COMENZAR_DESCARGA_PERSONAL,
    DESCARGA_PERSONAL_EXITO,
    DESCARGA_PERSONAL_ERROR,
    OBTENER_PERSONA_EDITAR,
    PERSONA_EDITADA_EXITO,
    PERSONA_EDITADA_ERROR,
    OBTENER_PERSONA_ELIMINAR,
    PERSONA_ELIMINADA_EXITO,
    PERSONA_ELIMINADA_ERROR
} from '../types';

const initialState = {
    personal: [],
    error: null,
    loading: false, 
    personaeliminar: null,
    personaeditar: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case COMENZAR_DESCARGA_PERSONAL:
        case AGREGAR_PERSONA: 
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PERSONA_EXITO:
            return {
                ...state,
                loading: false,
                personal: [...state.personal, action.payload]
            }
        case DESCARGA_PERSONAL_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                personal: action.payload
            }
        case  OBTENER_PERSONA_EDITAR:
            return {
                ...state,
                personaeditar: action.payload
            }
        case PERSONA_EDITADA_EXITO:
            return {
                ...state,
                personaeditar: null,
                personal: state.personal.map( persona => 
                    persona.id === action.payload.id ? persona = action.payload : persona
                )
            }
        case OBTENER_PERSONA_ELIMINAR:
            return {
                ...state,
                personaeliminar: action.payload
            }
        case PERSONA_ELIMINADA_EXITO:
            return {
                ...state,
                personal: state.personal.filter( persona => persona.id !== state.personaeliminar ),
                personaeliminar: null
            }
        case AGREGAR_PERSONA_ERROR:
        case DESCARGA_PERSONAL_ERROR:
        case PERSONA_ELIMINADA_ERROR:
        case PERSONA_EDITADA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
        return state;
    }
}