import RaySo, {
    CardTheme,
    CardPadding,
    CardProgrammingLanguage,
} from './index.js'

const raySo = new RaySo({
    title: 'Custom Title',
    theme: "affas",
    padding: CardPadding.md,
    language: CardProgrammingLanguage.AUTO,
    debug: true,
    localPreview: true,
})
raySo.cook(`console.log('Hello, World!');`)
    .then(response => {
        console.log(
            '> Received an image buffer. Buffer length: %s',
            response.length
        )
    })
    .catch(err => {
        console.error(err.errors);
    })