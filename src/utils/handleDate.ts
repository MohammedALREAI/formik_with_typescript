export type IHandleDate = {
    year:string,
    month:string
}
export const handleDate = (startDate:Date):IHandleDate => {
    const month = startDate.toString().split(' ')[1]
    const year = startDate.toString().split(' ')[3]
            return { year, month }
}
