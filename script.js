var console = document.getElementById('contole');
var input = document.getElementById('input-field')

function story(text) {
    console.innerHTML += `<p>` + text + `</p>`
}
describe('submit function', () => {
    test('should call story function with input value', () => {
        // Arrange
        const inputValue = 'test';
        const storyMock = jest.fn();
        const inputMock = { value: inputValue };
        const consoleLogMock = jest.fn();
        const submit = () => {
            story(input.value);
            input.value = ''
            console.log('a')
        }
        // Act
        submit();
        // Assert
        expect(storyMock).toHaveBeenCalledWith(inputValue);
    });

    test('should clear the input field', () => {
        // Arrange
        const inputValue = 'test';
        const storyMock = jest.fn();
        const inputMock = { value: inputValue };
        const consoleLogMock = jest.fn();
        const submit = () => {
            story(input.value);
            input.value = ''
            console.log('a')
        }
        // Act
        submit();
        // Assert
        expect(inputMock.value).toBe('');
    });

    test('should log the string a to the console', () => {
        // Arrange
        const inputValue = 'test';
        const storyMock = jest.fn();
        const inputMock = { value: inputValue };
        const consoleLogMock = jest.fn();
        const submit = () => {
            story(input.value);
            input.value = ''
            console.log('a')
        }
        // Act
        submit();
        // Assert
        expect(consoleLogMock).toHaveBeenCalledWith('a');
    });
});

story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("axaxaxaxaxax")
story("我xaxaxaxaxax")



