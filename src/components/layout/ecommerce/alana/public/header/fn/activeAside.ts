import { $ } from "@fn/index"

const activeAside = (id: string) => {
    const asideSearch = $("asideSearch")
    const btnSearch = $('btnSearch')

    if (id === 'asideSearch') {
        asideSearch?.classList.toggle('active')
        btnSearch?.classList.toggle('active')
        return
    }

    throw new Error('id not found')

}

export default activeAside