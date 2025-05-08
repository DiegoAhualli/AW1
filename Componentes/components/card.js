export const cardComponent = (title, text, text2) => {
    
    title = title.toUpperCase()
    return `
    <div class="card">
        <div class="card-header">
            ${title}
        </div>

        <div class="card-body">
            ${text}
        </div>

        <div class="card-footer">
            ${text2}
        </div>
    </div>

    `
}