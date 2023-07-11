import { history, useRouteData } from '@umijs/max';
import routes from '../../config/routes';

export const getIframeUrl = () => {
  const { location } = history;
  const data = useRouteData();
  console.log('getIframeUrl', location, routes);
  let url = '';
  const iframeBaseUrl = 'https://www.zjaqsc.com';
  console.log(
    'digui',
    findObjectInTree(routes, (node) => node.path === location.pathname),
  );
  // findObjectByPath(routes, location.pathname)
  return iframeBaseUrl + url;
};

function findObjectInTree(tree, condition) {
  if (!tree || !Array.isArray(tree)) {
    return null;
  }
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (condition(node)) {
      return node;
    }
    if (node.routes && node.routes.length > 0) {
      const result = findObjectInTree(node.routes, condition);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export function getAreaIdList(areaId) {
  let array = new Array();
  if (areaId === null || areaId === '') return array;
  let areaId1 = areaId.substring(0, 2) + '0000';
  let areaId2 = areaId.substring(0, 4) + '00';
  let areaId3 = areaId.substring(0, 6);
  array.push(areaId1);
  if (areaId2 === areaId1) return array;

  array.push(areaId2);
  if (areaId3 === areaId2) return array;

  array.push(areaId3);
  if (areaId.length > 6) array.push(areaId);

  return array;
}
