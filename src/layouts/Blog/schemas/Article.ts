export const ArticleGetAll = `
    ArticleGetAll {
        _id
        name
        views
        image
        lang
        likes
        description
        updatedAt
        createdAt
        categoryId
    }
`

export const ArticleGetOne = `
    ArticleGetOne (
        id: $id
    ) {
        _id
        name
        views
        likes
        lang
        body
        createdAt
        updatedAt
    }
`

export const ArticleGetFilter = `
    ArticleGetFilter (
        data: {
            categoryId: $category
        }
    ) {
        _id
        name
        views
        likes
        image
        lang
        description
        updatedAt
        createdAt
        categoryId
    }
`