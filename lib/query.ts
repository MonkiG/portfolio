export const $ = (query: string, context:any = document) => context.querySelector(query)
export const $$ = (query: string, context: any = document) => context.querySelectorAll(query)