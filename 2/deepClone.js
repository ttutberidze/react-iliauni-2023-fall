const customObj = {
    name: 'James',
    skills: ['Java', 'React'],
    address: {
        legal: {
            city: 'Tbilisi'
        },
        fiscal: {
            city: 'Batumi'
        },
        contacts: [
            {name: 'John', phone: '995'},
            {name: 'Petre', phone: '1234'},
        ]
    },
}

const deepClone = (obj) => {
    if(typeof obj !== 'object') {
        return obj;
    }
    const result = {}
    const keys = Object.keys(obj);
    keys.forEach(fieldName => {
        if(typeof obj[fieldName] === 'object') {
            if(Array.isArray(obj[fieldName])) {
                result[fieldName] = obj[fieldName].map(element => deepClone(element));
            } else {
                result[fieldName] = deepClone(obj[fieldName]);
            }
        } else {
            result[fieldName] = obj[fieldName];
        }
    })
    return result;

}
const clonedObject = deepClone(customObj);
clonedObject.address.contacts[1].phone = '5678'
console.log(customObj, clonedObject);