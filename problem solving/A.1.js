let a = [];
export default function adjacentElementsProduct(a) {
    let max = 0;
    for (let i = 0; i < a.length - 1; i++)
        if ((a[i] * a[i + 1]) > max) {
            max = a[i] * a[i + 1];
        }
    console.log(max);
}
