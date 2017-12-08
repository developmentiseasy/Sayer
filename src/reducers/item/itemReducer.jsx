import {
  ADD_COMMENT_TO_ITEM_BY_ID,
  ADD_ITEM,
  DELETE_ITEM
} from '../../constants/action-constants/addItemConstants'
import * as shortid from 'shortid'
import { clone, filter, map } from 'lodash'

export default function itemReducer(state = {
  itemsArr: [],
}, action) {

  switch (action.type) {

    case ADD_ITEM:
      let newItems = clone(state.itemsArr)
      newItems.push({
        title: action.payload,
        id: shortid.generate(),
        comments: [],
      })
      return {
        itemsArr: newItems,
      }

    case DELETE_ITEM: {
      let newItems = filter(clone(state.itemsArr), (item) => (
        item.id !== action.id
      ))
      return {
        itemsArr: newItems,
      }
    }

    case ADD_COMMENT_TO_ITEM_BY_ID: {
      let newItems = map(clone(state.itemsArr), (item) => {
        if (item.id === action.id) {
          item.comments.push(action.comment)
        }
        return item
      })
      return {
        itemsArr: newItems,
      }
    }
    default:
      return state
  }
}