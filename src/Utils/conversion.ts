/* eslint-disable @typescript-eslint/no-unused-vars */
const toUrl = function(url:string):string{
    return url.toLowerCase().replace(' ', '-')
}

const nameToRoomUrl = function(url:string):string{
    //const suffix= "/room/"
    return url.replace(/\s+/g,"-")
}

const urlToLabel=function(u:string):string{
    return u.substring(u.lastIndexOf('/') + 1)
}

const urlConversion={
    suffix: "/room/",
    create(str:string):string{
        return str.replace(/\s+/g,"-")
    },
    extract(url:string):string{
        return url.replace(/\s+/g,"-")
    }
}


/**
 * To be used to name and retrieve the name at a collision
 */
const nameConversion={
    fix: "---",
    create(elm:string, name:string):string{
        return elm+this.fix+name
    },
    extract(name:string):string{
        return name.split(this.fix)[1]
    }
}


// const toUsrl={
//     room(n:string){
//         return 'room/'+n
//     }
// }





export {
    toUrl,
    nameToRoomUrl,
    urlToLabel,
    nameConversion
}