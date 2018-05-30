const note = {
  key_components: {
    'Reducers': {
      def: "function that returns a piece of the application state"
    },
    'Containers': {
      def: "Wraps a React component and makes available to the piece of state we need to pass to it as props inside the component"
    },
    'Actions (and ActionCreators)': [{
      def: "generate actions"
    },{
      exp: switch (action.type) {
            case 'CONTACT_SELECTED':
              return action.payload
      }
    }]
  },
  mapStateToProps: "will receive the whole state of the Redux Store, and we must select the piece that interesting for us",
  mapDispatchToProps: {
      function mapDispatchToProps(dispatch) {
        return bindActionCreators({
          myAction1: action1,
          myAction2: action2
        }, dispatch);
      }
  },
  Action_Creator: {
    exp:
        function selectContact(contact) {
          return {
              type: 'CONTACT_SELECTED',
              payload: contact
            }
        }
    }
  }
}


Redux - collect all the Datas
  central single object = state = application state
React - visual part of Datas
