import renderer from 'react-test-renderer';
import Nav, { List } from './Nav';
import rec from '../data/records.json';

function toJson(component) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result;
}

test('List renders when given data', () => {
  const component = renderer.create(<List {...rec.Social} />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Nav renders when given data', () => {
  const component = renderer.create(<Nav {...rec.Social} />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
