import { ADD_COMMENT_TO_ITEM_BY_ID, ADD_ITEM, DELETE_ITEM } from '../../constants/action-constants/addItemConstants'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id: id,
  }
}

export function addCommentToItemBy(comment, id) {
  return {
    type: ADD_COMMENT_TO_ITEM_BY_ID,
    comment: comment,
    id: id,
  }
}
