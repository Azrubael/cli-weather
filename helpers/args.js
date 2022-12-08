// На будущее может использоваться специальная библиотека для обработку
// агрументов CLI
// https://www.npmjs.com/package/yargs
// Yargs helps you build interactive command line tools, by parsing
// arguments and generating an elegant user interfac

function getArgs(args) {
   const res = {}
   const [executer, file, ...rest] = args
   rest.forEach((value, index, array) => {
      if (value.charAt(0) == '-') {
         if (index == array.length - 1) {
            res[value.substring(1)] = true
         } else if (array[index +1].charAt(0) != '-') {
            res[value.substring(1)] = array[index +1]
         } else {
            res[value.substring(1)] = true
         }
      }
   })
   return res
}

export { getArgs }