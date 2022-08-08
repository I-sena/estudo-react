// BUsCAR LINKS SALVOS

export async function getLinksSave(key){
    const myLink = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLink) || [];

    return linksSaves;
}


// SALVAR UM LINK NO LOCALSTORAGE

export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key)

    //VERIFICAR PARA NÃO SALVAR LINK DUPLICADO
    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Link duplicado!')
        return
    }

    //ADCIONANDO LINK
    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))
    console.log("Link salvo!!")

}


//DELETAR LINK
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks
}