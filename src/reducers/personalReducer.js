import {
    AGREGAR_PERSONA,
    COMENZAR_DESCARGA_PERSONAL,
    AGREGAR_PERSONA_EXITO,
    DESCARGA_PERSONAL_EXITO,
    OBTENER_PERSONA_EDITAR,
    PERSONA_EDITADA_EXITO
    
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
            default:
            return state;
    }
}