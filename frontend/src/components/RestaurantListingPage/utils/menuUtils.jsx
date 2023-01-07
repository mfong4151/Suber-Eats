

export const sortMenus = menuItems => {
    const headers = {}
    let header;

    for(const item of Object.values(menuItems)){
        if (header !== item.header)  header = item.header;
        headers[header]||= [];
        headers[header].push(item)
    }
    
    return headers
}