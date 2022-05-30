export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name:'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
                // ? Enables the user interface for selecting what areas of an image should always be cropped, what areas should never be cropped
                // ? and the center of the area to crop around when resizing. The hotspot data is stored in the image field itself, not in the image asset
                // ? => makes it possible to responsively adapt images to different aspect ratios
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}