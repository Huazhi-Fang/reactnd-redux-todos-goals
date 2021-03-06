import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

// ES6 format: const checker = (store) => (next) => (action) => { }
function checker(store) {
    return function(next) {
        return function(action) {

                if (
                    action.type === ADD_TODO &&
                    action.todo.name.toLowerCase().includes('bitcoin')
                ) {
                    return alert("Nope. That's a bad idea.")
                }

                if (
                    action.type === ADD_GOAL &&
                    action.goal.name.toLowerCase().includes('bitcoin')
                ) {
                    return alert("Nope. That's a bad idea.")
                }

                return next(action)
        }
    }
}

export default checker