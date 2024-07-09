const arr: string[] = [];

arr.forEach((callBackArgument: string) => {
})

/* function funcionNormal(argument: any) { }
 */
export const funcionFlecha: (arg?: number) => string[] = (): string[] => {
    const testArr: string[] | number[] = ['manzana', 'pera', 'mandarina', 'tomate', 'palta', 'banano']
    return <string[]>testArr;
}