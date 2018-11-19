// @flow
import InputBox from '../InputBox';

type Props = {
  changeText: (string) => void,
  saveText: () => void,
  textValue: string,
};
it('should display a text input field', () => {
  let input = InputBox({
    changeText: () => {},
    saveText: () => {},
    textValue: 'test',
  });
  console.log(input);
  expect(input).toEqual('asd');
});
