import React from 'react';

const Context = React.createContext();

// This context contains two interesting components
export const { Provider, Consumer } = Context;

// This function takes a component...
export function withSession(Component) {
  // ...and returns another component...
  return function SessionedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
        <Consumer>
            {({state, actions}) => <Component {...props} session={state.session} actions={actions} />}
        </Consumer>
    );
  };
}