export const OBJtoXML = (object) => {
    let xml = ''
    
    for (let prop in object) {
        xml += `<${prop}>`

        if(Array.isArray(object[prop])) {
            for (let array of object[prop]) {
                xml += `</${prop}>`
                xml += `<${prop}>`

                xml += OBJtoXML(new Object(array))
            }
        } else if (typeof object[prop] == "object") {
            xml += OBJtoXML(new Object(object[prop]))
        } else {
            xml += object[prop]
        }

        xml += `</${prop}>`
    }

    xml = xml.replace(/<\/?[0-9]{1,}>/g,'')
    
    return xml
}
