// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(e => {
    e.shaped(
        Item.of('minecraft:stone', 3),
        [
            'A B',
            ' C ',
            'B A'
        ],
        {
            A: 'minecraft:andesite',
            B: 'minecraft:diorite',
            C: 'minecraft:granite'
        })
})