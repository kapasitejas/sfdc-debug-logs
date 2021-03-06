
const initialFeedbackState = {
  dialogOpen: true,
  replyTo: null,
  messages: []
}

export default function feedback (state = initialFeedbackState, action) {
  switch (action.type) {
    case 'TOGGLE_DIALOG':
      return {
        ...state,
        dialogOpen: !state.dialogOpen
      }
    case 'REPLY_TO':
      return {
        ...state,
        replyTo: action.replyTo
      }
    case 'FETCH_MESSAGES_RESPONSE':
      return {
        ...state,
        isLoading: false,
        lastUpdated: Date.now(),
        messages: action.messages
      }
    default:
      return state
  }
}
