# React Modal and Editor Context

A flexible and reusable React package providing modal handling and editor state management through React Context.

## Installation

Install the package using npm:
```bash
npm install custom-handler-hook
```

## Features

- **Easy-to-use modal management**
- **Powerful editor state handling**
- **TypeScript support**
- **Undo/Redo functionality**
- **Device-specific previews**
- **Live mode toggle**

## Installation

To get started, install the package via npm:


```jsx
import { useModal } from 'custom-handler-hook';

const YourComponent = () => {
  const { setOpen, setClose, isOpen } = useModal();

  const openModal = () => {
    setOpen(<YourModalContent />);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <p>A modal is currently open</p>}
    </div>
  );
};


Using the Editor functionality
jsxCopyimport { useEditor } from 'custom-handler-hook';

const EditorComponent = () => {
  const { state, dispatch } = useEditor();

  const addElement = () => {
    dispatch({
      type: 'ADD_ELEMENT',
      payload: {
        containerId: 'some-container-id',
        elementDetails: {
          id: 'new-element-id',
          type: 'text',
          content: 'New Text Element',
          styles: {}
        }
      }
    });
  };

  return (
    <div>
      <button onClick={addElement}>Add Text Element</button>
      <div>
        {state.editor.elements.map(element => (
          <div key={element.id}>{/* Render your element */}</div>
        ))}
      </div>
    </div>
  );
};

```
## API Reference
ModalProvider
The ModalProvider component wraps your application and provides the modal and editor context.
useModal Hook
Returns:

```jsx
setOpen(modal: React.ReactNode, fetchData?: () => Promise<any>): Function to open a modal
setClose(): Function to close the modal
isOpen: Boolean indicating if a modal is currently open
```

useEditor Hook
Returns:

```jsx
state: The current editor state
dispatch: Function to dispatch actions to update the editor state
```

## TypeScript Support
This package is written in TypeScript and provides type definitions out of the box.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Fork the repository

```bash
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
```


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support
If you encounter any problems or have any questions, please open an issue in the GitHub repository.


