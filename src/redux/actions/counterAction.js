import {INCREMENT_NUMBER} from "../types/counterTypes";
import {DECREMENT_NUMBER} from "../types/counterTypes";

export function incrementNumber () {
    return {
        type: INCREMENT_NUMBER
    }
}

export function decrementNumber () {
    return {
        type: DECREMENT_NUMBER
    }
}