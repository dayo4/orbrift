export function logError(err) {
    if (typeof window !== 'undefined' && typeof console !== 'undefined')
    {
        console.error(err)
        return
    } else
    {
        throw err
    }
}