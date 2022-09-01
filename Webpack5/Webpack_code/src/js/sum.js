export default function sum(...args) {
    return args.reduce((value,current) => {
        return value + current
    },0)
}