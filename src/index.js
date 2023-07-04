import _ from 'lodash';
export default str => str.split('').reverse().join('');

// export const right1 = _.without();

export const wrong1 = (coll = [], ...values) => {
  const [result] = coll.reduce(([prevColl, vals], item) => {
    const newVals = vals.filter((val) => val !== item);
    const nextColl = newVals.length === vals.length ? [...prevColl, item] : prevColl;
    return [nextColl, newVals];
  }, [[], values]);

  return result;
};

// console.log(_.without([3, 8, 9, 8, 10], 8, 10));

// console.log(wrong1([3, 8, 9, 8, 10], 8, 10));

const object = { a: [{ b: { c: 3 } }] };
// console.log(JSON.stringify(object));
 
_.set(object, 'a[0].b.c', 4);
 
_.set(object, ['x', '0', 'y', 'z'], 5);

// _.set(object, 'a[0].b[0].c[0]', 6);

const wrong3 = (obj, path, value) => {
  _.set(obj, path, value);
  obj.key = 'value';
  return obj;
};

