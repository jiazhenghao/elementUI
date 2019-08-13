const { PI } = Math;
const circle = {
    label: 'circleX',
    radius: 2
};
const circleArea = ({ radius }, { precision = 2 } = {}) => {
    return (PI * radius * radius).toFixed(precision);
};
console.log(circleArea(circle));//12.57
console.log(circleArea(circle, { precision: 4 }));//12.5664