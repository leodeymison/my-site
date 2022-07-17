export const ArticleGetAll = `
    ArticleGetAll {
        id
        name
        views
        image
        lang
        description
        createdAt
        categoryId
    }
`

export const ArticleGetOne = `
    ArticleGetOne (
        id: $id
    ) {
        id
        name
        views
        lang
        body
        createdAt
    }
`